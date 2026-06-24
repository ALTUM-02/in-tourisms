from django.shortcuts import render
from .models import User
from .serializers import RegisterSerializer
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework.response import Response

# Create your views here.
class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = RegisterSerializer
    
class ProfileView(APIView):
    permission_classes = [IsAuthenticated]
    
    def get(self, request):
        user = request.user
        
        return Response({
            'id': user.id,
            'username': user.username,
            'email': user.email,
            'role': user.role,
            'phone': user.phone,
            'full_name': user.full_name,
            'country': user.country,
            'profile_photo': (
                request.build_absolute_uri(
                    user.profile_photo.url
                )
                if user.profile_photo
                else None
            )
        })