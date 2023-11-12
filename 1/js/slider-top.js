const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: {
        delay: 2500,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        936: {
            slidesPerView: 2,
            spaceBetwen: 20,
        }
    }
    // pagination: {
    // el: '.swiper-pagination',
    // },
})