import sqlite3
import time

import pandas as pd

from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView



from data.models import Operation


class ProductsView(APIView):
    http_method_names = ['get']

    def get(self, request, *args, **kwargs):
        return Response({'detail': 'Test'}, status=status.HTTP_200_OK)


class ProductView(APIView):
    http_method_names = ['get']

    def get(self, request, *args, **kwargs):
        return Response({'detail': 'Test'}, status=status.HTTP_200_OK)


class HomeView(APIView):
    http_method_names = ['get']

    def get(self, request, *args, **kwargs):
        start = time.time()
        x = Operation.objects.all().order_by('-id')[:10:-1]

        # print(str(BASE_DIR) + '/db.sqlite3')
        # connection = sqlite3.connect(str(BASE_DIR) + '/db.sqlite3')
        # sql = '''SELECT *
        # FROM data_operation
        # LIMIT 500;
        # '''
        # pd.read_sql(sql, connection)
        end = time.time()
        print(end - start)
        return Response({'detail': 'Test'}, status=status.HTTP_200_OK)
