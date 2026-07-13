from rest_framework import serializers
from .models import Favorite
from destinations.serializers import DestinationListSerializer


class FavoriteSerializer(serializers.ModelSerializer):
    destination = DestinationListSerializer(read_only=True)
    destination_id = serializers.IntegerField(write_only=True)

    class Meta:
        model = Favorite
        fields = ['id', 'user', 'destination', 'destination_id', 'created_at']
        read_only_fields = ['id', 'user', 'created_at']

    def create(self, validated_data):
        validated_data['user'] = self.context['request'].user
        return super().create(validated_data)
