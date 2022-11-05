from rest_framework.permissions import IsAuthenticated
from rest_framework.viewsets import ModelViewSet


class ProductsViewSet(ModelViewSet):
    # queryset = Recipe.objects.all()
    permission_classes = (IsAuthenticated,)
    http_method_names = ['get']


class ProductViewSet(ModelViewSet):
    # queryset = Recipe.objects.all()
    permission_classes = (IsAuthenticated,)
    http_method_names = ['get']


class HomeViewSet(ModelViewSet):
    # queryset = Recipe.objects.all()
    permission_classes = (IsAuthenticated,)
    http_method_names = ['get']
