from rest_framework import serializers
from .models import Booking


class BookingSerializer(serializers.ModelSerializer):
    hotel_name = serializers.CharField(source='hotel.name', read_only=True)
    room_type_name = serializers.CharField(source='room_type.name', read_only=True, default='')

    class Meta:
        model = Booking
        fields = '__all__'
        read_only_fields = ['id', 'user', 'total_price', 'created_at']

    def create(self, validated_data):
        validated_data['user'] = self.context['request'].user
        return super().create(validated_data)
