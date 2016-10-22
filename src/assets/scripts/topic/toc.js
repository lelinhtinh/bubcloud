/* global debounce, bodau, gotoTop */
(function($) {
    'use strict';

    function createDiv(className) {
        return $('<div>', {
            class: className
        });
    }


    $('.post').each(function() {
        var $post = $(this),
            $heading = $post.find('h2, h3, h4');

        if (!$heading.length) return;

        var $fly = createDiv('toc-fly'),
            $control = createDiv('toc-control').html('<i class="fa fa-bars" aria-hidden="true"></i>'),
            $list = createDiv('toc-list'),

            $win = $(window),
            postHeadHeight = 131,
            postTop = 0,
            postFootTop = 0,
            tocHeight = 0,
            tocTop = 0,

            tocPosition = debounce(function() {
                var scrollTop = $win.scrollTop(),
                    top = postHeadHeight;

                if (scrollTop > postFootTop - tocHeight) {
                    top = postFootTop - postTop - tocHeight;
                } else if (scrollTop > tocTop && scrollTop < postFootTop - tocHeight) {
                    top = postHeadHeight + (scrollTop - tocTop);
                }

                $fly.css('top', top);
            }, 250),

            checkSize = debounce(function() {
                postTop = $post.offset().top;
                postFootTop = $post.find('.post-footer').offset().top - 2;
                tocHeight = $fly.height();
                tocTop = postTop + postHeadHeight;

                tocPosition();
            }, 250);


        $list.append($('<a>', {
            class: 'toc-link toc-top',
            href: '#' + $post.attr('id'),
            html: '<i class="fa fa-arrow-up" aria-hidden="true"></i> Lên đầu bài viết '
        }));

        $heading.each(function() {
            var _this = this,
                $h = $(_this),
                str = _this.textContent,
                id = bodau(str);

            $h.append($('<a>', {
                class: 'toc-link toc-anchor',
                href: '#' + id,
                id: id,
                html: '<i class="fa fa-anchor" aria-hidden="true"></i>'
            }));

            $list.append($('<a>', {
                class: 'toc-link toc-' + _this.tagName.toLowerCase(),
                href: '#' + id,
                text: str
            }));
        });

        $control.on('click', function() {
            $fly.toggleClass('active');

            checkSize();
        });

        $post.append($fly.append($list).append($control));
        tocHeight = $fly.height();
        tocTop = $fly.offset().top;
        checkSize();

        $win.on('load resize', checkSize).on('scroll', tocPosition);
    }).on('click', '.toc-link', function(e) {
        e.preventDefault();

        var hash = this.hash;

        history.replaceState(null, null, hash);
        gotoTop($(hash));
    });

})(jQuery);
