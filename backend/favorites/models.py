from django.db import models
from django.conf import settings
from destinations.models import Destination


class Favorite(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='favorites')
    destination = models.ForeignKey(Destination, on_delete=models.CASCADE, related_name='favorited_by')
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ('user', 'destination')
        ordering = ['-created_at']
        db_table = 'favorites'

    def __str__(self):
        return f"{self.user.first_name} - {self.destination.name}"
