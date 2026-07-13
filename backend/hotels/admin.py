from django.contrib import admin
from .models import Hotel, RoomType

@admin.register(Hotel)
class HotelAdmin(admin.ModelAdmin):
    list_display = ['name', 'destination', 'rating', 'price_per_night']
    list_filter = ['destination']

@admin.register(RoomType)
class RoomTypeAdmin(admin.ModelAdmin):
    list_display = ['name', 'hotel', 'price', 'capacity']
