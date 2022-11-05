from django.urls import include, path
from rest_framework.routers import DefaultRouter

# from customs_data_analysis_service.data.views import ProductsViewSet, ProductViewSet, HomeViewSet

router_v1 = DefaultRouter()

# router_v1.register('', HomeViewSet, basename='home')
# router_v1.register('products', ProductsViewSet, basename='products')
# router_v1.register('product', ProductViewSet, basename='product')


urlpatterns = [
    path('', include(router_v1.urls)),
]
