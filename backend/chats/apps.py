# Inside one of your my_unique_chats/apps.py files
from django.apps import AppConfig

class MyUniqueChatsConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'chats'
 # <-- Add a unique label here
