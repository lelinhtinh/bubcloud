(function($) {
    'use strict';

    var $post = $('.post-entry'),
        $label = $('strong:contains("Tags: ")'),
        $tags = $post.find('a[title^="See all tagged subjects with:"]');


    if (!$post.length) return;

    if (!$label.length) return;
    $label.hide().prev('br, hr').hide().prev('hr').hide();

    if (!$tags.length) return;
    $tags.replaceWith(function() {
        return $('<a>', {
            href: this.href,
            class: 'tags',
            text: this.textContent.replace('#', '').replace(/-/g, ' ')
        });
    });

    $post.each(function() {
        $(this).find('.tags').wrapAll('<div class="tagsGroup"></div>');
    });

})(jQuery);
