from rest_framework import serializers
from .models import Destination


class DestinationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Destination
        fields = '__all__'
        read_only_fields = ['id', 'created_at', 'updated_at']


class DestinationListSerializer(serializers.ModelSerializer):
    """Lighter serializer for list views."""
    class Meta:
        model = Destination
        fields = ['id', 'name', 'description', 'location', 'country', 'image',
                  'rating', 'review_count', 'category', 'is_featured', 'best_season', 'entry_fee']
