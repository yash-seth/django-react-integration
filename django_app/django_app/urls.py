from django.contrib import admin
from django.urls import path
from django.urls import re_path, include 

urlpatterns = [
    path('admin/', admin.site.urls),
]

urlpatterns = [ 
    re_path(r'^', include('backend.urls')),
]
