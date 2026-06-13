from rest_framework import serializers
from .models import Animal


class AnimalSerializer(
    serializers.ModelSerializer
):

    destination_name = serializers.CharField(
        source='destination.name',
        read_only=True
    )

    class Meta:
        model = Animal
        fields = '__all__'