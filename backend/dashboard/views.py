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

        return Response({

            "user":{

                "username":request.user.username,

                "full_name":request.user.full_name,

                "photo":
                request.build_absolute_uri(
                    request.user.profile_photo.url
                )
                if request.user.profile_photo
                else None

            },

            "statistics":{

                "destinations":
                Destination.objects.count(),

                "animals":
                Animal.objects.count(),

                "hotels":
                Hotel.objects.count(),

                "foods":
                Food.objects.count()

            },

            "featured_destinations":
            list(
                Destination.objects.values()[:6]
            ),

            "featured_animals":
            list(
                Animal.objects.values()[:6]
            ),

            "featured_hotels":
            list(
                Hotel.objects.values()[:6]
            ),

            "featured_foods":
            list(
                Food.objects.values()[:6]
            )

        })