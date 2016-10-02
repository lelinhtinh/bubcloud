/* global my_getcookie, my_setcookie */
(function($) {

    'use strict';

    var themeId = 'bubcloud',

        themeChoose = function(colorX, colorY) {
            var $theme = $('#' + themeId);
            if (!$theme.length) {
                $theme = $('<style>', {
                    id: themeId,
                    type: 'text/css'
                }).appendTo('head');
            }

            $theme.text('a,.poll-vote:checked + .poll-label,.poll-label:hover{color:#' + colorX + '}a:hover,a:focus{color:#262626}.borderwrap .maintitle h1 a,.borderwrap .maintitle h2 a,.borderwrap .maintitle h3 a,.current-user-link a strong{color:#' + colorX + '!important}.borderwrap .maintitle h1 a:focus,.borderwrap .maintitle h1 a:hover,.borderwrap .maintitle h2 a:focus,.borderwrap .maintitle h2 a:hover,.borderwrap .maintitle h3 a:focus,.borderwrap .maintitle h3 a:hover,.current-user-link a:focus strong,.current-user-link a:hover strong{color:#262626!important}#new-message .privmsg li .tabitem,#new-message .privmsg li .tabitem a:hover,#new-message .privmsg li .tabitem a:focus,.privmsg-menu li .tabitem,.privmsg-menu li .tabitem a:hover,.privmsg-menu li .tabitem a:focus,.post-type-icons input:checked + span,.post-type-icons span:hover{border-color:#' + colorX + '}#new-message-link a,#simple-wrap .center a,.btn,.button,.privmsg-footer a,.privmsg-options a,.zzPoll h3 > a,[type="button"],[type="submit"],.pagination b,.poll-width{background-color:#' + colorX + '}#new-message-link a:focus,#new-message-link a:hover,.btn:focus,.btn:hover,.button:focus,.button:hover,.privmsg-footer a:focus,.privmsg-footer a:hover,.privmsg-options a:focus,.privmsg-options a:hover,.zzPoll h3 > a:focus,.zzPoll h3 > a:hover,[type="button"]:focus,[type="button"]:hover,[type="submit"]:focus,[type="submit"]:hover,.pagination a:hover,.pagination a:focus{background-color:#' + colorY + '}#new-message-link a:active,.btn:active,.button:active,.privmsg-footer a:active,.privmsg-options a:active,.zzPoll h3 > a:active,[type="button"]:active,[type="submit"]:active,.pagination a:active{background-color:#262626}#navstrip{border-left-color:#' + colorX + '}');
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

            $chat.text('#submit_button{background-color:#' + colorX + '!important}#submit_button:hover,#submit_button:focus{background-color:#' + colorY + '!important}#submit_button:active{background-color:#262626!important}');
        };

    var $button = $('.color-button'),
        $chatbox = $('#frame_chatbox');

    $('.color-choose').on('click', function(e) {
        e.preventDefault();

        var $this = $(this),
            colorx = $this.data('colorx'),
            colory = $this.data('colory'),
            $theme = $('#' + themeId),
            $chat = $chatbox.contents().find('#' + themeId);

        if ($this.hasClass('active')) {
            return;
        }

        if (colorx === '' && colory === '') {

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

            themeChoose(colorx, colory);
            if ($chatbox.length) {
                chatChoose(colorx, colory, $chatbox);
            }

            my_setcookie('bubcloud', colorx + '|' + colory, true);

        }
    });

    var themeCookie = my_getcookie('bubcloud');

    if (themeCookie !== '' && themeCookie !== null) {
        themeCookie = themeCookie.split('|');

        $button.css('color', '#' + themeCookie[0]);
        $('.color-choose[data-colorX="' + themeCookie[0] + '"]').addClass('active');
        themeChoose(themeCookie[0], themeCookie[1]);
        if ($chatbox.length) {
            $chatbox.load(function() {
                chatChoose(themeCookie[0], themeCookie[1], $chatbox);
            });
        }
    }

})(jQuery);
