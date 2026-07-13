from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'wildlife', views.WildlifeViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
