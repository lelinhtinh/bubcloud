/* global toolbar:true */
(function($) {

    'use strict';

    if (!$.sceditor) {
        return;
    }

    function inlineCode(editor) {
        editor.css('font[face="monospace"]{color:green;background:#f4f4f4;padding:2px 5px;display:inline-block;margin:-2px 3px;border-radius:2px}');
        editor.insert('[font=monospace]', '[/font]');
    }

    $.sceditor.command.set('inline-code', {
        exec: function() {
            inlineCode(this);
        },
        txtExec: function() {
            inlineCode(this);
        },
        tooltip: 'Code snippet'
    });

    /*global toolbar:true*/
    toolbar = toolbar.replace(/code/, 'code,inline-code');

})(jQuery);
