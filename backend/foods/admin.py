from rest_framework import viewsets, permissions
from .models import MenuItem
from .serializers import FavoriteSerializer
from favorites.models import Favorite
from django.contrib import admin


class FavoriteViewSet(viewsets.ModelViewSet):
    serializer_class = FavoriteSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Favorite.objects.filter(user=self.request.user).select_related('destination')
