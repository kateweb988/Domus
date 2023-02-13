document.addEventListener("DOMContentLoaded", () => {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 66,
        loop: true,
        pagination: {
          el: ".swiper-pagination2",
          clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          breakpoints: {
            // when window width is >= 320px
            320: {
              slidesPerView: 2,
              spaceBetween: 15
            },
            // when window width is >= 480px
            480: {
              slidesPerView: 2,
              spaceBetween: 15
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 3,
              spaceBetween: 66
            }
          }
      });
let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})
});
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });