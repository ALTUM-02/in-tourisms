

# Create your models here.
from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    ROLE_CHOICES = (
        ('tourist', 'Tourist'),
        ('officer', 'Tourism Officer'),
    )
    role = models.CharField(max_length=10, choices=ROLE_CHOICES, default='tourist')
    phone = models.CharField(max_length=20, blank=True)
    avatar = models.URLField(blank=True)

    class Meta:
        db_table = 'users'

    def __str__(self):
        return f"{self.first_name} {self.last_name} ({self.role})"
