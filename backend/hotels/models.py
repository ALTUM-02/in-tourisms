from django.db import models
from destinations.models import Destination


class Hotel(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField()
    location = models.CharField(max_length=200)
    image = models.URLField(blank=True)
    rating = models.DecimalField(max_digits=3, decimal_places=1, default=0)
    price_per_night = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    destination = models.ForeignKey(Destination, on_delete=models.CASCADE, related_name='hotels')
    amenities = models.JSONField(default=list, blank=True)
    contact_phone = models.CharField(max_length=20, blank=True)
    contact_email = models.EmailField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-rating']
        db_table = 'hotels'

    def __str__(self):
        return self.name


class RoomType(models.Model):
    hotel = models.ForeignKey(Hotel, on_delete=models.CASCADE, related_name='room_types')
    name = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    capacity = models.IntegerField(default=2)
    description = models.TextField(blank=True)

    class Meta:
        db_table = 'room_types'

    def __str__(self):
        return f"{self.hotel.name} - {self.name}"
