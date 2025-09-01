const menuBtn =document.querySelector('.menu-icon');
const closeBtn =document.querySelector('.close-ico');
const sidebar =document.querySelector('.sidebar');

menuBtn.addEventListener('click',()=>{
    sidebar.classList.toggle('active');
})
closeBtn.addEventListener('click',()=>{
    sidebar.classList.remove('active');
})