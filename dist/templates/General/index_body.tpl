{JAVASCRIPT}
<nav class="breadcrumb">
    <ul id="navstrip" class="clearfix" itemscope itemtype="http://data-vocabulary.org/Breadcrumb">
        <li class="begin"><a href="{U_INDEX}" itemprop="url"><span itemprop="title">{L_INDEX}</span></a></li>
        {NAV_CAT_DESC}
    </ul>
</nav>
<!-- BEGIN message_admin_index -->
<div class="newslink module">
    <!-- BEGIN message_admin_titre -->
    <div class="h3">{message_admin_index.message_admin_titre.MES_TITRE}</div>
    <!-- END message_admin_titre -->
    <!-- BEGIN message_admin_txt -->
    <p>{message_admin_index.message_admin_txt.MES_TXT}</p>
    <!-- END message_admin_txt -->
</div>
<!-- END message_admin_index -->
<!-- BEGIN switch_user_login_form_header -->
<div class="borderwrap module">
    <form action="{S_LOGIN_ACTION}" method="post" name="form_login">
        <div class="box-content ipbform user_login_form center" style="padding:5px 0;">
            <label><span class="genmed">{L_USERNAME}:</span>
                <input class="" type="text" size="10" name="username" />
            </label> &nbsp;
            <label><span class="genmed">{L_PASSWORD}:</span>
                <input class="" type="password" size="10" name="password" />
            </label> &nbsp;
            <label><span class="gensmall">{L_AUTO_LOGIN}</span>
                <input class="radio" type="checkbox" name="autologin" {AUTOLOGIN_CHECKED} />
            </label> &nbsp; {S_HIDDEN_FIELDS}
            <input class="mainoption" type="submit" name="login" value="{L_LOGIN}" />
            <!-- BEGIN switch_fb_connect -->
            <span class="fb_or">{switch_user_login_form_header.switch_fb_connect.L_OR}</span>
            <fb:login-button size="large" onlogin="window.location='/facebook_connect.forum'" scope="{switch_user_login_form_footer.switch_fb_connect.L_FB_PERMISSIONS}">{switch_user_login_form_footer.switch_fb_connect.L_FB_LOGIN_BUTTON}</fb:login-button>
            <!-- END switch_fb_connect -->
        </div>
    </form>
</div>
<!-- END switch_user_login_form_header -->
<section id="{ID_LEFT}" class="borderwrap">
    <div class="maintitle clearfix">
        <h2>Thống kê bài viết</h2>
        <div class="contract" id="bc0" onclick="toggleCategory2('c0');">&nbsp;&nbsp;&nbsp;</div>
    </div>
    <div id="c0" class="maincontent">
        <table class="table">
            <tbody class="statused">
                <!-- BEGIN giefmod_index1 -->
                {giefmod_index1.MODVAR}
                <!-- END giefmod_index1 -->
            </tbody>
        </table>
    </div>
    <script type="text/javascript">
    //<![CDATA[
    var versionMinor = parseFloat(navigator.appVersion),
        versionMajor = parseInt(versionMinor),
        IE = document.all && !window.opera && 7 > versionMajor,
        IE7 = document.all && !window.opera && 7 <= versionMajor,
        OP = window.opera,
        FF = document.getElementById,
        NS = document.layers;

    function get_item(a, c) {
        if (IE) return c ? window.opener.document.all[a] : document.all[a];
        if (FF) return c ? window.opener.document.getElementById(a) : document.getElementById(a);
        if (NS) return c ? window.opener.document.layers[a] : document.layers[a]
    }

    var current_tooltip;

    function show_tooltip(a, c) {
        var b = get_item("tooltip");
        b || (b = document.createElement("div"), b.setAttribute("id", "tooltip"), document.body.appendChild(b));
        b.style.zIndex = 1000;
        b.style.position = "absolute";
        b.innerHTML = "<p>" + c + "</p>";
        b.style.visibility = "visible";
        a.onmousemove = move_tooltip;
        a.onmouseout = function() {
            b.style.visibility = "hidden"
        };
        a.title = ""
    }
    var offsetxpoint = -60,
        offsetypoint = 20,
        real_body = document.compatMode && "BackCompat" != document.compatMode ? document.documentElement : document.body,
        real_body = document.documentElement ? document.documentElement : document.body;

    function move_tooltip(a) {
        var c = !IE ? a.pageX : event.clientX + real_body.scrollLeft,
            d = !IE ? a.pageY : event.clientY + real_body.scrollTop,
            b = IE && !window.opera ? real_body.clientWidth - event.clientX - offsetxpoint : window.innerWidth - a.clientX - offsetxpoint - 20,
            e = IE && !window.opera ? real_body.clientHeight - event.clientY - offsetypoint : window.innerHeight - a.clientY - offsetypoint - 20,
            f = 0 > offsetxpoint ? -1 * offsetxpoint : -1E3;
        current_tooltip = get_item("tooltip");
        current_tooltip.style.left = b < current_tooltip.offsetWidth ? IE ? real_body.scrollLeft + event.clientX - current_tooltip.offsetWidth + "px" : window.pageXOffset + a.clientX - current_tooltip.offsetWidth + "px" : c < f ? "5px" : c + offsetxpoint + "px";
        current_tooltip.style.top = e < current_tooltip.offsetHeight ? IE ? real_body.scrollTop + event.clientY - current_tooltip.offsetHeight - offsetypoint + "px" : window.pageYOffset + a.clientY - current_tooltip.offsetHeight - offsetypoint + "px" : d + offsetypoint + "px"
    }
    $("#recent_topics a:first-child, #active_topics a, #viewed_topics a").mouseover(function() {
        show_tooltip(this, $(this).next().html());
    });
    $(".sub-title").replaceWith(function() {
        return this.textContent.replace(/^(.+)\s-\s(\d+)\s[^-]+$/, '<span style="display:none">$1</span><span class="lastRight">$2</span>');
    });
    $(".group_post .lastRight, .group_time .lastRight").text(function() {
        return this.textContent.match(/\d+/)[0];
    });
    $(".changeLast").change(function() {
        $(".half.group_" + $(this).data("group")).hide();
        $("#" + this.value).show();
    });
    //]]>
    </script>
</section>
<div id="boardIndex" class="clearfix">
    <!-- BEGIN switch_user_logged_in -->
    <section class="borderwrap" id="messenger">
        <div class="maintitle clearfix">
            <h2>Tán gẫu</h2>
            <div class="contract" id="bcb" onclick="toggleCategory2('cb');">
                &nbsp;&nbsp;&nbsp;
            </div>
        </div>
        <div id="cb" class="maincontent">
            <div id="chatbox_top" style="height: 420px;">
                <iframe src="/chatbox" id="frame_chatbox" scrolling="auto" frameborder="0" height="100%" width="100%"></iframe>
            </div>
            <div style="resize">
                <img src="http://illiweb.com/fa/resize.gif" onmousedown="javascript:resizeElement(event, 'chatbox_top');" alt="" style="cursor:se-resize; float: right;" />
            </div>
        </div>
    </section>
    <!-- END switch_user_logged_in -->
    {BOARD_INDEX}
    <!-- BEGIN switch_legend -->
    <div class="module inner">
        <ul class="ul-icons-home clearfix">
            <li><img src="{FORUM_NEW_IMG}" alt="{L_NEW_POSTS}" />&nbsp;Có bài viết mới</li>
            <li><img src="{FORUM_IMG}" alt="{L_NO_NEW_POSTS}" />&nbsp;Không có bài mới</li>
            <li><img src="{FORUM_LOCKED_IMG}" alt="{L_FORUM_LOCKED}" />&nbsp;Đã khóa</li>
        </ul>
    </div>
    <!-- END switch_legend -->
    <!-- BEGIN disable_viewonline -->
    <section id="fo_stat" class="borderwrap">
        <div class="maintitle clearfix">
            <h2>Tình hình diễn đàn</h2>
            <div class="contract" id="bs0" onclick="toggleCategory2('s0');">
                &nbsp;&nbsp;&nbsp;
            </div>
        </div>
        <div id="s0" class="maincontent">
            <table class="ipbtable">
                <!-- <thead>
                    <tr>
                        <th colspan="2">
                            {GROUP_LEGEND}
                        </th>
                    </tr>
                </thead>
                <tfoot>
                    <tr><td colspan="2"></td></tr>
                </tfoot> -->
                <tbody>
                    <tr>
                        <th colspan="2" class="formsubtitle">
                            <!-- BEGIN switch_viewonline_link -->
                            <a href="{U_VIEWONLINE}" rel="nofollow">Tình trạng truy cập</a>
                            <!-- END switch_viewonline_link -->
                            <!-- BEGIN switch_viewonline_nolink -->
                            Tình trạng truy cập
                            <!-- END switch_viewonline_nolink -->
                        </th>
                    </tr>
                    <tr>
                        <td class="row1">
                            <a href="{U_VIEWONLINE}" rel="nofollow"><img src="{L_ONLINE_IMG}" id="i_whosonline" alt="{L_WHO_IS_ONLINE}" class="img-whois" /></a>
                        </td>
                        <td class="row2">
                            <div class="clearfix">
                                <div class="left">{TOTAL_USERS_ONLINE}</div> <a href="{U_VIEWONLINE}" rel="nofollow" class="viewonline right">{L_VIEW_COMPLETE_LIST}</a></div>
                            <div>{LOGGED_IN_USER_LIST}{L_CONNECTED_MEMBERS}</div>
                        </td>
                    </tr>
                    <!-- BEGIN switch_birthday -->
                    <tr>
                        <th colspan="2" class="formsubtitle">
                            <a href="/calendar" rel="nofollow">Sinh nhật thành viên</a>
                        </th>
                    </tr>
                    <tr>
                        <td class="row1"><img src="{L_BIRTHDAY_IMG}" alt="{L_BIRTHDAY}" /></td>
                        <td class="row2">
                            <p>{L_WHOSBIRTHDAY_TODAY}{L_WHOSBIRTHDAY_WEEK}</p>
                        </td>
                    </tr>
                    <!-- END switch_birthday -->
                    <tr>
                        <th colspan="2" class="formsubtitle">
                            <a href="/calendar" rel="nofollow">Sự kiện sắp diễn ra</a>
                        </th>
                    </tr>
                    <tr>
                        <td class="row1"><img src="{L_CALENDAR_IMG}" alt="{L_CALENDAR}" /></td>
                        <td class="row2">
                                {CALENDAR_EVENTS_5DAYS}
                        </td>
                    </tr>
                    <tr>
                        <th colspan="2" class="formsubtitle">
                            <!-- BEGIN switch_statistics_link -->
                            <a href="{U_STATISTICS}" rel="nofollow">Thống kê diễn đàn</a>
                            <!-- END switch_statistics_link -->
                            <!-- BEGIN switch_statistics_nolink -->
                            Thống kê diễn đàn
                            <!-- END switch_statistics_nolink -->
                        </th>
                    </tr>
                    <tr>
                        <td class="row1"><img src="{L_STATISTICS_IMG}" alt="{L_STATISTICS}" /></td>
                        <td class="row2">
                            <p>{TOTAL_POSTS}</p>
                            <p>{TOTAL_USERS}</p>
                            <p>{NEWEST_USER}</p>
                            <p>{RECORD_USERS}</p>
                        </td>
                    </tr>
                    <!-- BEGIN switch_chatbox_activate -->
                    <tr>
                        <th colspan="2" class="formsubtitle"><a href="#messenger" rel="nofollow">{CHATBOX_NAME}</a></th>
                    </tr>
                    <tr>
                        <td class="row1"><img src="{CHATBOX_IMG}" alt="{CHATBOX_NAME}" /></td>
                        <td class="row2">
                            <p>{TOTAL_CHATTERS_ONLINE}</p>
                            <p>{CHATTERS_LIST}</p>
                        </td>
                    </tr>
                    <!-- END switch_chatbox_activate -->
                </tbody>
            </table>
        </div>
    </section>
    <!-- END disable_viewonline -->
</div>
<!-- BEGIN switch_user_login_form_footer -->
<div class="borderwrap module">
    <form action="{S_LOGIN_ACTION}" method="post" name="form_login">
        <div class="box-content ipbform user_login_form center" style="padding:5px 0;">
            <label><span class="genmed">{L_USERNAME}:</span>
                <input class="" type="text" size="10" name="username" />
            </label> &nbsp;
            <label><span class="genmed">{L_PASSWORD}:</span>
                <input class="" type="password" size="10" name="password" />
            </label> &nbsp;
            <label><span class="gensmall">{L_AUTO_LOGIN}</span>
                <input class="radio" type="checkbox" name="autologin" {AUTOLOGIN_CHECKED} />
            </label> &nbsp; {S_HIDDEN_FIELDS}
            <input class="mainoption" type="submit" name="login" value="{L_LOGIN}" />
            <!-- BEGIN switch_fb_connect -->
            <span class="genmed fb_or">{switch_user_login_form_footer.switch_fb_connect.L_OR}</span>
            <fb:login-button size="large" onlogin="window.location='/facebook_connect.forum'" scope="{switch_user_login_form_footer.switch_fb_connect.L_FB_PERMISSIONS}">{switch_user_login_form_footer.switch_fb_connect.L_FB_LOGIN_BUTTON}</fb:login-button>
            <!-- END switch_fb_connect -->
        </div>
    </form>
</div>
<!-- END switch_user_login_form_footer -->
{AUTO_DST}
<!-- BEGIN switch_fb_index_login -->
<div id="fb-root"></div>
<script>
FB.init({
    appId: {switch_fb_index_login.FACEBOOK_APP_ID},
    cookie: true,
    xfbml: true,
    oauth: true,
    version: 'v2.3'
});

(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {
        return;
    }
    js = d.createElement(s);
    js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
</script>
<!-- END switch_fb_index_login -->
