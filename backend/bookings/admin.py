from django.contrib import admin

# Register your models here.
from django.contrib import admin
from .models import Booking

@admin.register(Booking)
class BookingAdmin(admin.ModelAdmin):
    list_display = ['id', 'user', 'hotel', 'check_in', 'check_out', 'status', 'total_price']
    list_filter = ['status']
