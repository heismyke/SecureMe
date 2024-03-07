from django.shortcuts import render
import random

# Create your views here.
def home(request):
    thepass = ''
    context = {}
    if request.method == 'POST':
        length = int(request.POST.get('length', 12))
        uppercase = request.POST.get('uppercase', '')
        lowercase = request.POST.get('lowercase', '')
        numbers = request.POST.get('numbers', '')
        symbols = request.POST.get('symbols', '')
        chars = list('abcdefghijklmnopqrstuvwxyz')
        if(uppercase):
            chars.extend('ABCDEFGHIJKLMNOPQRSTUVWXYZ')
        if(numbers):
            chars.extend('1234567890')
        if(symbols):
            chars.extend('@#$%^&*!()_=+-><?/')
        thepass = ''
        for i in range(length):
            thepass+=random.choice(chars)
        print(thepass)
        context = {
            'thepass': thepass
        }
    return render(request, 'index.html', context)
   
