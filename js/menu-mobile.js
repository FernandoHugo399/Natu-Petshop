var menu = document.querySelectorAll('.menu-mobile')[0];
var moba = document.querySelectorAll('.menu-mobile ul')[0];
menu.addEventListener('click', ()=>{
    if(moba.style.display == 'block'){
        moba.style.display = 'none';
    } else {
        moba.style.display = 'block';
    }
    
})