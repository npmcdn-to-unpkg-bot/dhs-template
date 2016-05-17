/**
 * Created by kiril on 5/17/2016.
 */

var all = {
    listitems: {
        // Isotope Filtering
        isotope: function () {
            var $container = $('#isotope');
            var qsRegex;

            $container.isotope({
                itemSelector: '.portfolio-item',
                layoutMode: 'fitRows'
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
                paginationClickable: true,
                loop: true,
                parallax: true,
                grabCursor: true
            });
        }
    }
}


// Initializations
var init = {
    ready: function() {
        all.listitems.isotope();
        all.listitems.swiper();
    }
};

$(document).ready(init.ready);
