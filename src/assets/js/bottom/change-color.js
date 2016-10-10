/* global my_getcookie, my_setcookie */
(function($) {

    'use strict';

    var themeId = 'bubcloud',

        themeChoose = function(colorX, colorY, colorZ) {
            var $theme = $('#' + themeId);
            if (!$theme.length) {
                $theme = $('<style>', {
                    id: themeId,
                    type: 'text/css'
                }).appendTo('head');
            }

            $theme.text('a:focus,a:hover{color:#' + colorX + '}#new-message-link a:focus,#new-message-link a:hover,.btn:focus,.btn:hover,.button:focus,.button:hover,.privmsg-footer a:focus,.privmsg-footer a:hover,.privmsg-options a:focus,.privmsg-options a:hover,.zzPoll h3>a:focus,.zzPoll h3>a:hover,[type=button]:focus,[type=button]:hover,[type=submit]:focus,[type=submit]:hover,a[href="javascript:window.close();"]:focus,a[href="javascript:window.close();"]:hover,#header,.pagination a:active{background-color:#' + colorX + '!important}.borderwrap .maintitle h1 a:focus,.borderwrap .maintitle h1 a:hover,.borderwrap .maintitle h2 a:focus,.borderwrap .maintitle h2 a:hover,.borderwrap .maintitle h3 a:focus,.borderwrap .maintitle h3 a:hover{color:#' + colorX + '!important}@media only screen and (min-width:768px){.current-user-link a:focus strong,.current-user-link a:hover strong{color:#' + colorX + '!important}}#new-message-link a,.btn,.button,.privmsg-footer a,.privmsg-options a,.zzPoll h3>a,[type=button],[type=submit],a[href="javascript:window.close();"],.pagination a:focus,.pagination a:hover,.pagination b,.poll-width{background-color:#' + colorY + '}.borderwrap .maintitle h1 a,.borderwrap .maintitle h2 a,.borderwrap .maintitle h3 a{color:#' + colorY + '!important}.post-header{background:#' + colorY + '}#new-message .privmsg li .tabitem,.privmsg-menu li .tabitem,#new-message .privmsg li .tabitem a:focus,#new-message .privmsg li .tabitem a:hover,.privmsg-menu li .tabitem a:focus,.privmsg-menu li .tabitem a:hover,.post-type-icons input:checked+span,.post-type-icons span:hover{border-color:#' + colorY + '}#navstrip{border-left-color:#' + colorY + '}a,.poll-label:hover,.poll-vote:checked+.poll-label{color:#' + colorY + '}@media only screen and (min-width:768px){.current-user-link a strong{color:#' + colorY + '!important}}.post-header,.post-header a,#site-desc{color:#' + colorZ + '}');
        },

        chatChoose = function(colorX, colorY, $chatbox) {

            var $chat = $chatbox.contents().find('#' + themeId);
            if (!$chat.length) {
                $chat = $('<style>', {
                    id: themeId,
                    type: 'text/css'
                });
                $chatbox.contents().find('head').append($chat);
            }

            $chat.text('a:focus,a:hover{color:#' + colorX + '}a{color:#' + colorY + '}.msg-me .msg-act{background:#' + colorY + '}');
        };

    var $button = $('.color-button'),
        $chatbox = $('#frame_chatbox');

    $('.color-choose').on('click', function(e) {
        e.preventDefault();

        var $this = $(this),
            colorx = $this.data('colorx'),
            colory = $this.data('colory'),
            colorz = $this.data('colorz'),
            $theme = $('#' + themeId),
            $chat = $chatbox.contents().find('#' + themeId);

        if ($this.hasClass('active')) return;

        if (colorx === '' && colory === '' && colorz === '') {

            if ($theme.length) {
                $theme.remove();
            }
            if ($chat.length) {
                $chat.remove();
            }
            $('.color-choose.active').removeClass('active');
            $button.removeAttr('style');

            my_setcookie('bubcloud', '');

        } else {

            $('.color-choose.active').removeClass('active');
            $this.addClass('active');
            $button.css('color', '#' + colorx);

            themeChoose(colorx, colory, colorz);
            if ($chatbox.length) chatChoose(colorx, colory, $chatbox);

            my_setcookie('bubcloud', colorx + '|' + colory + '|' + colorz, true);

        }
    });

    var themeCookie = my_getcookie('bubcloud');

    if (themeCookie !== '' && themeCookie !== null) {
        themeCookie = themeCookie.split('|');

        $button.css('color', '#' + themeCookie[0]);
        $('.color-choose[data-colorX="' + themeCookie[0] + '"]').addClass('active');
        themeChoose(themeCookie[0], themeCookie[1], themeCookie[2]);
        if ($chatbox.length) $chatbox.load(function() {
            chatChoose(themeCookie[0], themeCookie[1], $chatbox);
        });
    }

})(jQuery);
