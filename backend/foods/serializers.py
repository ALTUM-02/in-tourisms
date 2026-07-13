from rest_framework import serializers
from .models import Restaurant, MenuItem


class MenuItemSerializer(serializers.ModelSerializer):
    restaurant_name = serializers.CharField(source='restaurant.name', read_only=True)

    class Meta:
        model = MenuItem
        fields = '__all__'
        read_only_fields = ['id']


class RestaurantSerializer(serializers.ModelSerializer):
    menu_items = MenuItemSerializer(many=True, read_only=True)
    destination_name = serializers.CharField(source='destination.name', read_only=True)

    class Meta:
        model = Restaurant
        fields = '__all__'
        read_only_fields = ['id', 'created_at']


class RestaurantListSerializer(serializers.ModelSerializer):
    destination_name = serializers.CharField(source='destination.name', read_only=True)

    class Meta:
        model = Restaurant
        fields = ['id', 'name', 'description', 'image', 'cuisine_type',
                  'rating', 'price_range', 'destination', 'destination_name']
