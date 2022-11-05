from django.urls import re_path

from api.views import HomeView, ProductsView, ProductView


urlpatterns = [
    re_path(r'^home/$', HomeView.as_view(), name="home"),
    re_path(r'^product/$', ProductView.as_view(), name="product"),
    re_path(r'^products/$', ProductsView.as_view(), name="products"),
]
