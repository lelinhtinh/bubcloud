/* global _userdata */
(function($) {

    'use strict';

    /* Fixed bug jqModal by Zzbaivong */

    var clientPC = navigator.userAgent.toLowerCase();
    $.browser = {
        version: parseInt(navigator.appVersion),
        msie: (-1 !== clientPC.indexOf('msie') && -1 === clientPC.indexOf('opera')),
        opera: (-1 !== clientPC.indexOf('opera')),
        mozilla: (-1 !== clientPC.indexOf('mozilla')),
        safari: (-1 !== clientPC.indexOf('safari')),
    };

    $.fn.jqDrag = $.fn.bgiframe = function() {
        return $.noop();
    };

    /* Fixed bug ajax-profil_edit by Zzbaivong */

    function attrValue(ele) {
        var $this = $(ele);
        $this.attr('value', $this.val());
    }

    var forumVersion = 1;

    $(function() {
        if (location.pathname.indexOf('/u') === 0 && _userdata.session_logged_in === 1) {
            $('.field_editable').on('input', ['.post', '.inputbox'][forumVersion], function() {
                attrValue(this);
            }).on('change', 'select', function() {
                attrValue(this);
            }).find('select, input, textarea').each(function() {
                attrValue(this);
            });
        }
    });

})(jQuery);
