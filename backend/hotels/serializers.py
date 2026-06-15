from rest_framework import serializers
from .models import Hotel


class HotelSerializer(
    serializers.ModelSerializer
):

    destination_name = serializers.CharField(
        source='destination.name',
        read_only=True
    )

    class Meta:
        model = Hotel
        fields = '__all__'