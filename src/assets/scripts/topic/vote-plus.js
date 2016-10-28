(function($) {
    'use strict';

    $('.vote_zzvote:empty').html('<a class="vote_plus disable" href="">+<span class="vote_time" data-vote="Message not voted">1</span></a>');

    $('.vote_time').text(function() {
        var $voteTime = $(this),
            voteLog = $voteTime.data('vote'),
            time, percent, plus;

        if ('Message not voted' == voteLog) {
            $voteTime.data('vote', 0);

            return 1;
        }

        voteLog = voteLog.split(/\W/);
        time = parseInt(voteLog[7], 10);
        percent = parseInt(voteLog[4], 10);
        plus = Math.round(percent / 100 * time);

        $voteTime.data('vote', plus);

        if (0 !== plus) return plus;
    });

    var disable = false;
    $('.vote_plus').on('click', function(e) {
        e.preventDefault();

        var _this = this,
            $votePlus = $(_this);

        if ($votePlus.hasClass('disable')) return;
        if (disable) return;
        disable = true;

        var href = _this.href,
            $voteTime = $('.vote_time', $votePlus),
            $post = $votePlus.closest('.post');

        if (href.indexOf('eval=plus&p_vote') === -1) return;

        $votePlus.addClass('waiting');

        $.post(href).done(function() {
            $voteTime.text($voteTime.data('vote') + 1);

            $.post('/privmsg', {
                subject: 'Bài viết hay',
                message: 'Mình thích bài viết của bạn tại [url=' + location.origin + location.pathname + '?showpost=' + $post.attr('id') + ']' + $('#viewtopic h1').text() + '[/url]',
                username: $.trim($post.find('.author-name').text()),
                u: $post.find('.author-avatar a').attr('href').replace(/(.*\/u)(\d+)(.*)/, '$2'),
                mode: 'post_profile',
                folder: 'profile',
                post: 'Send'
            }).always(function() {
                $votePlus.removeClass('waiting');
            });

            _this.href = '';
        }).fail(function() {
            $votePlus.removeClass('waiting').addClass('error');
            $voteTime.text('!');
        });
    });

})(jQuery);
