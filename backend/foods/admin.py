from django.contrib import admin

# Register your models here.
from django.contrib import admin
from .models import Food


@admin.register(Food)
class FoodAdmin(admin.ModelAdmin):

    list_display = (
        'name',
        'destination',
        'category',
        'price'
    )

    list_filter = (
        'category',
        'destination'
    