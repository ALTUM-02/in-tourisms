from django.shortcuts import render

# Create your views here.
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from destinations.models import Destination
from wildlife.models import Animal
from hotels.models import Hotel
from foods.models import Food

class DashboardView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):