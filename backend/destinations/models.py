from django.db import models

# Create your models here.

class Destination(models.Model):

    name = models.CharField(max_length=200)

    region = models.CharField(max_length=100)

    district = models.CharField(
        max_length=100,
        blank=True
    )

    description = models.TextField()

    location = models.CharField(max_length=255)
    
    longitude = models.FloatField()

    latitude = models.FloatField()

    entry_fee = models.DecimalField(
        max_digits=10,
        decimal_places=2
    )

    image = models.ImageField(
        upload_to='destinations/'
    )

    video = models.FileField(
        upload_to='destination_videos/',
        blank=True,
        null=True
    )

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    updated_at = models.DateTimeField(
        auto_now=True
    )

    def __str__(self):
        return self.name