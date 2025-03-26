const swiper = new Swiper('.swiper', {
    spaceBetween: 10,
    slidesPerView: 3,
    autoplay: {
        delay: 3000,
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },

    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        // when window width is >= 480px
        425: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 4,
            spaceBetween: 40
        }
    }
});