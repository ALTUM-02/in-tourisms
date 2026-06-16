from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets

from .models import Hotel
from .serializers import HotelSerializer


class HotelViewSet(viewsets.ModelViewSet):
    queryset = Hotel.objects.all()
    serializer_class = HotelSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)

        if not serializer.is_valid():
            print(serializer.errors)
            return Response(
                serializer.errors,
                status=400
            )

        serializer.save()

        return Response(
            serializer.data,
            status=201
        )