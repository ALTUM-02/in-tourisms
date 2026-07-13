from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets, permissions, status
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import Booking
from .serializers import BookingSerializer


class BookingViewSet(viewsets.ModelViewSet):
    serializer_class = BookingSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Booking.objects.filter(user=self.request.user).select_related('hotel', 'room_type')

    @action(detail=True, methods=['post'])
    def cancel(self, request, pk=None):
        booking = self.get_object()
        if booking.status in ('cancelled', 'completed'):
            return Response({'detail': 'Cannot cancel this booking.'}, status=status.HTTP_400_BAD_REQUEST)
        booking.status = 'cancelled'
        booking.save()
        return Response(BookingSerializer(booking).data)
