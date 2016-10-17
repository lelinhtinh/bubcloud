(function($) {

    'use strict';

    $.fn.touchAnimate = function(options) {

        var settings = $.extend(true, {
            even: {
                opacity: 1
            },
            odd: {
                opacity: 0
            },
            animateElement: function($this) {
                return $this.find('ul');
            }

        }, options);

        var toggle = false;

        return this.on('click', function() {
            var $this = $(this),
                $animateElement = settings.animateElement($this);

            toggle = toggle ? false : true;
            if (toggle) {
                $animateElement.css('visibility', 'visible').stop(true, false).animate(settings.even, 'fast', function() {
                    $this.addClass('active');
                });
            } else {
                $animateElement.stop(true, false).animate(settings.odd, 'fast', function() {
                    $this.removeClass('active');
                    $animateElement.css('visibility', 'hidden');
                });
            }

        });
    };

}(jQuery));

(function($) {

    'use strict';

    if (!('ontouchstart' in window || navigator.msMaxTouchPoints)) return;

    function debounce(func, wait, immediate) {
        var timeout;

        return function() {
            var context = this,
                args = arguments,

                later = function() {
                    timeout = null;
                    if (!immediate) func.apply(context, args);
                },

                callNow = immediate && !timeout;

            clearTimeout(timeout);
            timeout = setTimeout(later, wait);

            if (callNow) func.apply(context, args);
        };
    }

    var $navSub = $('.has-sub'),
        $childForum = $('.sub4r'),
        $memAvatar = $('.member-avatar'),
        $win = $(window),

        displayresponsive = debounce(function() {

            if ($win.width() < 768) {

                $navSub.add($childForum).add($memAvatar).off('click').find('ul').removeAttr('style');

            } else {

                $navSub.touchAnimate({
                    even: {
                        top: 37
                    },
                    odd: {
                        top: 20
                    }
                });

                $childForum.touchAnimate({
                    even: {
                        top: 15
                    },
                    odd: {
                        top: 5
                    }
                });

                $memAvatar.touchAnimate({
                    even: {
                        left: 85
                    },
                    odd: {
                        left: 70
                    },
                    animateElement: function($this) {
                        return $this.next('.member-status');
                    }
                });

            }
        });

    $win.on('load resize', displayresponsive);

})(jQuery);
