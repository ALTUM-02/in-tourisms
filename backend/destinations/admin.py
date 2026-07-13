from django.contrib import admin
from .models import Destination

@admin.register(Destination)
class DestinationAdmin(admin.ModelAdmin):
    list_display = ['name', 'category', 'country', 'rating', 'is_featured']
    list_filter = ['category', 'country', 'is_featured']
    search_fields = ['name', 'location']
