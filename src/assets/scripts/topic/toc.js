/* global debounce, bodau, gotoTop */
(function($) {
    'use strict';

    function createDiv(className) {
        return $('<div>', {
            class: className
        });
    }

    function updateId(id) {
        if (!$(id).length) return id;

        id += '-i';
        return updateId(id);
    }


    $('.post').each(function() {
        var $post = $(this),
            $heading = $post.find('h2, h3, h4');

        if (!$heading.length) return;

        var $fly = createDiv('toc-fly'),
            $control = createDiv('toc-control').html('<i class="fa fa-bars" aria-hidden="true"></i>'),
            $list = createDiv('toc-list'),
            $totop = createDiv('toc-totop'),

            $win = $(window),
            winHeight = 0,
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
                winHeight = $win.height() - 30;
                postTop = $post.offset().top;
                postFootTop = $post.find('.post-footer').offset().top - 2;
                tocHeight = $fly.height();
                tocTop = postTop + postHeadHeight;

                $list.css('max-height', winHeight);
                tocPosition();
            }, 250);


        $totop.append($('<a>', {
            class: 'toc-link toc-top',
            href: '#' + $post.attr('id'),
            html: '<i class="fa fa-arrow-up" aria-hidden="true"></i> Lên đầu bài viết '
        }));

        $heading.each(function() {
            var _this = this,
                $h = $(_this),
                str = _this.textContent,
                hash = '#' + bodau(str);

            hash = updateId(hash);

            $h.append($('<a>', {
                class: 'toc-link toc-anchor',
                href: hash,
                id: hash.slice(1),
                html: '<i class="fa fa-anchor" aria-hidden="true"></i>'
            }));

            $list.append($('<a>', {
                class: 'toc-link toc-' + _this.tagName.toLowerCase(),
                href: hash,
                text: str
            }));
        });

        $control.on('click', function() {
            $fly.toggleClass('active');

            checkSize();
        });

        $post.append($fly.append($totop.append($control)).append($list));
        checkSize();

        $win.on('load resize', checkSize).on('scroll', tocPosition);
    }).on('click', '.toc-link', function(e) {
        e.preventDefault();

        var hash = this.hash;

        history.replaceState(null, null, hash);
        gotoTop($(hash));
    });

})(jQuery);
