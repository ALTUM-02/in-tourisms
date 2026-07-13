from django.db import models
from destinations.models import Destination


class WildlifeAnimal(models.Model):
    STATUS_CHOICES = (
        ('Least Concern', 'Least Concern'),
        ('Near Threatened', 'Near Threatened'),
        ('Vulnerable', 'Vulnerable'),
        ('Endangered', 'Endangered'),
        ('Critically Endangered', 'Critically Endangered'),
    )
    name = models.CharField(max_length=200)
    species = models.CharField(max_length=200)
    description = models.TextField()
    image = models.URLField(blank=True)
    habitat = models.CharField(max_length=300, blank=True)
    conservation_status = models.CharField(max_length=30, choices=STATUS_CHOICES, default='Least Concern')
    destination = models.ForeignKey(Destination, on_delete=models.CASCADE, related_name='wildlife')
    fun_facts = models.JSONField(default=list, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['name']
        db_table = 'wildlife'

    def __str__(self):
        return f"{self.name} ({self.species})"
