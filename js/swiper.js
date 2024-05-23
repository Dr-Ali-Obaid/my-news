const mql = window.matchMedia("(max-width: 992px)")
const slidePreview = (slide) => {
    var swiper = new Swiper(".swiper", {
        slidesPerView: slide,
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
}
const mediaHandeler = () => {
    if (mql.matches) {
        slidePreview(1)
    }
    else {
        slidePreview(3)
    }
}
mediaHandeler()
mql.onchange = () => {
    mediaHandeler()
}