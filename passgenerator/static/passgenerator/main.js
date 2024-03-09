// Get references to DOM elements
const generatedText = document.getElementById('generated_text_input');
const copyButton = document.getElementById('copy');
const copyButtonTwo = document.getElementById('copy_2');
const thegeneratedpassword = document.getElementById('thegenerated_password');
const generated_password = document.getElementById('generated_password');

// Event listener for copying generated text from input field
copyButton.addEventListener('click', () => {
    generatedText.select();
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
});

// Event listener for copying generated password
copyButtonTwo.addEventListener('click', () => {
    const range = document.createRange();
    range.selectNode(thegeneratedpassword);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);

    // Display notification
    const notification = document.createElement('div');
    notification.textContent = 'Copied!';
    notification.className = 'notification';
    copyButtonTwo.appendChild(notification);

    // Remove notification after 2 seconds
    setTimeout(() => {
        notification.remove();
    }, 2000);
});

// Event listener for input in generated text input field
generatedText.addEventListener('input', function() {
    const inputLength = generatedText.value.length;
    const indicator = document.getElementById('progress_bar');
    const textIndicator = document.getElementById('password-strength-text');

    // Reset progress bar and text indicator
    indicator.classList.remove('low', 'medium', 'strong');
    textIndicator.textContent = '';

    // Update progress bar and text indicator based on input length
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

// Calculate length of generated password and update text indicator
const generated_password_length = generated_password.textContent.length;
const textIndicator_2 = document.getElementById('password-strength-text-2');
textIndicator_2.textContent = '';
if (generated_password_length > 0) {
    if (generated_password_length <= 3) {
        textIndicator_2.textContent = 'Low';
    } else if (generated_password_length <= 7) {
        textIndicator_2.textContent = 'Medium';
    } else {
        textIndicator_2.textContent = 'Strong';
    }
}

