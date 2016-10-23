var dataTags = 'windows, linux, ios, android, software, online tool, google chrome, firefox, opera, internet explorer, other browser, mod, widget, template, bbcode, html, css, javascript, jquery, jquery plugin, ajax, userscript, extension, tutorial, tip, ide, text editor, bbcode editor, acp, funny, discussion, news, video, galler, game, lightbox, highlight, latest topics, chatbox, vote, poll, phpbb2, phpbb3, punbb, invision, skin, mobile, seo, domain, host';


(function($) {
    'use strict';

    var $hashtag = $('#hashtags');
    if (location.pathname !== '/post' || !$hashtag.length) return;

    var data = [],
        dataArr = dataTags.split(/\s?,\s?/),
        $mess = $('#text_editor_textarea'),
        $tags = $('#tagsInput'),
        $select = $('<select>', {
            'class': 'js-example-data-array',
            'multiple': 'multiple',
            'css': {
                'width': '100%'
            }
        });


    $select.appendTo('#tagsSelect');
    $hashtag.removeClass('hide');

    if (/\[hr\]\n?\[b\]Tags:\s\[\/b\]#/.test($mess.val())) {
        var newMess = $mess.val().split(/\[hr\]\n?\[b\]Tags:\s\[\/b\]/);

        if (newMess[0].search(/\[quote="[^"]+"\]/) === -1 && newMess[1].indexOf('[/quote]') === -1) {
            $mess.val(newMess[0]);

            $.each(newMess[1].split(' '), function(i, val) {
                $('<option>', {
                    value: val.replace('#', ''),
                    text: val.replace('#', '').replace(/-/g, ' '),
                    selected: 'selected'
                }).appendTo($select);
            });

            $tags.val(newMess[1]);
        } else {
            $mess.val($mess.val().replace(/\[hr\]\n?\[b\]Tags:\s\[\/b\](\#[^\[]+\s?)+/g, ''));
        }
    }

    $.each(dataArr, function(i, val) {
        data[i] = {
            id: val.replace(/\s/g, '-'),
            text: val
        };
    });

    $select.select2({
        data: data,
        placeholder: 'Thêm nhãn cho bài viết...',
        tags: true,
        tokenSeparators: [',']
    });

    $select.on('change', function() {
        var arr = $select.val();

        if (arr !== null) {
            $.each(arr, function(i, val) {
                if (dataArr.indexOf(val.toLowerCase()) === -1) val = val.replace(/\s/g, '-').toLowerCase();
                arr[i] = '#' + val;
            });

            $tags.val(arr.join(' '));
        } else {
            $tags.val('');
        }
    });

    $('form[name="post"]').submit(function() {
        var $instance = $mess.sceditor('instance');

        if ($tags.val() !== '' && $instance.val() !== '') $instance.val($instance.val() + '[hr][b]Tags: [/b]' + $tags.val());
    });

}(jQuery));
