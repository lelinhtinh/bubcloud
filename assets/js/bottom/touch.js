(function($) {

    'use strict';

    $.fn.touchAnimate = function(options) {

        var settings = $.extend({
            even: {},
            odd: {},
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

    if ($('html').hasClass('no-touch')) {
        return;
    }

    var $navSub = $('.has-sub'),
        $childForum = $('.sub4r'),
        $memAvatar = $('.member-avatar'),
        $win = $(window);

    $win.on('load resize', function() {

        if ($win.width() < 768) {

            $navSub.add($childForum).add($memAvatar).off('click').find('ul').removeAttr('style');

        } else {

            $navSub.touchAnimate({
                even: {
                    opacity: 1,
                    top: 37
                },
                odd: {
                    opacity: 0,
                    top: 20
                }
            });

            $childForum.touchAnimate({
                even: {
                    opacity: 1,
                    top: 15
                },
                odd: {
                    opacity: 0,
                    top: 5
                }
            });

            $memAvatar.touchAnimate({
                even: {
                    opacity: 1,
                    left: 115
                },
                odd: {
                    opacity: 0,
                    left: 95
                },
                animateElement: function($this) {
                    return $this.next('.member-status');
                }
            });

        }

    });

})(jQuery);
