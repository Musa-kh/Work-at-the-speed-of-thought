let lastScroll=0

const header=document.querySelector('.header-container')

window.addEventListener('scroll',()=>{
    let currentScroll=window.pageYOffset;

    if (currentScroll>lastScroll){
         header.classList.add('hide');
    }else{
        header.classList.remove('hide');
    }
    lastScroll=currentScroll;
});
