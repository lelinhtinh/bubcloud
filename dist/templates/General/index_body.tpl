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
                <iframe src="/chatbox/index.forum" id="frame_chatbox" scrolling="auto" frameborder="0" height="100%" width="100%" allowfullscreen></iframe>
            </div>
            <div onmousedown="resizeElement(event, 'chatbox_top');" class="resize">
                <i class="fa fa-sort" aria-hidden="true"></i>
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
<script src="//cdn.rawgit.com/baivong/bubcloud/master/public/1.0.5/bubcloud.index.js" type="text/javascript"></script>
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
