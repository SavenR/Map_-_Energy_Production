# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('StateData', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='energyproduction',
            name='totalFF',
        ),
        migrations.RemoveField(
            model_name='energyproduction',
            name='totalProduction',
        ),
        migrations.RemoveField(
            model_name='energyproduction',
            name='totalRenewables',
        ),
    ]
