/* global GetParam */
(function($) {
    'use strict';

    var $mess = $('#text_editor_textarea'),
        $quote = $('.post a[href*="/t"][href*="-quote#"]');


    if (/r=t\d+(p\d+)?/.test(location.search)) $mess.val('[url=http://' + location.host + '/' + GetParam('r') + '-quote#' + GetParam('p') + '][/url]' + $mess.val());

    if($quote.length) $quote.next('br').remove().end().each(function() {
        $(this).addClass('quote-referrer fa fa-arrow-up').appendTo($(this).next('blockquote').find('cite:first'));
    });

})(jQuery);
