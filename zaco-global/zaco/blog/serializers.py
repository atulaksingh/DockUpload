from rest_framework import serializers
from django.contrib.auth.models import User
from .models import BlogPost, Comment, Category
from django.contrib.auth.password_validation import validate_password
from django.core.exceptions import ValidationError



class UserSerializer(serializers.ModelSerializer):
    class Meta(object):
        model = User 
        fields = ['id', 'username', 'password', 'email']



class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ['id','post', 'content','email','name', 'created_at']
        read_only_fields = ['created_at']


class BlogPostSerializer(serializers.ModelSerializer):
    author = serializers.ReadOnlyField(source='author.username')
    # comments = CommentSerializer(many=True, read_only=True)
    categories = CategorySerializer(many=True)  # Use CategorySerializer here
    comments = CommentSerializer(many=True, read_only=True)

    class Meta:
        model = BlogPost
        fields = ['id', 'title', 'content', 'author', 'categories', 'created_at','featured_image','comments']


