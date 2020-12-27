// Header slider
$('.header-slider').slick({
    autoplay: true,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
});

// Right Header slider
$('.right-header-slider').slick({
    autoplay: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
});
 // Back to top button
 $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
});
$('.back-to-top').click(function () {
    $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
    return false;
});