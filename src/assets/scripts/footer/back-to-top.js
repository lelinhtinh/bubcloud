/* global debounce, gotoTop */
(function($) {
    'use strict';

    var $window = $(window),
        $toTop = $('#back_to_top'),

        backToTop = debounce(function() {
            var scrollTop = $window.scrollTop(),
                winHeight = $window.height();

            scrollTop >= winHeight ? $toTop.addClass('show-back-btn') : $toTop.removeClass('show-back-btn');

        }, 250);

    $window.scroll(backToTop);

    $toTop.on('click', function() {
        gotoTop();
    });

})(jQuery);
