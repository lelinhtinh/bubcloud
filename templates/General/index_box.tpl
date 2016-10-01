<section id="boxWrap">
    <!-- BEGIN catrow -->
    <!-- BEGIN tablehead -->
    <div class="borderwrap">
        <div class="maintitle clearfix">
            {catrow.tablehead.L_FORUM}
            <div class="contract" id="b{catrow.tablehead.ID}" onclick="toggleCategory2('{catrow.tablehead.ID}');">
                &nbsp;&nbsp;&nbsp;
            </div>
        </div>
        <div class="maincontent" id="{catrow.tablehead.ID}">
            <table class="ipbtable index-box">
                <thead>
                    <tr>
                        <th class="statusIcon">&nbsp;</th>
                        <th class="forum">{L_FORUM}</th>
                        <th class="last post-info">{L_LASTPOST}</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- END tablehead -->
                    <!-- BEGIN forumrow -->
                    <tr>
                        <td class="row1 centered">
                            <span class="status">
                                <img title="{catrow.forumrow.L_FORUM_FOLDER_ALT}" src="{catrow.forumrow.FORUM_FOLDER_IMG}" alt="{catrow.forumrow.L_FORUM_FOLDER_ALT}" class="icon" />
                            </span>
                        </td>
                        <td class="row2 icon">
                            <div class="par forum-name">
                                <h{catrow.forumrow.LEVEL} class="hierarchy"><a href="{catrow.forumrow.U_VIEWFORUM}" class="forumtitle">{catrow.forumrow.FORUM_NAME}</a></h{catrow.forumrow.LEVEL}>
                                <p class="forum-desc">{catrow.forumrow.FORUM_DESC}</p>
                            </div>
                            <!-- BEGIN switch_moderators_links -->
                            <div class="mods">
                                {catrow.forumrow.switch_moderators_links.L_MODERATOR}{catrow.forumrow.switch_moderators_links.MODERATORS}
                            </div>
                            <!-- END switch_moderators_links -->
                            <p>
                                <span class="topic4r stat4r">Chủ đề:&nbsp;
                                    <strong>{catrow.forumrow.TOPICS}</strong>
                                </span>
                                <span class="post4r stat4r">Bài viết:&nbsp;
                                    <strong>{catrow.forumrow.POSTS}</strong>
                                </span>
                                <span class="sub4r stat4r">{catrow.forumrow.LINKS}</span>
                            </p>
                        </td>
                        <td class="row1">
                            <!-- BEGIN avatar -->
                            <span class="lastpost-avatar">{catrow.forumrow.avatar.LAST_POST_AVATAR}</span>
                            <!-- END avatar -->
                            <span class="stat4r">
                                <!-- BEGIN switch_topic_title -->
                                <a href="{catrow.forumrow.U_LATEST_TOPIC}" title="{catrow.forumrow.LATEST_TOPIC_TITLE}">{catrow.forumrow.LATEST_TOPIC_NAME}</a><br />
                                <!-- END switch_topic_title -->
                                {catrow.forumrow.USER_LAST_POST}
                            </span>
                        </td>
                    </tr>
                    <!-- END forumrow -->
                    <!-- BEGIN tablefoot -->
                </tbody>
            </table>
        </div>
    </div>
    <!-- END tablefoot -->
    <!-- END catrow -->
</section>
<script type="text/javascript">
//<![CDATA[
$(".sub4r.stat4r").each(function() {
    var sub = $(this);
    if (!sub.is(":empty")) {
        sub.contents().filter(function() {
            return this.nodeType === 3;
        }).remove().end().filter("a").wrap("<li></li>");
        sub.wrapInner('<ul class="subLink"></ul>').prepend("Diễn đàn con: <strong>" + sub.find("a").length + "</strong>");
    }
});
$(".status > img").attr("src", function() {
    var $descIcon = $(this).closest("td").next().find('.forum-desc > img[alt^="http://"][style="float:left"]');
    $descIcon.remove();
    return $descIcon.attr("src");
});
(function() {
    $(".forumtitle", "#boardIndex").after(function() {
        var a = this.href.match(/\/f(\d+)-/)[1];
        $(this).closest("tr").attr({
            "data-id": a,
            "class": "childForum zzBox_" + a
        });
        return '&nbsp;&nbsp;<i data-id="' + a + '" class="zzFavourite zzLove_' + a + ' fa fa-heart fa-1"></i>'
    });
    $("#boxWrap", "#boardIndex").prepend('<div id="favouriteBox" class="borderwrap hide"><div class="maintitle clearfix"><h2>\u01afa th\u00edch</h2><div class="contract" id="bfv" onclick="toggleCategory(\'fv\');">&nbsp;&nbsp;&nbsp;</div></div><div class="maincontent" id="fv"><table cellpadding="0" cellspacing="0" class="ipbtable index-box"><thead><tr><th class="statusIcon">&nbsp;</th><th class="forum">Di\u1ec5n \u0110\u00e0n</th><th class="last post-info">B\u00e0i g\u1eedi sau c\u00f9ng</th></tr></thead><tbody></tbody></table></div></div>').on("click",
        ".zzFavourite",
        function() {
            var a = $(this),
                b = a.data("id"),
                b = $(".zzBox_" + b);
            a.closest("#favouriteBox").length ? (b.last().show().closest(".borderwrap").show(), b.first().remove(), $(".childForum", "#favouriteBox").length || $("#favouriteBox").hide()) : ($("#favouriteBox:hidden").show(), $("tbody", "#favouriteBox").append(b.clone()), b.hide(), a = a.closest(".borderwrap"), a.find(".childForum:visible").length || a.hide());
            var c = [];
            $(".zzFavourite", "#favouriteBox").each(function() {
                c.push($(this).data("id"))
            });
            my_setcookie("zzFavourite",
                c.join("|"), !0)
        });
    var c = my_getcookie("zzFavourite");
    c && $.each(c.split("|"), function(a, b) {
        $(".zzLove_" + b).click()
    })
})();
//]]>
</script>
<!-- BEGIN switch_on_index -->
<div class="quickStat clearfix">
    <div class="linklist statlinks left">
        <ul>
            <li><a href="{U_TODAY_ACTIVE}"><i class="fa fa-user"></i> Bài đăng trong ngày</a></li>
            <li class="last"><a href="{U_OVERALL_POSTERS}"><i class="fa fa-bar-chart-o"></i> Thành viên tích cực</a></li>
        </ul>
    </div>
    <div class="toplinks linklist right">
        <ul>
            <!-- BEGIN switch_delete_cookies -->
            <li><a href="{switch_on_index.switch_delete_cookies.U_DELETE_COOKIES}">Xóa toàn bộ cookie <i class="fa fa-trash"></i></a></li>
            <!-- END switch_delete_cookies -->
            <!-- BEGIN switch_user_logged_in -->
            <li class="last"><a href="{U_MARK_READ}">Đánh dấu là đã đọc <i class="fa fa-calendar-check-o"></i></a></li>
            <!-- END switch_user_logged_in -->
        </ul>
    </div>
</div>
<!-- END switch_on_index -->
