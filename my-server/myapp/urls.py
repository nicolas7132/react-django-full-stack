from django.urls import path
from django.views.generic import TemplateView
from . import views

urlpatterns = [
    path('index/', TemplateView.as_view(template_name="index.html")),
    path('click/', views.click, name='click'),
    path('model/', views.model, name='model')
]
