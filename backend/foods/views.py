from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets

from .models import Food
from .serializers import FoodSerializer


class FoodViewSet(
    viewsets.ModelViewSet
):

    queryset = Food.objects.all()

    serializer_class = FoodSerializer