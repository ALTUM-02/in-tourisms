from django.contrib import admin
from .models import Wildlife

@admin.register(Wildlife)
class WildlifeAdmin(admin.ModelAdmin):
    list_display = ['name', 'species', 'conservation_status', 'destination']
    list_filter = ['conservation_status', 'destination']
    search_fields = ['name', 'species']
