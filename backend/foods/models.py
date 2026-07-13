from django.db import models
from destinations.models import Destination


class Restaurant(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField()
    image = models.URLField(blank=True)
    cuisine_type = models.CharField(max_length=100)
    rating = models.DecimalField(max_digits=3, decimal_places=1, default=0)
    price_range = models.CharField(max_length=10, default='$$')
    destination = models.ForeignKey(Destination, on_delete=models.CASCADE, related_name='restaurants')
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-rating']
        db_table = 'restaurants'

    def __str__(self):
        return self.name


class MenuItem(models.Model):
    CATEGORY_CHOICES = (
        ('food', 'Food'),
        ('drink', 'Drink'),
        ('dessert', 'Dessert'),
    )
    name = models.CharField(max_length=200)
    description = models.TextField()
    image = models.URLField(blank=True)
    price = models.DecimalField(max_digits=8, decimal_places=2)
    category = models.CharField(max_length=10, choices=CATEGORY_CHOICES, default='food')
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE, related_name='menu_items')
    is_vegetarian = models.BooleanField(default=False)
    is_vegan = models.BooleanField(default=False)
    is_halal = models.BooleanField(default=False)

    class Meta:
        ordering = ['category', 'name']
        db_table = 'menu_items'

    def __str__(self):
        return f"{self.name} ({self.restaurant.name})"
