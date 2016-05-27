/**
 * Created by kiril on 5/17/2016.
 */

var all = {
    listitems: {
        // Isotope Filtering
        isotope: function () {
            var $container = $('#isotope');
            var qsRegex;


            var selector = $('#portfolio-filter').find('a').attr('data-filter-by');

            $container.isotope({
                itemSelector: '.portfolio-item',
                layoutMode: 'fitRows',
                filter: selector
            });


            $('#portfolio-filter').find('a').on('click', function () {
                var selector = $(this).attr('data-filter-by');
                $('#portfolio-filter a').removeClass('active');
                $(this).addClass('active');
                $container.isotope({filter: selector});

                return false;
            });


            // quick search regex
             var $quicksearch = $('#search-form').keyup( debounce( function() {
                qsRegex = new RegExp( $quicksearch.val(), 'gi' );
                $container.isotope({filter: function() {
                        return qsRegex ? $(this).text().match( qsRegex ) : true;
                    }});
                }, 200 ));

            // debounce so filtering doesn't happen every millisecond
            function debounce( fn, threshold ) {
                var timeout;
                return function debounced() {
                    if ( timeout ) {
                        clearTimeout( timeout );
                    }
                    function delayed() {
                        fn();
                        timeout = null;
                    }
                    timeout = setTimeout( delayed, threshold || 100 );
                }
            }

        },
        swiper: function() {
            var swiper = new Swiper('.swiper-container', {
                pagination: '.swiper-pagination',
                paginationType: 'progress',
                speed: 1500,
                autoplay: 6000,
                loop: true
            });

            //swiper.on("click", function() {
            //    alert("hello!");
            //})


            var vid = $('#video'),
                slide = $('#slide1'),
                played = false;


            function hideOverlay() {
                if(!played) {
                    played = true;
                    vid.trigger('play');
                    swiper.lockSwipes()
                } else {
                    played = false;
                    vid.trigger('pause');
                    swiper.unlockSwipes()
                }
            }

            function showOverlay() {
                // this check is to differentiate seek and actual pause
                if (vid.onreadystatechange === 4) {
                    alert("true");
                    //slide.css("display", "block");
                    played = false;
                    vid.trigger('pause');
                }
            }

            vid.on('pause', showOverlay);
            slide.on('click', hideOverlay);

            //slide.on("click", function() {
            //    if(!played) {
            //        played = true;
            //        vid.trigger('play');
            //    } else {
            //        played = false;
            //        vid.trigger('pause');
            //    }
            //});

        },

        scroll: function() {
            $("#myNavbar").on("click","a", function (event) {
                //отменяем стандартную обработку нажатия по ссылке
                event.preventDefault();

                //забираем идентификатор бока с атрибута href
                var id  = $(this).attr('href');

                //узнаем высоту от начала страницы до блока на который ссылается якорь
                if(id == "#home") {
                    var top = $(id).offset().top + -80;
                } else if(id == "#athletes") {
                    var top = $(id).offset().top;
                } else if(id == "#news") {
                    var top = $(id).offset().top + -60;
                }
                else if(id == "#our-partners") {
                    var top = $(id).offset().top + -60;
                }
                else {
                    var top = $(id).offset().top
                };
                //анимируем переход на расстояние - top за 1500 мс
                $('body,html').animate({scrollTop: top}, 1000);
            });
        },

        wow: function() {
            var wow = new WOW(
                {
                    boxClass:     'wow',      // default
                    animateClass: 'animated', // default
                    offset:       0,          // default
                    mobile:       false,       // default
                    live:         true        // default
                }
            );

            wow.init();
        },

        carousel: function() {
            //$("#owl-carousel-athletes").owlCarousel({
            //    items: 1,
            //    slideSpeed: 300,
            //    paginationSpeed: 400,
            //    navigation: false,
            //    autoplayTimeout:2500,
            //    autoplayHoverPause:true,
            //    margin:10,
            //    lazyLoad:true,
            //    autoHeight:true,
            //    nav: false,
            //    URLhashListener:true,
            //    video: true
            //});

            $('#slider-athletes').owlCarousel({
                items: 1,
                autoplay: true,
                autoplayTimeout: 5000,
                smartSpeed: 250,
                navText: [
                    "<div class='prevAtl'>Prev</div>",
                    "<div class='nextAtl'>Next</div>"
                ],
                loop:true,
                margin:10,
                nav:true,
                center:true,
                URLhashListener:true,
                autoplayHoverPause:true
            });

            $(".owl-carousel").owlCarousel({
                items:5,
                loop:true,
                margin:10,
                autoplay:true,
                autoplayTimeout:2500,
                autoplayHoverPause:true,
                nav: false
            });
        },
    }
}


// Initializations
var init = {
    ready: function() {
        all.listitems.isotope();
        all.listitems.swiper();
        all.listitems.scroll();
        all.listitems.wow();
        all.listitems.carousel();
    }
};

$(document).ready(init.ready);


