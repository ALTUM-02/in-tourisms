from django.db import models
from destinations.models import Destination


class Package(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField()
    image = models.URLField(blank=True)
    destination = models.ForeignKey(Destination, on_delete=models.CASCADE, related_name='packages')
    price = models.DecimalField(max_digits=10, decimal_places=2)
    duration_days = models.IntegerField(default=1)
    includes = models.JSONField(default=list, blank=True)
    is_popular = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-is_popular', '-created_at']
        db_table = 'packages'

    def __str__(self):
        return self.name
