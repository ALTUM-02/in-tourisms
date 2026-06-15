from django.contrib import admin

# Register your models here.
from django.contrib import admin

from .models import Hotel


@admin.register(Hotel)
class HotelAdmin(admin.ModelAdmin):

    list_display = (
        'name',
        'destination',
        'price_per_night',
        'stars'
    )

    list_filter = (
        'stars',
        'destination'
    )

    search_fields = (
        'name',
    )