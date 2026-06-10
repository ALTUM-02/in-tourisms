from django.shortcuts import render

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

    permission_classes = [
        IsAuthenticatedOrReadOnly
    ]