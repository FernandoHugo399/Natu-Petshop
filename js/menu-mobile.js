var menu = document.querySelectorAll('.icon-menu')[0];
var moba = document.querySelectorAll('.menu-mobile')[0];

document.body.onresize = function() {
    if (document.body.clientWidth >= 1205){
        if(moba.classList.contains('mobah')){
            moba.classList.remove('mobah')
        }
    }
};

menu.addEventListener('click', ()=>{
    if(moba.classList.contains('mobah')){
        moba.classList.remove('mobah')
    } else {
        moba.classList.add('mobah');
    }
})