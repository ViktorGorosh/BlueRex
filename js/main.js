var tag = document.createElement('script');
tag.src = "//www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);



$(function() {
    $(window).on('load', function() {
        $('.preloader').delay(0).fadeOut('slow');
    });

    baguetteBox.run('.gallery');

    $(window).scroll(function() {
        if ($(this).scrollTop() > 500) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });

    $('.scrollToTop').click( function() {
        $('html, body').animate({scrollTop: 0}, 800);
    });
});