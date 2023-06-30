'sue strict';

{
  const swiper = new Swiper(".swiper", {
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    loop: true,
    speed: 4000,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  // 2つ目スライダー
  const swiper02 = new Swiper(".swiper02", {
    loop: true,
    speed: 1500,
    slidesPerView: 2,
    // centeredSlides : true,
    initialSlide: 2,
    // autoplay: {
    //   delay: 1500,
    //   disableOnInteraction: false,
    // },
    breakpoints: {
      //768px以上の場合
      450: {
        slidesPerView: 1,
     }
   },
  });
}