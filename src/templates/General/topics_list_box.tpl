<!-- BEGIN topics_list_box -->
<!-- BEGIN row -->
<!-- BEGIN header_table -->
<!-- BEGIN multi_selection -->
<script type="text/javascript">
//<![CDATA[
function check_uncheck_main_{topics_list_box.row.header_table.BOX_ID}() {
    var all_checked = true;
    for (i = 0; (i < document.{topics_list_box.FORMNAME}.elements.length) && all_checked; i++) {
        if (document.{topics_list_box.FORMNAME}.elements[i].name == '{topics_list_box.FIELDNAME}[]{topics_list_box.row.header_table.BOX_ID}') {
            all_checked = document.{topics_list_box.FORMNAME}.elements[i].checked;
        }
    }
    document.{topics_list_box.FORMNAME}.all_mark_{topics_list_box.row.header_table.BOX_ID}.checked = all_checked;
}

function check_uncheck_all_{topics_list_box.row.header_table.BOX_ID}() {
    for (i = 0; i < document.{topics_list_box.FORMNAME}.length; i++) {
        if (document.{topics_list_box.FORMNAME}.elements[i].name == '{topics_list_box.FIELDNAME}[]{topics_list_box.row.header_table.BOX_ID}') {
            document.{topics_list_box.FORMNAME}.elements[i].checked = document.{topics_list_box.FORMNAME}.all_mark_{topics_list_box.row.header_table.BOX_ID}.checked;
        }
    }
}
//]]>
</script>
<!-- END multi_selection -->
<div class="maintitle floated dropped">
    <h1>{FORUM_NAME}</h1>
    <!-- BEGIN switch_forum_options -->
    <div id="forummenu-options" class="popmenubutton">
        <a href="javascript:void(0);" onclick="togglePopUpMenu('forummenu-options_menu');"><i class="fa fa-ellipsis-h" aria-hidden="true"></i></a>
    </div>
    <ul id="forummenu-options_menu" class="popupmenu hide">
        <li class="popupmenu-category">
            {L_FORUM_OPTIONS}
        </li>
        <li class="popupmenu-item">
            <a href="{U_MARK_READ}">{L_MARK_TOPICS_READ}</a>
        </li>
        <li class="popupmenu-item last">
            {S_WATCH_FORUM}
        </li>
    </ul>
    <!-- END switch_forum_options -->
</div>
<div class="maincontent">
    <table cellspacing="0" cellpadding="0" class="ipbtable topic-list-box">
        <thead>
            <tr>
                <th class="icon"></th>
                <th class="forum2">{topics_list_box.row.L_TITLE}</th>
                <th class="last last-post2">{topics_list_box.row.L_LASTPOST}</th>
                <!-- BEGIN multi_selection -->
                <th>
                    <input onclick="check_uncheck_all_{topics_list_box.row.header_table.BOX_ID}();" type="checkbox" name="all_mark_{topics_list_box.row.header_table.BOX_ID}" value="0" />
                </th>
                <!-- END multi_selection -->
            </tr>
        </thead>
        <tbody>
            <!-- END header_table -->
            <!-- BEGIN header_row -->
            <strong>{topics_list_box.row.L_TITLE}</strong>
            <!-- END header_row -->
            <!-- BEGIN topic -->
            <!-- BEGIN table_sticky -->
        </tbody>
    </table>
</div>
<div class="maintitle">
    <h2>{topics_list_box.row.topic.table_sticky.L_TITLE}</h2>
</div>
<div class="maincontent">
    <table cellspacing="0" cellpadding="0" class="ipbtable topic-list-box">
        <thead>
            <tr>
                <th class="icon"></th>
                <th class="forum2">{topics_list_box.row.topic.table_sticky.L_TITLE}</th>
                <th class="last last-post2">{topics_list_box.row.topic.table_sticky.L_LASTPOST}</th>
                <!-- BEGIN multi_selection -->
                <th class="checkbox">
                    <input onclick="check_uncheck_all_{topics_list_box.row.header_table.BOX_ID}();" type="checkbox" name="all_mark_{topics_list_box.row.header_table.BOX_ID}" value="0" />
                </th>
                <!-- END multi_selection -->
            </tr>
        </thead>
        <tbody>
            <!-- END table_sticky -->
            <tr>
                <td class="row2 centered <!-- BEGIN line_sticky --> sticky-separator <!-- END line_sticky -->">
                    <p class="topic-desc">
                        <!-- BEGIN switch_description -->{topics_list_box.row.topic.switch_description.TOPIC_DESCRIPTION}
                        <!-- END switch_description -->
                    </p>
                </td>
                <td class="row2 topic-title <!-- BEGIN line_sticky --> sticky-separator <!-- END line_sticky -->" data-type="{topics_list_box.row.TOPIC_TYPE}">
                    <img title="{topics_list_box.row.L_TOPIC_FOLDER_ALT}" src="{topics_list_box.row.TOPIC_FOLDER_IMG}" alt="{topics_list_box.row.L_TOPIC_FOLDER_ALT}" />&nbsp;
                    <!-- BEGIN single_selection -->
                    <input type="radio" name="{topics_list_box.FIELDNAME}" value="{topics_list_box.row.FID}" {topics_list_box.row.L_SELECT} />&nbsp;
                    <!-- END single_selection -->
                    <a class="topictitle" href="{topics_list_box.row.U_VIEW_TOPIC}">{topics_list_box.row.TOPIC_TITLE}</a>&nbsp;{topics_list_box.row.GOTO_PAGE_NEW}
                    <p>
                        {topics_list_box.row.ICON}&nbsp;
                        <span class="topic4r stat4r">Tác giả:&nbsp;
                            {topics_list_box.row.TOPIC_AUTHOR}
                        </span>
                        <span class="topic4r stat4r">Gửi lúc:&nbsp;
                            <strong>{topics_list_box.row.FIRST_POST_TIME}</strong>
                        </span>
                        <span class="post4r stat4r">Trả lời:&nbsp;
                            <strong>{topics_list_box.row.REPLIES}</strong>
                        </span>
                        <span class="post4r stat4r">Lượt xem:&nbsp;
                            <strong>{topics_list_box.row.VIEWS}</strong>
                        </span>
                    </p>
                </td>
                <td class="row1 lastaction <!-- BEGIN line_sticky --> sticky-separator <!-- END line_sticky -->">
                    <!-- BEGIN avatar -->
                    <span class="lastpost-avatar">{topics_list_box.row.topic.avatar.LAST_POST_AVATAR}</span>
                    <!-- END avatar -->
                    <span class="stat4r">
                        {topics_list_box.row.LAST_POST_TIME}<br />
                        {topics_list_box.row.LAST_POST_AUTHOR}&nbsp;{topics_list_box.row.LAST_POST_IMG}
                    </span>
                </td>
                <!-- BEGIN multi_selection -->
                <td class="row2 centered <!-- BEGIN line_sticky --> sticky-separator <!-- END line_sticky -->">
                    <input type="checkbox" name="{topics_list_box.FIELDNAME}" value="{topics_list_box.row.FID}" {topics_list_box.row.L_SELECT} />
                </td>
                <!-- END multi_selection -->
            </tr>
            <!-- END topic -->
            <!-- BEGIN no_topics -->
            <tr>
                <td class="row1 centered" colspan="5"><strong>{topics_list_box.row.L_NO_TOPICS}</strong></td>
            </tr>
            <!-- END no_topics -->
            <!-- BEGIN bottom -->
        </tbody>
    </table>
</div>
<!-- BEGIN search -->
<div class="module inner">
    <div class="search-footer-box">
        <form method="get" id="forum-search" action="{S_SEARCHBOX_ACTION}">
            <fieldset>
                <input type="search" name="search_keywords" id="search_keywords" size="20" value="" placeholder="Tìm trong mục này" /> &nbsp;
                <input class="button fa" type="submit" value="" />
                <input type="hidden" value="{SEARCH_WHERE}" name="search_where" />
            </fieldset>
        </form>
    </div>
</div>
<!-- END search -->
<!-- END bottom -->
<!-- END row -->
<!-- END topics_list_box -->
<script type="text/javascript">
//<![CDATA[
(function() {
    function topicthumbnail(se, imgUrl) {
        $(se).replaceWith('<div style="background-image:url(' + imgUrl + ');" class="topicthumbnail"></div>');
    }
    $('.topic-desc').each(function() {
        var _this = this,
            textSrc = $(this).text(),
            dfUrl = 'http://i78.servimg.com/u/f78/17/70/81/78/inet-n10.jpg';
        if (!/^https?:\/\/(?:[\w\-]+\.)+\w{2,6}(?:\/[^\/#?]+)+\.(?:jpg|gif|png|jpeg)$/i.test(textSrc)) {
            topicthumbnail(_this, dfUrl);
            return;
        }
        $('<img>', {
            src: textSrc
        }).load(function() {
            topicthumbnail(_this, textSrc);
        }).error(function() {
            topicthumbnail(_this, dfUrl);
        });
    });
}(jQuery));
//]]>
</script>
