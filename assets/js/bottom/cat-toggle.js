/* global my_setcookie */
window.toggleCategory2 = function(id) {

    var $obj = $('#' + id),
        $button = $('#b' + id),
        toggle = $obj.css('display') === 'none';

    $obj.stop(true, false).slideToggle('fast', function() {
        $obj.css('display', (toggle ? '' : 'none'));
        $button.attr('class', (toggle ? 'contract' : 'expand'));
        my_setcookie('_' + id, toggle ? '' : '1', true);
    });

    return false;

};
