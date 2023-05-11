const btn = document.getElementById('menu-btn')
const menuu = document.getElementById('mobile-menu')
btn.addEventListener('click', navToggle)
function navToggle() {
   btn.classList.toggle('open')
   menuu.classList.toggle('block')
   menuu.classList.toggle('hidden')
} 