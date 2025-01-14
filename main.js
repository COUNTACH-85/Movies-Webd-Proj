let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


menu.onclick = () => {
    menu.classList.toggle('bx-x'); 
    navbar.classList.toggle('active'); 
    menu.classList.toggle('bx-x');
    
};


window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
};


window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('shadow', window.scrollY > 0);
});



var swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    
});

var swipe = new Swiper(".top-rated", {
  effect: "cube",
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
  },
});

