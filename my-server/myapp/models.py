from django.db import models


class Click(models.Model):
    url = models.CharField(max_length=256)
    times = models.IntegerField(default=0)
