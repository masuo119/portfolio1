$(document).ready(function(){
    $(".slide-items").slick({
        autoplay: false,
        slidesToShow: 3,
        infinite: true,
        slidesToScroll: 1,
        arrows: true, // 矢印を表示
        dots: false, // インジケーターを表示
        responsive: [{
            breakpoint: 767,
            settings: {
            slidesToShow: 1
            }
        }]
    });
    $(".slide-items2").slick({
        autoplay: false,
        slidesToShow: 3,
        infinite: true,
        slidesToScroll: 1,
        arrows: true, // 矢印を表示
        dots: false, // インジケーターを表示
        responsive: [{
            breakpoint: 767,
            settings: {
            slidesToShow: 1
            }
        }]
    });
});