from rest_framework import serializers
from .models import User


class RegisterSerializer(serializers.ModelSerializer):

    password = serializers.CharField(
        write_only=True,
        min_length=8
    )

    class Meta:
        model = User

    fields = [
       'id',
       'username',
       'email',
       'password',
       'role',
       'phone',
       'full_name',
       'country',
       'profile_photo'
    ]

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password'],
            role=validated_data.get('role', 'tourist'),
            phone=validated_data.get('phone', ''),
            full_name=validated_data.get('full_name', ''),
            country=validated_data.get('country', ''),
            profile_photo=validated_data.get('profile_photo', None)
        )    

        return user