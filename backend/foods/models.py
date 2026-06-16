from django.db import models

# Create your models here.
from django.db import models
from destinations.models import Destination


class Food(models.Model):

    destination = models.ForeignKey(
        Destination,
        on_delete=models.CASCADE,
        related_name='foods'
    )

    name = models.CharField(
        max_length=200
    )

    description = models.TextField()

    image = models.ImageField(
        upload_to='foods/'
    )

    price = models.DecimalField(
        max_digits=10,
        decimal_places=2
    )

    category = models.CharField(
        max_length=50,
        choices=[
            ('Food', 'Food'),
            ('Drink', 'Drink')
        ]
    )

    is_local_speciality = models.BooleanField(
        default=False
    )

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    def __str__(self):
        return self.name