from rest_framework import serializers
from StateData.models import EnergyProduction


class EPSerializer(serializers.ModelSerializer):
    class Meta:
        model = EnergyProduction
        fields = (
            'state',
            'coal',
            'gas',
            'oil',
            'nuclear',
            'biofuels',
            'othRenews',
            'totalProduction',
            'totalRenewables',
            'totalFF',
            'percRenewables')
        # read_only_fields = ('date_joined',)
        # write_only_fields = ('password',)