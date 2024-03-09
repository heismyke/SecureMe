from django.shortcuts import render
import random
import string

def get_random_string(length, allowed_chars):
    return ''.join(random.choices(allowed_chars, k=length))

def home(request):
    context = {}
    if request.method == 'POST':
        length = int(request.POST.get('length'))
        uppercase = request.POST.get('uppercase', False)
        lowercase = request.POST.get('lowercase', False)
        numbers = request.POST.get('numbers', False)
        symbols = request.POST.get('symbols', False)
        custom_password = request.POST.get('custom_password', '')  

        if uppercase:
            custom_password = ''
            context['custom_password'] = custom_password
            
        chars = list(string.ascii_lowercase)
        if uppercase:
            chars.extend(string.ascii_uppercase)
        if numbers:
            chars.extend(string.digits)
        if symbols:
            chars.extend("!@#$%^&*()_+-=}?<>")
            

        if custom_password:
            custom_chars = "!@#$%^&*()_+-=}?<>1234567890"
            word_list = custom_password.split()
            password_parts = []
            for word in word_list:
                word_length = len(word)
                if word_length > 4:
                    middle_chars = word[2:-2]
                    remaining_length = word_length - len(middle_chars)
                    random_chars = get_random_string(remaining_length, custom_chars)
                    half_length = len(random_chars) // 2
                    first_half = random_chars[:half_length]
                    second_half = random_chars[half_length:]
                    password_parts.append(first_half + middle_chars + second_half)
                else:
                    password_parts.append(word + random.choice(custom_chars))
            custom_password = ''.join(password_parts)
            context['custom_password'] = custom_password
        else:
            password = ''.join(random.choice(chars) for i in range(length))
            context['generated_password'] = password  

    return render(request, 'index.html',context)
