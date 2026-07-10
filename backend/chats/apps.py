from django.apps import AppConfig

class ChatsConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'chats'
    label = 'my_unique_chats' # Add this line to resolve the conflict
