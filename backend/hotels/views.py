from rest_framework import viewsets, filters
from django_filters.rest_framework import DjangoFilterBackend
from .models import Hotel, RoomType
from .serializers import HotelSerializer, HotelListSerializer, RoomTypeSerializer
from destinations.views import IsOfficerOrReadOnly


class HotelViewSet(viewsets.ModelViewSet):
    queryset = Hotel.objects.select_related('destination').all()
    permission_classes = [IsOfficerOrReadOnly]
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    filterset_fields = ['destination', 'rating']
    search_fields = ['name', 'location']

    def get_serializer_class(self):
        if self.action == 'list':
            return HotelListSerializer
        return HotelSerializer


class RoomTypeViewSet(viewsets.ModelViewSet):
    queryset = RoomType.objects.select_related('hotel').all()
    serializer_class = RoomTypeSerializer
    permission_classes = [IsOfficerOrReadOnly]
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['hotel']
