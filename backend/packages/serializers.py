from rest_framework import serializers
from .models import Package


class PackageSerializer(serializers.ModelSerializer):
    destination_name = serializers.CharField(source='destination.name', read_only=True)

    class Meta:
        model = Package
        fields = '__all__'
        read_only_fields = ['id', 'created_at']
