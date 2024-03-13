// Get references to DOM elements
const generatedText = document.getElementById('generated_password_text');
const copyButton = document.getElementById('copy');

copyButton.addEventListener('click', () => {
    const range = document.createRange();
    range.selectNodeContents(generatedText);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);

    document.execCommand('copy');

    // Display notification
    const notification = document.createElement('div');
    notification.textContent = 'Copied!';
    notification.className = 'notification';
    copyButton.appendChild(notification);

    // Remove notification after 2 seconds
    setTimeout(() => {
        notification.remove();
    }, 2000);

    // Deselect the text
    selection.removeAllRanges();
});






const generated_password_length = generatedText.textContent.length
const password_indicator = document.getElementById('password-strength');
password_indicator.textContent = ''
if(generated_password_length > 0){
    if(generated_password_length <= 3){
        password_indicator.textContent = 'Low'
    }else if(generated_password_length <= 7){
        password_indicator.textContent = 'Medium'
    }else{
        password_indicator.textContent = 'Strong'
    }
}
console.log(generated_password_length)