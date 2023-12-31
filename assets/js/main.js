$(document).ready(function () {
// Home and profile page image change
$('.explore-btn').click(function () {
    $('#explore-img').attr('src', 'assets/images/home-2.gif');
    $('#toggle-profile').fadeIn(1000);
    $('.explore-btn').fadeOut(1000);
    $('.text-btn').fadeIn(1000);
    setTimeout(function () {
        $('#explore-img').attr('src', 'assets/images/home-3.gif');
    },730); //here
});

$('#toggle-profile').click(function () {
    $('.home-hero-img').show(1000);

    $('#explore-img').attr('src', 'assets/images/home-4.gif');
    setTimeout(function () {
        $('#explore-img').attr('src', 'assets/images/home-1.jpg');
    },730); //here

    $('#toggle-profile').fadeOut(1000);
    $('.explore-btn').fadeIn(1000);
    $('.text-btn').fadeOut(1000);
});

//  home-hero-img
//  about-hero-img
$('#about-btn').click(function () {
    $('.about-content-wrapper').css('left', '20px');
    $('#toggle-profile').css('display', 'none');
    $('#toggle-about').fadeIn(1000);
    $('.about-hero-img').show();
    $('.home-hero-img').hide();
});

$('#toggle-about').click(function () {
    $('.about-content-wrapper').css('left', '-100%');
    $('.profile-hero-img').fadeIn(1000);

    $('#toggle-profile').css('display', 'block');
    $(this).css('display', 'none');
    $('.about-hero-img').hide();
    $('.home-hero-img').show();
});


$('.about-hero-img').mouseover(function () {
    $('.about-hero-img img').css('transform', 'rotateY(180deg)');
    $('.about-2-right-content').css('right', '20px');
});

$('.about-hero-img').mouseleave(function () {
    $('.about-hero-img img').css('transform', 'rotateY(0)');
    $('.about-2-right-content').css('right', '-250px');
});

$('#gallary-btn').click(function () {
    $('#section-home').fadeOut(1000);
    $('#section-gallary').fadeIn(1000);
});


$('#toggle-section').click(function () {
    $('#section-home').fadeIn(1000);
    $('#section-gallary').fadeOut(1000);
});


$('.pensiero-sm-img-box').click(function () {
    $('#section-pensiero-details').fadeIn(1000);
});

$('.penso-sm-img-box').click(function () {
    $('#section-penso-details').fadeIn(1000);
});

$('.volto-sm-img-box').click(function () {
    $('#section-volto-details').fadeIn(1000);
});

$('.monaco-sm-img-box').click(function () {
    $('#section-monaco-details').fadeIn(1000);
});

$('.nova-sm-img-box').click(function () {
    $('#section-nova-details').fadeIn(1000);
});

$('.bello-sm-img-box').click(function () {
    $('#section-bello-details').fadeIn(1000);
});

$('.back-to-hero').click(function () {
    $('#section-pensiero-details, #section-penso-details, #section-volto-details, #section-monaco-details, #section-nova-details, #section-bello-details').fadeOut(1000);
});

    // pensiero
    $('.pensiero-img-box').on('mouseover', function () {
        $('.pensiero-sm-img').attr('src', 'assets/images/pensiero-sm-2.png');
    });

    $('.pensiero-img-box').on('mouseleave', function () {
        $('.pensiero-sm-img').attr('src', 'assets/images/pensiero-sm-1.png');
    });

    // penso
    $('.penso-img-box').on('mouseover', function () {
        $('.penso-sm-img').attr('src', 'assets/images/penso-sm-2.png');
    });

    $('.penso-img-box').on('mouseleave', function () {
        $('.penso-sm-img').attr('src', 'assets/images/penso-sm-1.png');
    });

    // Volto
    $('.volto-img-box').on('mouseover', function () {
        $('.volto-sm-img').attr('src', 'assets/images/volto-sm-2.png');
    });

    $('.volto-img-box').on('mouseleave', function () {
        $('.volto-sm-img').attr('src', 'assets/images/volto-sm-1.png');
    });

    // monaco
    $('.monaco-img-box').on('mouseover', function () {
        $('.monaco-sm-img').attr('src', 'assets/images/monaco-sm-2.png');
    });

    $('.monaco-img-box').on('mouseleave', function () {
        $('.monaco-sm-img').attr('src', 'assets/images/monaco-sm-1.png');
    });

    // nova
    $('.nova-img-box').on('mouseover', function () {
        $('.nova-sm-img').attr('src', 'assets/images/nova-sm-2.png');
    });

    $('.nova-img-box').on('mouseleave', function () {
        $('.nova-sm-img').attr('src', 'assets/images/nova-sm-1.png');
    });

    // monaco
    $('.bello-img-box').on('mouseover', function () {
        $('.bello-sm-img').attr('src', 'assets/images/bello-sm-2.png');
    });

    $('.bello-img-box').on('mouseleave', function () {
        $('.bello-sm-img').attr('src', 'assets/images/bello-sm-1.png');
    });

    // modal video
    $('.js-modal-btn').modalVideo();





    window.onload = function () {
        document.getElementById('body').classList.add('loaded');
    };




    // Slick Slider
    $('.pensiero-slider-1').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
    });

    $('.pensiero-slider-3').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
    });

    $('.pensiero-slider-4').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
    });

    // Audio Play
        $('.playPauseButton').on('click', function () {
            const audio = $('.myAudio')[0];

            if (audio.paused) {
                audio.play();
                $('.playPauseButton').html('<i class="fa-solid fa-pause"></i>');
            } else {
                audio.pause();
                $('.playPauseButton').html('<i class="fa-solid fa-play"></i>');
            }
        });

        // Slick sidebar Slider
            $('.menu-dot-slider').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                vertical: true,
                verticalSwiping: true,
                arrows: false,
                loop: false,
                draggable: false,
                // fade: true,
                // speed: 1000,
                // cssEase: 'linear',
            });

            $('.prev-slide').click(function () {
                $('.menu-dot-slider').slick('slickPrev');
            });

            $('.next-slide').click(function () {
                $('.menu-dot-slider').slick('slickNext');
            });

            var $dots = $('.custom-dots li');
            // On slide change, update the active dot
            $('.menu-dot-slider').on(
                'afterChange',
                function (event, slick, currentSlide) {
                    $dots.removeClass('active');
                    $dots.eq(currentSlide).addClass('active');
                }
            );

            // Handle dot click to change menu-dot-slider
            $dots.on('click', function () {
                var index = $(this).index();
                $('.menu-dot-slider').slick('slickGoTo', index); // Go to the corresponding slide
            });

            $(
                '.sidebar-bullet .custom-dots li,.sidebar-bullet .prev-slide,.sidebar-bullet .next-slide'
            ).click(function () {
                $(
                    '#section-pensiero-details, #section-penso-details, #section-volto-details, #section-monaco-details, #section-nova-details, #section-bello-details'
                ).fadeOut(1000);
            });


            // Swiper Slider
            var swiper = new Swiper('.mySwiper', {
                effect: 'coverflow',
                grabCursor: true,
                centeredSlides: true,
                slidesPerView: 'auto',
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: false,
                },
                coverflowEffect: {
                    rotate: 15,
                    stretch: 0,
                    depth: 300,
                    modifier: 1,
                    slideShadows: true,
                },
                loop: true,
            });
});
