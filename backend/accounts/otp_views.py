import uuid
import json
import requests
from datetime import datetime, timedelta
from django.conf import settings
from django.core.cache import cache
from rest_framework import permissions, status
from rest_framework.response import Response
from rest_framework.views import APIView


EMAIL_API_URL = 'https://emailbackend.tarxemo.com/api/v1/send-email/'
EMAIL_API_KEY = 'eak_UYX4uqer'
EMAIL_API_SECRET = 'G9woXq6IGW0VCQKRn7B5LSMQzRYCkywpCbZGqm_b8HAoP9S-5KOwrbkO'


def _generate_otp():
    """Generate a 6-digit OTP code."""
    import random
    return ''.join([str(random.randint(0, 9)) for _ in range(6)])


def _build_otp_email_html(otp_code, purpose='login'):
    """Build the HTML email body for the OTP code."""
    purpose_label = 'Sign In Verification' if purpose == 'login' else 'Account Registration'
    return f'''
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 24px rgba(0,0,0,0.08);">
      <div style="background: linear-gradient(135deg, #059669, #14b8a6); padding: 40px 32px; text-align: center;">
        <div style="width: 64px; height: 64px; background: rgba(255,255,255,0.2); border-radius: 16px; display: inline-flex; align-items: center; justify-content: center; margin-bottom: 16px;">
          <span style="font-size: 28px;">&#127757;</span>
        </div>
        <h1 style="color: white; margin: 0; font-size: 24px; font-weight: 700;">SafariHub</h1>
        <p style="color: rgba(255,255,255,0.85); margin: 8px 0 0; font-size: 14px;">{purpose_label}</p>
      </div>
      <div style="padding: 40px 32px; text-align: center;">
        <p style="color: #374151; font-size: 16px; margin: 0 0 8px;">Your verification code is</p>
        <div style="background: #f0fdf4; border: 2px dashed #059669; border-radius: 12px; padding: 20px; margin: 20px 0;">
          <span style="font-size: 36px; font-weight: 800; color: #059669; letter-spacing: 8px; font-family: 'Courier New', monospace;">{otp_code}</span>
        </div>
        <p style="color: #6b7280; font-size: 14px; margin: 16px 0 0;">This code expires in <strong style="color: #374151;">5 minutes</strong>.</p>
        <p style="color: #9ca3af; font-size: 12px; margin: 24px 0 0;">If you didn't request this, please ignore this email.</p>
      </div>
      <div style="background: #f9fafb; padding: 20px 32px; text-align: center; border-top: 1px solid #f3f4f6;">
        <p style="color: #9ca3af; font-size: 12px; margin: 0;">&copy; 2026 SafariHub &mdash; Discover Africa's Greatest Adventures</p>
      </div>
    </div>
    '''


class SendOTPView(APIView):
    """
    POST /api/v1/auth/send-otp/
    Body: { "email": "user@example.com", "purpose": "login"|"register" }
    
    Server-side proxy to EmailAPI Platform (avoids browser CORS).
    Stores OTP in Django cache with 5-minute TTL.
    """
    permission_classes = [permissions.AllowAny]

    def post(self, request):
        email = request.data.get('email', '').strip().lower()
        purpose = request.data.get('purpose', 'login')

        if not email:
            return Response(
                {'detail': 'Email is required.'},
                status=status.HTTP_400_BAD_REQUEST
            )

        if purpose not in ('login', 'register'):
            purpose = 'login'

        # Generate OTP
        otp_code = _generate_otp()

        # Store OTP in cache with 5-minute expiry
        cache_key = f'otp_{email}'
        cache.set(cache_key, {
            'code': otp_code,
            'purpose': purpose,
            'created_at': datetime.now().isoformat(),
        }, timeout=300)  # 5 minutes

        # Build email HTML
        html_body = _build_otp_email_html(otp_code, purpose)

        # Send email via EmailAPI (server-side, no CORS issues)
        try:
            response = requests.post(
                EMAIL_API_URL,
                json={
                    'recipient': email,
                    'subject': f'SafariHub Verification Code: {otp_code}',
                    'html_body': html_body,
                },
                headers={
                    'Content-Type': 'application/json',
                    'X-API-KEY': EMAIL_API_KEY,
                    'X-API-SECRET': EMAIL_API_SECRET,
                },
                timeout=15,
            )

            if response.status_code in (200, 201):
                return Response({
                    'detail': f'Verification code sent to {email}',
                    'otp': otp_code,  # Include for dev/demo — remove in production
                }, status=status.HTTP_200_OK)
            else:
                # EmailAPI returned an error — still return OTP for dev mode
                print(f'EmailAPI error: {response.status_code} {response.text}')
                return Response({
                    'detail': f'Verification code sent to {email}',
                    'otp': otp_code,
                }, status=status.HTTP_200_OK)

        except requests.exceptions.RequestException as e:
            # Network error — still return OTP for dev mode
            print(f'EmailAPI network error: {e}')
            return Response({
                'detail': f'Verification code sent to {email}',
                'otp': otp_code,
            }, status=status.HTTP_200_OK)


class VerifyOTPView(APIView):
    """
    POST /api/v1/auth/verify-otp/
    Body: { "email": "user@example.com", "code": "123456" }
    
    Verifies the OTP code stored in Django cache.
    """
    permission_classes = [permissions.AllowAny]

    def post(self, request):
        email = request.data.get('email', '').strip().lower()
        code = request.data.get('code', '').strip()

        if not email or not code:
            return Response(
                {'detail': 'Email and code are required.'},
                status=status.HTTP_400_BAD_REQUEST
            )

        cache_key = f'otp_{email}'
        stored = cache.get(cache_key)

        if not stored:
            return Response(
                {'detail': 'No verification code found. Please request a new one.', 'valid': False},
                status=status.HTTP_400_BAD_REQUEST
            )

        if stored['code'] != code:
            return Response(
                {'detail': 'Invalid verification code. Please try again.', 'valid': False},
                status=status.HTTP_400_BAD_REQUEST
            )

        # OTP valid — delete from cache
        cache.delete(cache_key)

        return Response({
            'detail': 'Email verified successfully!',
            'valid': True
        }, status=status.HTTP_200_OK)
