const mobileBtn = document.getElementById('mobile-cta')
nav = document.querySelector('nav');
mobileBtnExit = document.getElementById('mobile-exit')
darkenWindow = document.getElementById('darken');

mobileBtn.addEventListener('click', ()=>{
    nav.classList.add('menu-btn');
    darkenWindow.style.display = "block";
});
mobileBtnExit.addEventListener('click', ()=>{
    nav.classList.remove('menu-btn');
    darkenWindow.style.display = "none";
});