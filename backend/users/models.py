from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class User(AbstractUser):
    
    ROLE_CHOICES = (
        ('tourist', 'Tourist'),
        ('officer', 'Officer'),
        ('admin', 'Admin'),
    )
    
    role = models.CharField(max_length=20, choices=ROLE_CHOICES, default='tourist')
    
    phone = models.CharField(max_length=20, blank=True, null=True)