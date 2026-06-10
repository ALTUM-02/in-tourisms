from django.shortcuts import render
from django_filters.rest_framework import DjangoFilterBackend

# Create your views here.
from rest_framework import viewsets
from rest_framework.permissions import (
    IsAuthenticatedOrReadOnly
)

from .models import Destination
from .serializers import (
    DestinationSerializer
)


class DestinationViewSet(
    viewsets.ModelViewSet
):

    queryset = Destination.objects.all()

    serializer_class = DestinationSerializer
    
    filter_backends = [
        DjangoFilterBackend
    ]
    
    filterset_fields = [
        'region',
        'entry_fee'
    ]

    permission_classes = [
        IsAuthenticatedOrReadOnly
    ]