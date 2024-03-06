from django.shortcuts import render
import random

# Create your views here.
def home(request):
    name = "mike"
    context = {
        "name" : name
    }
    return render(request, 'index.html', context)
