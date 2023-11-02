const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');
const fadeEls = document.querySelectorAll('.visual .fade-in');
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;

const spyEls = document.querySelectorAll('section.scroll-spy');
const controller = new ScrollMagic.Controller();


new Swiper('.notice-line .swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
    autoplay: {delay: 3000}
});
new Swiper('.promotion .swiper', {
    // direction: 'horizontal',
    slidesPerView: 3,
    spaceBetween: 10,
    centeredSlides: true,
    loop: true,
    autoplay: {delay: 5000},
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
    },
    navigation: {
        prevEl: '.promotion .swiper-button-prev',
        nextEl: '.promotion .swiper-button-next'
    }
});
new Swiper('.awards .swiper', {
    slidesPerView: 5,
    autoplay: true,
    loop: true,
    spaceBetween: 30,
    navigation: {
        prevEl: '.awards .swiper-button-prev',
        nextEl: '.awards .swiper-button-next'
    }
});


window.addEventListener('scroll', _.throttle(() => {
    if(window.scrollY > 500){
        gsap.to(badgeEl, 0.6, {
            opacity: 0,
            display: 'none'
        });
        gsap.to(toTopEl, .2, {
            x: 0 
        });
    }else {
        gsap.to(badgeEl, 0.6, {
            opacity: 1,
            display: 'block'
        });
        gsap.to(toTopEl, .2, {
            x: 100 
        });
    }
    
}, 300));



fadeEls.forEach((el, index) => {
    gsap.to(el, 1, {
        opacity: 1,
        delay: (index + 1) * 0.7
    });
});



promotionToggleBtn.addEventListener('click', () => {
    isHidePromotion = !isHidePromotion;
    if(isHidePromotion){
        promotionEl.classList.add('hide');
    }else {
        promotionEl.classList.remove('hide');
    }
})



let random = (min, max) => {
    return parseFloat((Math.random() * (max- min) + min).toFixed(2));
}
let floatingObject = (selector, delay, size) => {
    gsap.to(selector, random(1.5, 2.5), {
        y: size,
        repeat: -1,
        yoyo: true,
        ease: Power1.easeInOut,
        delay: random(0, delay)
    });
}

floatingObject('.floating1',1, 15);
floatingObject('.floating2',.5, 15);
floatingObject('.floating3',1.5, 20);


spyEls.forEach((el) => {
    new ScrollMagic.Scene({
    triggerElement: el,
    triggerHook: .8
   }).setClassToggle(el, 'show')
   .addTo(controller);
});



toTopEl.addEventListener('click', () => {
    gsap.to(window, .7, {
        scrollTo: 0
    });
});

