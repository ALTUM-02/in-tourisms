from django.db import models

# Create your models here.
from django.db import models
from destinations.models import Destination


class Animal(models.Model):

    name = models.CharField(
        max_length=100
    )

    scientific_name = models.CharField(
        max_length=200
    )

    description = models.TextField()

    image = models.ImageField(
        upload_to='animals/'
    )

    destination = models.ForeignKey(
        Destination,
        on_delete=models.CASCADE,
        related_name='animals'
    )

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    def __str__(self):
        return self.name
    
from django.db import models
from destinations.models import Destination
