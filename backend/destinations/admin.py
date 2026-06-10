from django.contrib import admin

# Register your models here.
from djan
from .models import Destination


@admin.register(Destination)
class DestinationAdmin(admin.ModelAdmin):

    list_display = (
        'name',
        'region',
        'entry_fee',
        'created_at'
    )

    search_fields = (
        'name',
        'region'
    )

    list_filter = (
        'region',
    )