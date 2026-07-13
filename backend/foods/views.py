from rest_framework import viewsets, filters, status
from rest_framework.decorators import action
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend
from .models import Restaurant, MenuItem
from .serializers import RestaurantSerializer, RestaurantListSerializer, MenuItemSerializer
from destinations.views import IsOfficerOrReadOnly


class RestaurantViewSet(viewsets.ModelViewSet):
    queryset = Restaurant.objects.select_related('destination').all()
    permission_classes = [IsOfficerOrReadOnly]
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    filterset_fields = ['destination', 'cuisine_type']
    search_fields = ['name', 'cuisine_type']

    def get_serializer_class(self):
        if self.action == 'list':
            return RestaurantListSerializer
        return RestaurantSerializer

    @action(detail=True, methods=['get'])
    def menu(self, request, pk=None):
        restaurant = self.get_object()
        items = restaurant.menu_items.all()
        serializer = MenuItemSerializer(items, many=True)
        return Response(serializer.data)


class MenuItemViewSet(viewsets.ModelViewSet):
    queryset = MenuItem.objects.select_related('restaurant').all()
    serializer_class = MenuItemSerializer
    permission_classes = [IsOfficerOrReadOnly]
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['restaurant', 'category', 'is_vegetarian', 'is_vegan', 'is_halal']
