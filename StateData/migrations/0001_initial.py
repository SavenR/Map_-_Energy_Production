# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='EnergyProduction',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('state', models.CharField(unique=True, max_length=2, choices=[(b'AL', b'Alabama'), (b'AK', b'Alaska'), (b'AZ', b'Arizona'), (b'AR', b'Arkansas'), (b'CA', b'California'), (b'CO', b'Colorado'), (b'CT', b'Connecticut'), (b'DE', b'Delaware'), (b'DC', b'District of Columbia'), (b'FL', b'Florida'), (b'GA', b'Georgia'), (b'HI', b'Hawaii'), (b'ID', b'Idaho'), (b'IL', b'Illinois'), (b'IN', b'Indiana'), (b'IA', b'Iowa'), (b'KS', b'Kansas'), (b'KY', b'Kentucky'), (b'LA', b'Louisiana'), (b'ME', b'Maine'), (b'MD', b'Maryland'), (b'MA', b'Massachusetts'), (b'MI', b'Michigan'), (b'MN', b'Minnesota'), (b'MS', b'Mississippi'), (b'MO', b'Missouri'), (b'MT', b'Montana'), (b'NE', b'Nebraska'), (b'NV', b'Nevada'), (b'NH', b'New Hampshire'), (b'NJ', b'New Jersey'), (b'NM', b'New Mexico'), (b'NY', b'New York'), (b'NC', b'North Carolina'), (b'ND', b'North Dakota'), (b'OH', b'Ohio'), (b'OK', b'Oklahoma'), (b'OR', b'Oregon'), (b'PA', b'Pennsylvania'), (b'RI', b'Rhode Island'), (b'SC', b'South Carolina'), (b'SD', b'South Dakota'), (b'TN', b'Tennessee'), (b'TX', b'Texas'), (b'UT', b'Utah'), (b'VT', b'Vermont'), (b'VA', b'Virginia'), (b'WA', b'Washington'), (b'WV', b'West Virginia'), (b'WI', b'Wisconsin'), (b'WY', b'Wyoming')])),
                ('coal', models.DecimalField(max_digits=10, decimal_places=2)),
                ('gas', models.DecimalField(max_digits=10, decimal_places=2)),
                ('oil', models.DecimalField(max_digits=10, decimal_places=2)),
                ('nuclear', models.DecimalField(max_digits=10, decimal_places=2)),
                ('biofuels', models.DecimalField(max_digits=10, decimal_places=2)),
                ('othRenews', models.DecimalField(verbose_name=b'Other Renewables', max_digits=10, decimal_places=2)),
                ('totalProduction', models.DecimalField(verbose_name=b'Total Production', null=True, editable=False, max_digits=11, decimal_places=2)),
                ('totalRenewables', models.DecimalField(verbose_name=b'Total Renewables', null=True, editable=False, max_digits=11, decimal_places=2)),
                ('totalFF', models.DecimalField(verbose_name=b'Total Fossil Fuels', null=True, editable=False, max_digits=11, decimal_places=2)),
            ],
        ),
    ]
