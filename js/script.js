var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


            var swiper = new Swiper(".card", {
              navigation: {
                   nextEl: ".swiper-button-next",
                   prevEl: ".swiper-button-prev",
                  },//화살표를 작동하게 하는 옵션.
              pagination: {
                  el: ".swiper-pagination",
                  clickable: true,
                  },//도트부분을 작동하게 하는 옵션.
                  autoplay: {
                        delay: 1000,
                        /*이미지가 자동으로 넘어가는 시간설정. 1000 = 1초*/
                        disableOnInteraction: false,
                    },
                    loop: true,
                    slidesPerView: 3,
                    centeredSlides:true,
                    spaceBetween: 30,
            });//지우면 안되요!