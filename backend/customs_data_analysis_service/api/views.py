from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView


class HomeView(APIView):
    http_method_names = ['get']

    def get(self, request, *args, **kwargs):
        # Тут должен быть обработчик данных запроса (аналитики привет)
        return Response(request.query_params, status=status.HTTP_200_OK)
