// swipep 320
new Swiper('.swiper-container', {
    freeMode:true,
    speed:800,
    keyboard:{
        enabled:true,
        onlyInViewport: true,
        pageUpDown: true,
    },
    mousewheel:{
        sensitivity:1,
        eventsTarget: '.brands-slide'

    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },

    breakpoints: {
        320: {
            slidesPerView: 'auto',
        },
        768: {
            slidesPerView:'auto' ,
            enabled: false,
        },
    },
});