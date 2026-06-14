from django.contrib import admin

# Register your models here.
from django.contrib import admin
from .models import Animal


@admin.register(Animal)
class AnimalAdmin(admin.ModelAdmin):

    list_display = (
        'name',
        'destination'
    )

    search_fields = (
        'name',
        'scientific_name'
    )