from django.db import models


class Destination(models.Model):
    CATEGORY_CHOICES = (
        ('Safari', 'Safari'),
        ('Beach', 'Beach'),
        ('Mountain', 'Mountain'),
        ('Waterfall', 'Waterfall'),
        ('Cultural', 'Cultural'),
        ('Other', 'Other'),
    )
    name = models.CharField(max_length=200)
    description = models.TextField()
    location = models.CharField(max_length=200)
    country = models.CharField(max_length=100)
    latitude = models.DecimalField(max_digits=9, decimal_places=6, default=0)
    longitude = models.DecimalField(max_digits=9, decimal_places=6, default=0)
    image = models.URLField(blank=True)
    rating = models.DecimalField(max_digits=3, decimal_places=1, default=0)
    review_count = models.IntegerField(default=0)
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES, default='Other')
    is_featured = models.BooleanField(default=False)
    best_season = models.CharField(max_length=100, blank=True)
    entry_fee = models.DecimalField(max_digits=8, decimal_places=2, default=0)
    opening_hours = models.CharField(max_length=100, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-is_featured', '-rating']
        db_table = 'destinations'

    def __str__(self):
        return self.name
