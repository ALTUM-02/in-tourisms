from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class User(AbstractUser):
    
    ROLE_CHOICES = (
        ('tourist', 'Tourist'),
        ('officer', 'Officer'),
        ('admin', 'Admin'),
    )

    role = models.CharField(
        max_length=20,
        choices=ROLE_CHOICES,
        default='tourist'
    )

    phone = models.CharField(
        max_length=20,
        blank=True
    )

    full_name = models.CharField(
        max_length=200,
        blank=True
    )

    country = models.CharField(
        max_length=100,
        blank=True
    )

    profile_photo = models.ImageField(
        upload_to='profiles/',
        blank=True,
        null=True
    )
    
    role = models.CharField(max_length=20, choices=ROLE_CHOICES, default='tourist')
    
    
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.username