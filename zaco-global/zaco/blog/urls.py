from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views
from django.urls import re_path
from .views import *
from django.conf import settings
from django.conf.urls.static import static
router = DefaultRouter()
router.register(r'blogposts', views.BlogPostViewSet, basename='blogpost')
router.register(r'comments', views.CommentViewSet, basename='comment')
router.register(r'categories', views.CategoryViewSet, basename='category')


urlpatterns = [
    path('admin/', admin.site.urls),
    re_path('signup', views.signup),
    re_path('login', views.user_login),
    re_path('logout', views.user_logout),
    re_path('user-details', views.user_details),
    path('api/blogposts/<int:pk>/', BlogPostDetailView.as_view(), name='blogpost-detail'),
    path('api/', include((router.urls, 'api'), namespace='api')),

]
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)