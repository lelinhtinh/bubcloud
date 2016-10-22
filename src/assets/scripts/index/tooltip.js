(function($) {
    'use strict';

    var current_tooltip;

    function show_tooltip(element, content) {
        current_tooltip = document.getElementById('tooltip');

        if (!current_tooltip) {
            current_tooltip = document.createElement('div');
            current_tooltip.setAttribute('id', 'tooltip');
            document.body.appendChild(current_tooltip);
        }

        current_tooltip.style.visibility = 'visible';

        element.onmousemove = function(event) {
            var xMouse = event.clientX,
                yMouse = event.clientY,
                wWidth = window.innerWidth,
                wHeight = window.innerHeight,
                tWidth = current_tooltip.offsetWidth,
                tHeight = current_tooltip.offsetHeight,
                yOffset = -(20 + tHeight),
                xOffset = 0;

            if (current_tooltip.innerHTML !== content) current_tooltip.innerHTML = content;
            if (current_tooltip.style.visibility !== 'visible') current_tooltip.style.visibility = 'visible';

            if (xMouse + tWidth + 50 > wWidth) xOffset = -(tWidth);
            if (xMouse + xOffset < 0) xOffset = -xMouse;
            current_tooltip.style.left = xMouse + xOffset + 'px';

            if (yMouse < tHeight + 20) yOffset = 30;
            if (yMouse + yOffset + tHeight > wHeight) yOffset = -yMouse + (wHeight - tHeight - 18);
            current_tooltip.style.top = yMouse + yOffset + 'px';
        };

        element.onmouseout = function() {
            current_tooltip.style.visibility = 'hidden';
        };
    }


    $('.sub-title').replaceWith(function() {
        return this.textContent.replace(/^(.+)\s-\s(\d+)\s[^-]+$/, '<span class="hide"><span class="tooltip-title"><i class="fa fa-file-text-o" aria-hidden="true"></i></span>$1</span><span class="lastRight">$2</span>');
    });

    $('.group_post .lastRight, .group_time .lastRight').text(function() {
        return this.textContent.match(/\d+/)[0];
    });

    $('#recent_topics a:first-child, #active_topics a, #viewed_topics a').mouseover(function() {
        show_tooltip(this, $(this).next().html());
    });

    $('.changeLast').change(function() {
        $('.half.group_' + $(this).data('group')).hide();
        $('#' + this.value).show();
    });

})(jQuery);
