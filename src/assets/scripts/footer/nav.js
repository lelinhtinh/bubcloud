/* global _userdata */
(function($) {

    'use strict';

    var $searchMenu = $('.search-form'),
        $mainMenu = $('.main-menu'),
        $userMenu = $('.user-menu'),
        $searchToggle = $('#togglesearch'),
        $menuToggle = $('#togglemenu'),
        $nav = $('#nav'),
        $homeLink = $('.home-link'),

        $username = $('.current-user'),
        $avatar = $('.current-avatar'),
        $inbox = $('.new-mail'),

        local = location,
        path = local.pathname,
        params = local.search;

    function getParam(param, url) {
        var paramsString = params.slice(1), // location.search.slice(1)
            data,
            iParam;

        if (url) {
            url = url.split(/\?|#/);
            if (url.length >= 2) {
                paramsString = url[1];
            } else {
                paramsString = '';
            }
        }

        if (paramsString === '') {
            return null;
        }

        data = paramsString.split(/&amp;|&|=/);
        iParam = data.indexOf(param);

        if (iParam !== -1 && iParam % 2 === 0) {
            return data[iParam + 1];
        } else {
            return null;
        }
    }

    function activeLink(linkName) {
        var $link = $('.' + linkName + '-link');
        if ($link.length) {
            $link.addClass('active');
        }
    }

    $searchToggle.on('click', function() {
        if ($menuToggle.hasClass('active')) {
            $menuToggle.removeClass('active');
            $mainMenu.add($userMenu).fadeOut('fast');
            $nav.slideUp('fast');
        }
        $searchToggle.toggleClass('active');
        $searchMenu.fadeToggle('fast');
        $nav.slideToggle('fast');
    });

    $menuToggle.on('click', function() {
        if ($searchToggle.hasClass('active')) {
            $searchToggle.removeClass('active');
            $searchMenu.fadeOut('fast');
            $nav.slideUp('fast');
        }
        $menuToggle.toggleClass('active');
        $mainMenu.add($userMenu).fadeToggle('fast');
        $nav.slideToggle('fast');
    });

    if (path !== '/') {
        $homeLink.removeClass('active');
        if (path === '/privmsg') {
            activeLink('inbox');
        } else if (path === '/profile') {
            if (params === '?mode=editprofile') {
                activeLink('editprofile');
            } else {
                activeLink(getParam('page_profil'));
            }
        } else if (path === '/search') {
            if (params !== '' && params !== '?tt=1') {
                activeLink(getParam('search_id'));
            } else {
                activeLink('search');
            }
        } else if (/^\/g\d+-/.test(path)) {
            activeLink('groups');
        } else if (/^\/(memberlist|groups|calendar|faq|login|register)$/.test(path)) {
            activeLink(path.slice(1));
        }
    }

    if (!$avatar.length) {
        return;
    }
    $username.text(_userdata.username);
    $avatar.html(_userdata.avatar);
    $('a', '.current-user-link').attr('href', '/u' + _userdata.user_id + 'wall');
    var count = $inbox.text();
    if (/\d+/.test(count)) {
        $inbox.text(count.match(/\d+/)).show();
    }

})(jQuery);
