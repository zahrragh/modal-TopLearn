const open = document.querySelector('.open');
const close = document.querySelector('.close');
const modal = document.querySelector('.modal');
const darkBg = document.querySelector('.dark-bg');

open.addEventListener('click',function(){
    modal.style.display="block"
    darkBg.style.display="block"
})
close.addEventListener('click',function(){
    modal.style.display="none";
    darkBg.style.display="none";
})