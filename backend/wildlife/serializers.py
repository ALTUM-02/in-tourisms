from rest_framework import serializers
from .models import Wildlife


class WildlifeSerializer(serializers.ModelSerializer):
    destination_name = serializers.CharField(source='destination.name', read_only=True)

    class Meta:
        model = Wildlife
        fields = '__all__'
        read_only_fields = ['id', 'created_at']
