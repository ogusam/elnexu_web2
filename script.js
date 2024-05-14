let menu =document.querySelector('#menu');
let nav =document.querySelector('.header .nav');

menu.onclick =()=>{
    menu.classList.toggle('fa-times');
    nav.classList.toggle('active');
}

window.onscroll=()=>{
    menu.classList.remove('fa-times');
    nav.classList.remove('active');
 
}


let slider=tns({
    container : ".my-slider",
    "slideBy" : "1",
    "speed" :2600,
    "nav" : false,
    autoplay: true,
    controls: false,
    autoplayButtonOutput :false,
    responsive: {
        1600: {
            items:5,
            gutter : 5
        },
        1024:{
            items:4,
            gutter :20
        },
        768:{
            items: 3,
            gutter: 20,
        },
        480:{
            items: 1
        }
    }
})



