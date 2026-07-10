from django.db import models

# Create your models here.
from django.db import models
from django.conf import settings
from hotels.models import Hotel, RoomType


class Booking(models.Model):
    STATUS_CHOICES = (
        ('pending', 'Pending'),
        ('confirmed', 'Confirmed'),
        ('cancelled', 'Cancelled'),
        ('completed', 'Completed'),
    )
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='bookings')
    hotel = models.ForeignKey(Hotel, on_delete=models.CASCADE, related_name='bookings')
    room_type = models.ForeignKey(RoomType, on_delete=models.SET_NULL, null=True, blank=True)
    check_in = models.DateField()
    check_out = models.DateField()
    guests = models.IntegerField(default=1)
    total_price = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    status = models.CharField(max_length=15, choices=STATUS_CHOICES, default='pending')
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at']
        db_table = 'bookings'

    def __str__(self):
        return f"Booking #{self.id} - {self.user.first_name} at {self.hotel.name}"

    def save(self, *args, **kwargs):
        if self.room_type and not self.total_price:
            nights = (self.check_out - self.check_in).days
            self.total_price = self.room_type.price * max(nights, 1)
        super().save(*args, **kwargs)
