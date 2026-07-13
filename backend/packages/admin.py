from django.contrib import admin
from .models import Package

@admin.register(Package)
class PackageAdmin(admin.ModelAdmin):
    list_display = ['name', 'destination', 'price', 'duration_days', 'is_popular']
    list_filter = ['is_popular']
