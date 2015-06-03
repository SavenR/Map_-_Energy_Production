from rest_framework import viewsets
from StateData.api.serializers import EPSerializer
from StateData.models import EnergyProduction

class EPViewSet(viewsets.ModelViewSet):
    queryset = EnergyProduction.objects.all()
    serializer_class = EPSerializer
    lookup_field = 'state'