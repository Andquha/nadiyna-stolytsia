var C = document.querySelector(".C");
var Cspan = document.querySelector(".C_span");

var H = document.querySelector(".H");
var span = document.querySelector(".span");
var Hspan = document.querySelector(".H_span");

var box = document.querySelector(".box_logo");
var boxpre = document.querySelector(".preloder_box");
var preloader = document.querySelector(".preloader");


function animation_start(){
    span.classList.add('start');
    C.classList.add('start');
    H.classList.add('start');
}

function animation(){
    setTimeout(function(){
        span.classList.add('rotate');
        box.classList.add('rotate')
        C.classList.add('rotate');
        H.classList.add('rotate');
    },0);

    setTimeout(function(){
        Cspan.classList.add('animated');
        Hspan.classList.add('animated');
    },3000);
    setTimeout(function(){
        C.classList.add('animated');
        H.classList.add('animated');
    },3150);
    setTimeout(function(){
        H.classList.add('animated2');
    },3400);
    setTimeout(function(){
        C.classList.add('animated2');
    },3950);


    setTimeout(function(){
        C.classList.remove('animated');
        H.classList.remove('animated');
        C.classList.remove('animated2');
        H.classList.remove('animated2');
        Cspan.classList.remove('animated');
        Hspan.classList.remove('animated');
        

        span.classList.remove('start');
        C.classList.remove('start');
        H.classList.remove('start');
        span.classList.remove('rotate');
        box.classList.remove('rotate');
        C.classList.remove('rotate');
        H.classList.remove('rotate');
    },7000);
    
}

animation_start();
setTimeout(function(){
    animation();
    setTimeout(function(){
        boxpre.classList.add('end');
        preloader.classList.add('end');
        setTimeout(function(){
            boxpre.classList.add('end2');
            boxpre.classList.add('end3');
            preloader.classList.add('end2');
            preloader.classList.add('end3');
            boxpre.innerHTML = "";
        },800);
    },7100);
},1200);

setInterval(function(){
    preloader.classList.remove('end');
    preloader.classList.remove('end2');
    animation_start();
    setTimeout(function(){
        animation();
        setTimeout(function(){
            preloader.classList.add('end');
            setTimeout(function(){
                preloader.classList.add('end2');
            },800);
        },7100);
    },1200);
},9500);