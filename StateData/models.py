from django.db import models



# Create your models here.

class EnergyProduction(models.Model):
    stateList = (
    ('TA', 'testing'),
    ('AL', 'Alabama'),
    ('AK', 'Alaska'),
    ('AZ', 'Arizona'),
    ('AR', 'Arkansas'),
    ('CA', 'California'),
    ('CO', 'Colorado'),
    ('CT', 'Connecticut'),
    ('DE', 'Delaware'),
    ('DC', 'District of Columbia'),
    ('FL', 'Florida'),
    ('GA', 'Georgia'),
    ('HI', 'Hawaii'),
    ('ID', 'Idaho'),
    ('IL', 'Illinois'),
    ('IN', 'Indiana'),
    ('IA', 'Iowa'),
    ('KS', 'Kansas'),
    ('KY', 'Kentucky'),
    ('LA', 'Louisiana'),
    ('ME', 'Maine'),
    ('MD', 'Maryland'),
    ('MA', 'Massachusetts'),
    ('MI', 'Michigan'),
    ('MN', 'Minnesota'),
    ('MS', 'Mississippi'),
    ('MO', 'Missouri'),
    ('MT', 'Montana'),
    ('NE', 'Nebraska'),
    ('NV', 'Nevada'),
    ('NH', 'New Hampshire'),
    ('NJ', 'New Jersey'),
    ('NM', 'New Mexico'),
    ('NY', 'New York'),
    ('NC', 'North Carolina'),
    ('ND', 'North Dakota'),
    ('OH', 'Ohio'),
    ('OK', 'Oklahoma'),
    ('OR', 'Oregon'),
    ('PA', 'Pennsylvania'),
    ('RI', 'Rhode Island'),
    ('SC', 'South Carolina'),
    ('SD', 'South Dakota'),
    ('TN', 'Tennessee'),
    ('TX', 'Texas'),
    ('UT', 'Utah'),
    ('VT', 'Vermont'),
    ('VA', 'Virginia'),
    ('WA', 'Washington'),
    ('WV', 'West Virginia'),
    ('WI', 'Wisconsin'),
    ('WY', 'Wyoming'))



    state = models.CharField(max_length=2, choices=stateList, unique=True)
    coal = models.DecimalField(max_digits=10, decimal_places=2)
    gas = models.DecimalField(max_digits=10, decimal_places=2)
    oil = models.DecimalField(max_digits=10, decimal_places=2)
    nuclear = models.DecimalField(max_digits=10, decimal_places=2)
    biofuels = models.DecimalField(max_digits=10, decimal_places=2)
    othRenews = models.DecimalField(max_digits=10, decimal_places=2, verbose_name='Other Renewables')
    totalProduction = models.DecimalField(max_digits=11, decimal_places=2, blank=True, editable=False)
    totalRenewables = models.DecimalField(max_digits=11, decimal_places=2, blank=True, editable=False)
    totalFF = models.DecimalField(max_digits=11, decimal_places=2, blank=True, editable=False)
    percRenewables = models.DecimalField(max_digits=11, decimal_places=2, blank=True, editable=False)


    def __unicode__(self):
        return self.state

