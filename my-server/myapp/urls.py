from django.urls import path

from . import views

urlpatterns = [
    path('click/', views.click, name='click'),
    path('model/', views.model, name='model')
]
