const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let idx = 0;

setInterval(function carrossel(){
    idx++;

    if(idx > img.length -1){
        idx = 0;
    }

    imgs.style.transform = `translateX(${-idx * 99}%)`;
}, 10000);
