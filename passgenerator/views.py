from django.shortcuts import render
import random

# Create your views here.
def home(request):
    if request.method == 'POST':
        length = int(request.POST.get('length', 12))
        uppercase = request.POST.get('uppercase', '')
        lowercase = request.POST.get('lowercase', '')
        numbers = request.POST.get('numbers', '')
        symbols = request.POST.get('symbols', '')
       
        print(length)  
    return render(request, 'index.html')
   
