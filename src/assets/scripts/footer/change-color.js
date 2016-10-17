/* global my_setcookie, themeChoose */
(function($) {

    'use strict';

    var chatChoose = function(colorX, colorY, $chatbox) {
            var $chat = $chatbox.contents().find('#bubcloud');
            if (!$chat.length) {
                $chat = $('<style>', {
                    id: 'bubcloudChat',
                    type: 'text/css'
                });
                $chatbox.contents().find('head').append($chat);
            }

            $chat.text('a:focus,a:hover{color:#' + colorX + '}a{color:#' + colorY + '}.msg-me .msg-act{background:#' + colorY + '}');
        },

        $button = $('.color-button'),
        $chatbox = $('#frame_chatbox');

    $('.color-choose').on('click', function(e) {
        e.preventDefault();

        var $this = $(this),
            colorx = $this.data('colorx'),
            colory = $this.data('colory'),
            colorz = $this.data('colorz'),
            $theme = $('#bubcloud'),
            $chat = $chatbox.contents().find('#bubcloudChat');

        if ($this.hasClass('active')) return;

        if (colorx === '' && colory === '' && colorz === '') {

            if ($theme.length) $theme.empty();
            if ($chat.length) $chat.empty();

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

})(jQuery);
