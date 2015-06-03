from django.core.management.base import BaseCommand
from StateData.models import EnergyProduction
from django.templatetags.static import static
import json
import os

class Command(BaseCommand):

    def handle(self, *args, **options):
        # print("Importing Data")
        # print (os.getcwd())
        url = 'StateData/static/StateData/data/energyProduction.json'

        with open(url) as data_file:
            data = json.load(data_file)

        for record in data:
            try:
                stateRecord = EnergyProduction.objects.get(state=record[u'state'])
            except stateRecord.DoesNotExist:
                stateRecord = EnergyProduction(
                    state=record[u'state'],
                    coal=record[u'coal'],
                    gas=record[u'gas'],
                    oil=record[u'oil'],
                    nuclear=record[u'nuclear'],
                    biofuels=record[u'biofuels'],
                    othRenews=record[u'coal']
                    )
                stateRecord.save()
                print("Except:", stateRecord)
            else:
                stateRecord.coal=record[u'coal']
                stateRecord.gas=record[u'gas']
                stateRecord.oil=record[u'oil']
                stateRecord.nuclear=record[u'nuclear']
                stateRecord.biofuels=record[u'biofuels']
                stateRecord.othRenews=record[u'coal']
                stateRecord.save()
                print("Else: ", stateRecord)
