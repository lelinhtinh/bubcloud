/* global GetParam, gotoTop */
(function($) {
    'use strict';

    function showpost(postid) {
        history.replaceState(null, null, '?showpost=' + postid);
        $body.addClass('showpost');

        $('#' + postid).show().after('<a id="stopShowpost" data-id="' + postid + '" href="#' + postid + '" class="btn large"><div class="center"><i class="fa fa-angle-double-up" aria-hidden="true"></i> Xem toàn bộ chủ đề <i class="fa fa-angle-double-up" aria-hidden="true"></i></div></a>');

        gotoTop();
    }


    var param = GetParam('showpost'),
        $body = $('body'),
        path = location.pathname;


    if (param !== null) showpost(param);

    $('.post-count').on('contextmenu', function(e) {
        e.preventDefault();
        var $t = $(this),
            postid = $t.data('id');

        if (GetParam('showpost') === null) showpost(postid);
    }).on('click', function(e) {
        e.preventDefault();
        var hash = this.hash;

        if (GetParam('showpost') !== null) {
            $body.removeClass('showpost');
            $('#stopShowpost').remove();
        }

        history.replaceState(null, null, path + hash);
        gotoTop($(hash));
    });

    $('#viewtopic').on('click', '#stopShowpost', function(e) {
        e.preventDefault();

        $('#' + $(this).data('id')).removeAttr('style').find('.post-count').trigger('click');
    });

})(jQuery);
