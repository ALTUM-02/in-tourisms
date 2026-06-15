from django.db import models

# Create your models here.
from django.db import models
from destinations.models import Destination


class Hotel(models.Model):

    destination = models.ForeignKey(
        Destination,
        on_delete=models.CASCADE,
        related_name='hotels'
    )

    name = models.CharField(
        max_length=200
    )

    description = models.TextField()

    address = models.CharField(
        max_length=255
    )

    phone = models.CharField(
        max_length=20
    )

    email = models.EmailField()

    image = models.ImageField(
        upload_to='hotels/'
    )

    price_per_night = models.DecimalField(
        max_digits=10,
        decimal_places=2
    )

    stars = models.IntegerField(
        default=3
    )

    wifi = models.BooleanField(
        default=True
    )

    swimming_pool = models.BooleanField(
        default=False
    )

    restaurant = models.BooleanField(
        default=True
    )

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    def __str__(self):
        return self.name