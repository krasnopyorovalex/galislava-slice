import $ from "jquery";

$(document).ready(function () {
    const slider = $('.slider');
    if (slider.length) {
        slider.slick({
            centerMode: true,
            centerPadding: '60px',
            slidesToShow: 3,
            prevArrow: '',
            nextArrow: '',
            infinite: false,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '30px',
                        slidesToShow: 1
                    }
                }
            ]
        });
    }
});