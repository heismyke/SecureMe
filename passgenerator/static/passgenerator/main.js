const generatedText = document.getElementById('generated_text_input');
const copyButton = document.getElementById('copy');
const copyButtonTwo = document.getElementById('copy_2')
const thegeneratedpassword = document.getElementById('thegenerated_password')

const generated_password = document.getElementById('generated_password')

copyButton.addEventListener('click', () => {
    generatedText.select();
    document.execCommand('copy');

    const notification = document.createElement('div');
    notification.textContent = 'Copied!';
    notification.className = 'notification';
    copyButton.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 2000);
});

copyButtonTwo.addEventListener('click', () => {
    const range = document.createRange();
    range.selectNode(thegenerated_password);
    window.getSelection().removeAllRanges(); 
    window.getSelection().addRange(range);

    const notification = document.createElement('div');
    notification.textContent = 'Copied!';
    notification.className = 'notification';
    copyButtonTwo.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 2000);
});



generatedText.addEventListener('input', function() {
    const inputLength = generatedText.value.length
    const indicator = document.getElementById('progress_bar');
    const textIndicator = document.getElementById('password-strength-text');
    
    indicator.classList.remove('low', 'medium', 'strong');
    textIndicator.textContent = '';
    
    if (inputLength > 0) {
        if (inputLength <= 3) {
            indicator.classList.add('low');
            textIndicator.textContent = 'Low';
            
            indicator.style.width = '33.33%'; 
        } else if (inputLength <= 7) {
            indicator.classList.add('medium');
            textIndicator.textContent = 'Medium';
            
            indicator.style.width = '66.66%'; 
        } else {
            indicator.classList.add('strong');
            textIndicator.textContent = 'Strong';
            
            indicator.style.width = '100%'; 
        }
    }
    
  });

const generated_password_length = generated_password.textContent.length
const textIndicator_2 = document.getElementById('password-strength-text-2');
textIndicator_2.textContent = '';
if(generated_password_length > 0){
    if(generated_password_length <= 3){
        textIndicator_2.textContent = 'Low';
    }else if(generated_password_length <= 7){
    textIndicator_2.textContent = 'Medium';
}else{
    textIndicator_2.textContent = 'Strong';
}
  
}
// const passwordLength = generatedText.value.length;
// const maxLength = 50;
// const progressPercentage = (passwordLength / maxLength) * 100;

// progressBar.style.setProperty('--progress-width', `${progressPercentage}%`);

// if (passwordLength < 8) {
//     progressBar.style.setProperty('--progress-color', 'orange');
// } else if (passwordLength < 20) {
//     progressBar.style.setProperty('--progress-color', 'lightgreen');
// } else {
//     progressBar.style.setProperty('--progress-color', 'green');
// }



