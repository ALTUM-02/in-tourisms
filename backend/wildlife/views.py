from rest_framework import viewsets, filters
from django_filters.rest_framework import DjangoFilterBackend
from .models import Wildlife
from .serializers import WildlifeSerializer
from destinations.views import IsOfficerOrReadOnly


class WildlifeViewSet(viewsets.ModelViewSet):
    queryset = Wildlife.objects.select_related('destination').all()
    serializer_class = WildlifeSerializer
    permission_classes = [IsOfficerOrReadOnly]
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    filterset_fields = ['destination', 'conservation_status']
    search_fields = ['name', 'species']
