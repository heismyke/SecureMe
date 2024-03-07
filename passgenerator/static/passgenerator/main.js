
const generated_text = document.getElementById('generated_text_input')
const copy_button = document.getElementById('copy')
const refresh_btn = document.getElementById('refresh')

const progress_bar = document.getElementById('progress_bar')

copy_button.addEventListener('click', () => {
    generated_text.select()
    document.execCommand('copy')
    const copied = generated_text.value
   

    const notification = document.createElement('div')
    notification.textContent = 'Copied!'
    notification.className = 'notification'
    copy_button.appendChild(notification)

    setTimeout(() => {
        notification.remove()
    },2000)
})

refresh_btn.addEventListener('click', () => {
    window.location.reload()
})

const password_length = generated_text.value.length
const max_length = 50
const progress_percentage = (password_length / max_length) * 100
progress_bar.style.setProperty('--progress-width', `${progress_percentage}%`);

if(password_length < 8){
    progress_bar.style.setProperty('--progress-color', 'orange');
}else if(password_length >=8 && password_length < 20){
    progress_bar.style.setProperty('--progress-color', 'lightgreen');
}else if(password_length >=20 ){
    progress_bar.style.setProperty('--progress-color', 'green');
}
