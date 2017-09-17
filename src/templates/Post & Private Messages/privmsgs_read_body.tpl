<nav class="breadcrumb">
    <ul id="navstrip" class="clearfix">
        <li class="begin"><a href="{U_INDEX}"><span>{L_INDEX}</span></a></li>
        <!-- li><strong>{NAV_CAT_DESC}</strong></li -->
        <li><strong>{L_PM}</strong></li>
    </ul>
</nav>
<nav class="privmsg-nav borderwrap">
    <ul class="privmsg-menu clearfix">
        <li>
            <div class="tabitem">{INBOX}</div>
        </li>
        <li>
            <div class="tabitem">{SENTBOX}</div>
        </li>
        <li>
            <div class="tabitem">{OUTBOX}</div>
        </li>
        <li>
            <div class="tabitem">{SAVEBOX}</div>
        </li>
    </ul>
</nav>
<div class="borderwrap clearfix">
    <!-- BEGIN switch_post_reply -->
    <div class="posting-options topic-options privmsg-options right">
        {REPLY_PM_IMG}
    </div>
    <!-- END switch_post_reply -->
</div>
<form action="{S_PRIVMSGS_ACTION}" method="post" class="ipbform">
    <article class="borderwrap" style="clear:both;">
        <div class="maintitle">
            <h3>{BOX_NAME} :: {L_MESSAGE}</h3>
        </div>
        <div class="box-content topic">
            <section class="post">
                <div class="postprofile privmsgprofile">
                    <div class="postdetails clearfix">
                        <div class="author-avatar member-avatar online left">
                            {AVATAR_FROM}
                        </div>
                        <div class="author-details">
                            <div class="author-name">{MESSAGE_FROM}</div>
                            <!-- BEGIN switch_user_contact -->
                            <div class="author-links">
                                {PROFILE_IMG}
                                {PM_IMG}
                                {EMAIL_IMG}
                                {WWW_IMG}
                                {AIM_IMG}
                                {YIM_IMG}
                                {MSN_IMG}
                                {SKYPE_IMG}
                            </div>
                            <!-- END switch_user_contact -->
                        </div>
                    </div>
                    <div class="post-header clearfix">
                        <span class="post-subject">
                            {POST_SUBJECT}
                        </span>
                        <span class="post-date right">
                            <i class="fa fa-clock-o" aria-hidden="true"></i>&nbsp;{POST_DATE}
                        </span>
                    </div>
                    <div class="post-entry">
                        <div class="post-contents">{MESSAGE}</div>
                    </div>
                </div>
                <div class="post-footer privmsg-footer clearfix">
                    <div class="post-action right">
                        <!-- BEGIN switch_quote -->
                        {QUOTE_PM_IMG}&nbsp;
                        <!-- END switch_quote -->
                        {EDIT_PM_IMG}
                    </div>
                </div>
            </section>
        </div>
        <div class="module inner center">
            {S_HIDDEN_FIELDS}
            <!-- BEGIN switch_save -->
            <input type="submit" name="save" value="{L_SAVE_MSG}" class="button" />&nbsp;&nbsp;
            <!-- END switch_save -->
            <!-- BEGIN switch_move_profile -->
            <input type="submit" name="moveprofile" value="{L_MOVE_PROFILE}" class="button" />&nbsp;&nbsp;
            <!-- END switch_move_profile -->
            <input type="submit" name="delete" value="{L_DELETE_MSG}" class="button" />
        </div>
    </article>
</form>
<div class="borderwrap clearfix">
    <!-- BEGIN switch_post_reply -->
    <div class="posting-options topic-options privmsg-options right">
        {REPLY_PM_IMG}
    </div>
    <!-- END switch_post_reply -->
</div>
<!-- BEGIN switch_review_box -->
{TOPIC_REVIEW_BOX}
<!-- END switch_review_box -->
<!-- BEGIN switch_image_resize -->
<script type="text/javascript">
//<![CDATA[
$(resize_images({
    'selector': '.postbody .post-entry',
    'max_width': {switch_image_resize.IMG_RESIZE_WIDTH},
    'max_height': {switch_image_resize.IMG_RESIZE_HEIGHT}
}));
//]]>
</script>
<!-- END switch_image_resize -->
