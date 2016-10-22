/* global my_getcookie */
function themeChoose(colorX, colorY, colorZ) {
    var $theme = $('#bubcloud');

    $theme.text('a:focus,a:hover{color:#' + colorX + '}#new-message-link a:focus,#new-message-link a:hover,.btn:focus,.btn:hover,.button:focus,.button:hover,.privmsg-footer a:focus,.privmsg-footer a:hover,.privmsg-options a:focus,.privmsg-options a:hover,.zzPoll h3>a:focus,.zzPoll h3>a:hover,[type=button]:focus,[type=button]:hover,[type=submit]:focus,[type=submit]:hover,a[href="javascript:window.close();"]:focus,a[href="javascript:window.close();"]:hover,#header,.pagination a:active{background-color:#' + colorX + '!important}.borderwrap .maintitle h1 a:focus,.borderwrap .maintitle h1 a:hover,.borderwrap .maintitle h2 a:focus,.borderwrap .maintitle h2 a:hover,.borderwrap .maintitle h3 a:focus,.borderwrap .maintitle h3 a:hover{color:#' + colorX + '!important}@media only screen and (min-width:768px){.current-user-link a:focus strong,.current-user-link a:hover strong{color:#' + colorX + '!important}}#new-message-link a,.btn,.button,.privmsg-footer a,.privmsg-options a,.zzPoll h3>a,[type=button],[type=submit],a[href="javascript:window.close();"],.pagination a:focus,.pagination a:hover,.pagination b,.poll-width{background-color:#' + colorY + '}.borderwrap .maintitle h1 a,.borderwrap .maintitle h2 a,.borderwrap .maintitle h3 a{color:#' + colorY + '!important}.post-header{background:#' + colorY + '}#new-message .privmsg li .tabitem,.privmsg-menu li .tabitem,#new-message .privmsg li .tabitem a:focus,#new-message .privmsg li .tabitem a:hover,.privmsg-menu li .tabitem a:focus,.privmsg-menu li .tabitem a:hover,.post-type-icons input:checked+span,.post-type-icons span:hover{border-color:#' + colorY + '}#navstrip{border-left-color:#' + colorY + '}a,.poll-label:hover,.poll-vote:checked+.poll-label{color:#' + colorY + '}@media only screen and (min-width:768px){.current-user-link a strong{color:#' + colorY + '!important}}.post-header,.post-header a,#site-desc{color:#' + colorZ + '}');
}

var themeCookie = my_getcookie('bubcloud');

if (themeCookie !== '' && themeCookie !== null) {
    themeCookie = themeCookie.split('|');
    themeChoose(themeCookie[0], themeCookie[1], themeCookie[2]);

    $(function() {
        $('.color-button').css('color', '#' + themeCookie[0]);
        $('.color-choose[data-colorX="' + themeCookie[0] + '"]').addClass('active');
    });
}
