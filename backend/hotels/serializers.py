from rest_framework import serializers
from .models import Hotel, RoomType


class RoomTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = RoomType
        fields = '__all__'


class HotelSerializer(serializers.ModelSerializer):
    room_types = RoomTypeSerializer(many=True, read_only=True)
    destination_name = serializers.CharField(source='destination.name', read_only=True)

    class Meta:
        model = Hotel
        fields = '__all__'
        read_only_fields = ['id', 'created_at']


class HotelListSerializer(serializers.ModelSerializer):
    destination_name = serializers.CharField(source='destination.name', read_only=True)

    class Meta:
        model = Hotel
        fields = ['id', 'name', 'description', 'location', 'image', 'rating',
                  'price_per_night', 'destination', 'destination_name', 'amenities']
