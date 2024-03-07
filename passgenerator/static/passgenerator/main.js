const generated_text = document.getElementById('generated_text_input')
const copy_button = document.getElementById('copy')
const refresh_btn = document.getElementById('refresh')

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
