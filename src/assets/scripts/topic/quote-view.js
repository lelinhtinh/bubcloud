/* global gotoTop */
(function($) {
    'use strict';

    var $btn = $('.quote.post-btn'),
        $quote = $('.post a[href*="/t"][href*="-quote#"]'),
        path = location.pathname;


    if ($btn.length) $btn.attr('href', function() {
        return this.href + '&r=' + path.replace(/\/(t\d+(p\d+)?)-.*/, '$1');
    });

    if ($quote.length) $quote.each(function() {
        var $this = $(this),
            $parent = $this.parent();

        if ($parent[0].tagName === 'P') {
            $this.appendTo($parent.next().find('cite:first'));
            $parent.remove();
        } else {
            $this.next('br').remove();
            $this.appendTo($this.next('blockquote').find('cite:first'));
        }

        $this.addClass('quote-referrer fa fa-arrow-up').attr('href', function() {
            var matchInPage = /\/(t\d+(p\d+)?)-/;

            if (matchInPage.test(path) && this.pathname.match(matchInPage)[1] === path.match(matchInPage)[1]) return '#' + this.href.split('#')[1];
        }).on('click', function(e) {
            e.preventDefault();
            var hash = this.hash;

            history.replaceState(null, null, path + hash);
            gotoTop($(hash));
        });
    });

})(jQuery);
