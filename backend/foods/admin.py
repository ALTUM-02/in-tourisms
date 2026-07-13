from rest_framework import viewsets, permissions
from .models import favorite
from .serializers import FavoriteSerializer


class FavoriteViewSet(viewsets.ModelViewSet):
    serializer_class = FavoriteSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return favorite.objects.filter(user=self.request.user).select_related('destination')
