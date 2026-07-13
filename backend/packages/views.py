from rest_framework import viewsets, permissions
from .models import Package
from .serializers import PackageSerializer
from destinations.views import IsOfficerOrReadOnly


class PackageViewSet(viewsets.ModelViewSet):
    queryset = Package.objects.select_related('destination').all()
    serializer_class = PackageSerializer
    permission_classes = [IsOfficerOrReadOnly]
