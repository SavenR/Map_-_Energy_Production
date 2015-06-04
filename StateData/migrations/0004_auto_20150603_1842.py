# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('StateData', '0003_auto_20150603_1327'),
    ]

    operations = [
        migrations.AddField(
            model_name='energyproduction',
            name='percRenewables',
            field=models.DecimalField(default=0, editable=False, max_digits=11, decimal_places=2, blank=True),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='energyproduction',
            name='totalFF',
            field=models.DecimalField(default=0, editable=False, max_digits=11, decimal_places=2, blank=True),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='energyproduction',
            name='totalProduction',
            field=models.DecimalField(default=0, editable=False, max_digits=11, decimal_places=2, blank=True),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='energyproduction',
            name='totalRenewables',
            field=models.DecimalField(default=0, editable=False, max_digits=11, decimal_places=2, blank=True),
            preserve_default=False,
        ),
    ]
