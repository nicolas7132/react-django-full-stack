from django.shortcuts import render
from django.http import HttpResponse


def click(request):
    return HttpResponse("run click() function.")


def model(request):
    return HttpResponse("run model() function.")
