from rest_framework import serializers
from .models import Food


class FoodSerializer(
    serializers.ModelSerializer
):

    destination_name = serializers.CharField(
        source='destination.name',
        read_only=True
    )

    class Meta:
        model = Food
        fields = '__all__'