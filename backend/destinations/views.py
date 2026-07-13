from rest_framework import viewsets, permissions, filters
from rest_framework.decorators import action
from rest_framework.response import Response
from django.db import models
from django_filters.rest_framework import DjangoFilterBackend
from .models import Destination
from .serializers import DestinationSerializer, DestinationListSerializer


class IsOfficerOrReadOnly(permissions.BasePermission):
    def has_permission(self, request, view):
        if request.method in permissions.SAFE_METHODS:
            return True
        return request.user.is_authenticated and request.user.role == 'officer'


class DestinationViewSet(viewsets.ModelViewSet):
    queryset = Destination.objects.all()
    permission_classes = [IsOfficerOrReadOnly]
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    filterset_fields = ['category', 'country', 'is_featured']
    search_fields = ['name', 'location', 'description']
    ordering_fields = ['rating', 'review_count', 'entry_fee', 'created_at']

    def get_serializer_class(self):
        if self.action == 'list':
            return DestinationListSerializer
        return DestinationSerializer

    @action(detail=False, methods=['get'])
    def featured(self, request):
        featured = Destination.objects.filter(is_featured=True)[:6]
        serializer = DestinationListSerializer(featured, many=True)
        return Response(serializer.data)

    @action(detail=False, methods=['get'])
    def search(self, request):
        query = request.query_params.get('q', '')
        if query:
            destinations = Destination.objects.filter(
                models.Q(name__icontains=query) |
                models.Q(location__icontains=query) |
                models.Q(description__icontains=query)
            )
        else:
            destinations = Destination.objects.all()
        serializer = DestinationListSerializer(destinations[:20], many=True)
        return Response(serializer.data)
