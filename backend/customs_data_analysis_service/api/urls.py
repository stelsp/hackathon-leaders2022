from django.urls import re_path

from api.views import HomeView


urlpatterns = [
    re_path(r'^index/$', HomeView.as_view(), name="index"),
]
