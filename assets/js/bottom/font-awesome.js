/* global toolbar:true */
(function($) {

    'use strict';

    if (!$.sceditor) {
        return;
    }


    // // https://fortawesome.github.io/Font-Awesome/cheatsheet/

    // var iconNodes = document.querySelectorAll('#wrap > .container .text-muted:last-child'),
    // arr = [];
    // [].forEach.call(iconNodes, function(icon) {
    //    icon = icon.textContent.replace(/^\[&#x(.+)\;\]$/, '\\u$1');
    //    if(arr.indexOf(icon) !== -1) return; // remove duplicate
    //      arr.push(icon);
    // });
    // arr = JSON.stringify(arr).slice(3, -2).replace(/"\,"\\/g, ' ');
    // console.log(arr);

    // icon list v4.6.3 (634 icons)


    var button_title = 'Font Awesome Icons',
        fa_list = '\uf26e \uf042 \uf170 \uf037 \uf039 \uf036 \uf038 \uf270 \uf0f9 \uf2a3 \uf13d \uf17b \uf209 \uf103 \uf100 \uf101 \uf102 \uf107 \uf104 \uf105 \uf106 \uf179 \uf187 \uf1fe \uf0ab \uf0a8 \uf01a \uf190 \uf18e \uf01b \uf0a9 \uf0aa \uf063 \uf060 \uf061 \uf062 \uf047 \uf0b2 \uf07e \uf07d \uf2a2 \uf069 \uf1fa \uf29e \uf1b9 \uf04a \uf24e \uf05e \uf19c \uf080 \uf02a \uf0c9 \uf244 \uf243 \uf242 \uf241 \uf240 \uf236 \uf0fc \uf1b4 \uf1b5 \uf0f3 \uf0a2 \uf1f6 \uf1f7 \uf206 \uf1e5 \uf1fd \uf171 \uf172 \uf15a \uf27e \uf29d \uf293 \uf294 \uf032 \uf0e7 \uf1e2 \uf02d \uf02e \uf097 \uf2a1 \uf0b1 \uf188 \uf1ad \uf0f7 \uf0a1 \uf140 \uf207 \uf20d \uf1ba \uf1ec \uf073 \uf274 \uf272 \uf133 \uf271 \uf273 \uf030 \uf083 \uf0d7 \uf0d9 \uf0da \uf150 \uf191 \uf152 \uf151 \uf0d8 \uf218 \uf217 \uf20a \uf1f3 \uf24c \uf1f2 \uf24b \uf1f1 \uf1f4 \uf1f5 \uf1f0 \uf0a3 \uf0c1 \uf127 \uf00c \uf058 \uf05d \uf14a \uf046 \uf13a \uf137 \uf138 \uf139 \uf078 \uf053 \uf054 \uf077 \uf1ae \uf268 \uf111 \uf10c \uf1ce \uf1db \uf0ea \uf017 \uf24d \uf00d \uf0c2 \uf0ed \uf0ee \uf157 \uf121 \uf126 \uf1cb \uf284 \uf0f4 \uf013 \uf085 \uf0db \uf075 \uf0e5 \uf27a \uf27b \uf086 \uf0e6 \uf14e \uf066 \uf20e \uf26d \uf0c5 \uf1f9 \uf25e \uf09d \uf283 \uf125 \uf05b \uf13c \uf1b2 \uf1b3 \uf0c4 \uf0f5 \uf0e4 \uf210 \uf1c0 \uf2a4 \uf03b \uf1a5 \uf108 \uf1bd \uf219 \uf1a6 \uf155 \uf192 \uf019 \uf17d \uf16b \uf1a9 \uf282 \uf044 \uf052 \uf141 \uf142 \uf1d1 \uf0e0 \uf003 \uf199 \uf299 \uf12d \uf153 \uf0ec \uf12a \uf06a \uf071 \uf065 \uf23e \uf08e \uf14c \uf06e \uf070 \uf1fb \uf2b4 \uf09a \uf230 \uf082 \uf049 \uf050 \uf1ac \uf09e \uf182 \uf0fb \uf15b \uf1c6 \uf1c7 \uf1c9 \uf1c3 \uf1c5 \uf1c8 \uf016 \uf1c1 \uf1c4 \uf15c \uf0f6 \uf1c2 \uf008 \uf0b0 \uf06d \uf134 \uf269 \uf2b0 \uf024 \uf11e \uf11d \uf0c3 \uf16e \uf0c7 \uf07b \uf114 \uf07c \uf115 \uf031 \uf280 \uf286 \uf211 \uf04e \uf180 \uf119 \uf1e3 \uf11b \uf0e3 \uf154 \uf22d \uf265 \uf260 \uf261 \uf06b \uf1d3 \uf1d2 \uf09b \uf113 \uf092 \uf296 \uf184 \uf000 \uf2a5 \uf2a6 \uf0ac \uf1a0 \uf0d5 \uf2b3 \uf0d4 \uf1ee \uf19d \uf0c0 \uf0fd \uf1d4 \uf255 \uf258 \uf0a7 \uf0a5 \uf0a4 \uf0a6 \uf256 \uf25b \uf25a \uf257 \uf259 \uf292 \uf0a0 \uf1dc \uf025 \uf004 \uf08a \uf21e \uf1da \uf015 \uf0f8 \uf254 \uf251 \uf252 \uf253 \uf250 \uf27c \uf13b \uf246 \uf20b \uf03e \uf01c \uf03c \uf275 \uf129 \uf05a \uf156 \uf16d \uf26b \uf224 \uf208 \uf033 \uf1aa \uf1cc \uf084 \uf11c \uf159 \uf1ab \uf109 \uf202 \uf203 \uf06c \uf212 \uf094 \uf149 \uf148 \uf1cd \uf0eb \uf201 \uf0e1 \uf08c \uf17c \uf03a \uf022 \uf0cb \uf0ca \uf124 \uf023 \uf175 \uf177 \uf178 \uf176 \uf2a8 \uf0d0 \uf076 \uf064 \uf112 \uf122 \uf183 \uf279 \uf041 \uf278 \uf276 \uf277 \uf222 \uf227 \uf229 \uf22b \uf22a \uf136 \uf20c \uf23a \uf0fa \uf11a \uf223 \uf130 \uf131 \uf068 \uf056 \uf146 \uf147 \uf289 \uf10b \uf285 \uf0d6 \uf186 \uf21c \uf245 \uf001 \uf22c \uf1ea \uf247 \uf248 \uf263 \uf264 \uf23d \uf19b \uf26a \uf23c \uf18c \uf1fc \uf1d8 \uf1d9 \uf0c6 \uf1dd \uf04c \uf28b \uf28c \uf1b0 \uf1ed \uf040 \uf14b \uf295 \uf095 \uf098 \uf200 \uf2ae \uf1a8 \uf1a7 \uf0d2 \uf231 \uf0d3 \uf072 \uf04b \uf144 \uf01d \uf1e6 \uf067 \uf055 \uf0fe \uf196 \uf011 \uf02f \uf288 \uf12e \uf1d6 \uf029 \uf128 \uf059 \uf29c \uf10d \uf10e \uf1d0 \uf074 \uf1b8 \uf1a1 \uf281 \uf1a2 \uf021 \uf25d \uf18b \uf01e \uf079 \uf018 \uf135 \uf0e2 \uf158 \uf143 \uf267 \uf28a \uf002 \uf010 \uf00e \uf213 \uf233 \uf1e0 \uf1e1 \uf14d \uf045 \uf132 \uf21a \uf214 \uf290 \uf291 \uf07a \uf090 \uf2a7 \uf08b \uf012 \uf215 \uf0e8 \uf216 \uf17e \uf198 \uf1de \uf1e7 \uf118 \uf2ab \uf2ac \uf2ad \uf0dc \uf15d \uf15e \uf160 \uf161 \uf0de \uf0dd \uf162 \uf163 \uf1be \uf197 \uf110 \uf1b1 \uf1bc \uf0c8 \uf096 \uf18d \uf16c \uf005 \uf089 \uf123 \uf006 \uf1b6 \uf1b7 \uf048 \uf051 \uf0f1 \uf249 \uf24a \uf04d \uf28d \uf28e \uf21d \uf0cc \uf1a4 \uf1a3 \uf12c \uf239 \uf0f2 \uf185 \uf12b \uf0ce \uf10a \uf02b \uf02c \uf0ae \uf26c \uf1d5 \uf120 \uf034 \uf035 \uf00a \uf009 \uf00b \uf2b2 \uf08d \uf165 \uf088 \uf087 \uf164 \uf145 \uf057 \uf05c \uf043 \uf204 \uf205 \uf25c \uf238 \uf225 \uf1f8 \uf014 \uf1bb \uf181 \uf262 \uf091 \uf0d1 \uf195 \uf1e4 \uf173 \uf174 \uf1e8 \uf099 \uf081 \uf0e9 \uf0cd \uf29a \uf09c \uf13e \uf093 \uf287 \uf007 \uf0f0 \uf234 \uf21b \uf235 \uf221 \uf226 \uf228 \uf237 \uf2a9 \uf2aa \uf03d \uf27d \uf194 \uf1ca \uf189 \uf2a0 \uf027 \uf026 \uf028 \uf1d7 \uf18a \uf232 \uf193 \uf29b \uf1eb \uf266 \uf17a \uf19a \uf297 \uf298 \uf0ad \uf168 \uf169 \uf23b \uf19e \uf1e9 \uf2b1 \uf167 \uf16a \uf166'.split(' '),


        listLength = fa_list.length,
        index = 0,
        disable = false,
        $win = $(window),
        addResizeEvent;

    function createList($wrap) {
        disable = true;

        var stop = index + 100;

        if (stop > listLength) {
            stop = listLength;
        }

        for (index; index < stop; index++) {
            $('<i>', {
                'class': 'fa',
                text: fa_list[index]
            }).appendTo($wrap);
        }

        index = stop;
        disable = false;
    }

    function updatePosition($wrap, caller) {
        var callerLeft = caller.offset().left,
            winWidth = $win.width(),
            customStyle = {
                top: caller.offset().top,
                marginTop: caller.outerHeight()
            };

        if (callerLeft + 220 > winWidth) {
            customStyle.left = 'auto';
            customStyle.right = 0;
        } else {
            customStyle.left = callerLeft;
            customStyle.right = 'auto';
        }
        $wrap.css(customStyle);
    }

    $(function() {
        $('.sceditor-container iframe').contents().find('head').append($('<link>', {
            href: '//maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css',
            rel: 'stylesheet',
            type: 'text/css'
        }));
    });

    // create sceditor button and drop down
    $.sceditor.command.set('fontawesome', {

        awesome: function(editor, caller, callback) {

            var $wrap = $('.sceditor-fontawesome'),
                closeDropDown = editor.closeDropDown;

            if (!$wrap.length) {

                closeDropDown();
                editor.closeDropDown = function() {
                    closeDropDown.apply(closeDropDown, arguments);
                    if ($wrap.is(':visible')) {
                        $wrap.hide();
                    }
                };

                $wrap = $('<div>', {
                    'class': 'sceditor-dropdown sceditor-fontawesome'
                }).click(function(e) {
                    e.stopPropagation();
                });
                $wrap.appendTo('body');

                createList($wrap);
                $wrap.scrollTop(0);

                $wrap.on('click', '.fa', function(e) {
                    callback(this.textContent);
                    if (!e.ctrlKey) {
                        editor.closeDropDown();
                    }
                });

                $wrap.scroll(function() {
                    if (disable) {
                        return false;
                    }
                    if (index >= fa_list.length) {
                        return false;
                    }
                    if ($wrap.scrollTop() + 250 + 50 < $wrap[0].scrollHeight) {
                        return false;
                    }
                    createList($wrap);
                });

            } else {

                if ($wrap.is(':hidden')) {
                    editor.closeDropDown();
                    $wrap.show();
                } else {
                    editor.closeDropDown();
                }

            }

            updatePosition($wrap, caller);
            if (!addResizeEvent) {
                addResizeEvent = true;
                $win.resize(function() {
                    updatePosition($wrap, caller);
                });
            }

        },

        // wysiwyg
        exec: function(caller) {
            var editor = this;
            $.sceditor.command.get('fontawesome').awesome(editor, caller, function(icon) {
                editor.insert('&nbsp;[font=FontAwesome]' + icon + '[/font]&nbsp;', '', true, true, true);
            });
        },

        // source
        txtExec: function(caller) {
            var editor = this;
            $.sceditor.command.get('fontawesome').awesome(editor, caller, function(icon) {
                editor.insert(' [font=FontAwesome]' + icon + '[/font] ', '');
            });
        },

        tooltip: button_title
    });

    toolbar = toolbar.replace(/date,/, 'fontawesome,date,'); // add the button to the toolbar
})(jQuery);
