let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    navbar.classList.toggle('active');
    menu.classList.toggle('ti-close');
}

window.onscroll = () => {
    navbar.classList.remove('active');
    menu.classList.remove('ti-close');
}



//dark mode

let darkmode = document.querySelector('#darkmode');

darkmode.onclick = () => {
    if(darkmode.classList.contains('bxs-moon')){
        darkmode.classList.replace('bxs-moon','bx-sun');
        document.body.classList.add('active');
    }else{
        darkmode.classList.replace('bx-sun','bxs-moon');
        document.body.classList.remove('active'); 
    }
}

// sroll reveal
const sr = ScrollReveal(
    {
        origin: 'top',
        distance: '40px',
        duration: 2000,
        reset: true
    }
)

sr.reveal('.home-text, .home-img, .about-img, .about-text, .box, .s-box,.connect-text, .btn, .contact-box .order',{interval:100})

