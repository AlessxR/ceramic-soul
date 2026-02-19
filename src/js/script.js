import "purecss/build/grids-min.css";
import "purecss/build/grids-responsive-min.css";

// Swiper library of slider
import Swiper from 'swiper';
import {Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import "/src/sass/style.scss";

const swiper = new Swiper('.works__slider', {
    slidesPerView: 1,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.icon-left-open',
        prevEl: '.icon-right-open',
    },
    breakpoints: {

        // when window width is >= 1200px
        1200: {
            // Сколько слайдов показывать
            slidesPerView: 3,
            // Расстояние между слайдами
            spaceBetween: 5
        },
        1920: {
            // Расстояние между слайдами
            spaceBetween: 35
        },
    },
    modules: [Navigation, Pagination],
});