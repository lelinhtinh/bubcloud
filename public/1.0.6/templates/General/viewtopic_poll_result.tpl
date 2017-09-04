<!-- zzPoll by Zzbaivong - devs.forumvi.com -->
<section class="borderwrap">
    <div id="poll_result" class="zzPoll">
        <div class="maintitle clearfix">
            <h3>
                {CLOSE_POLL}{POLL_QUESTION}
                <span id="totalvote" class="right">
                    [ <strong>{TOTAL_VOTES}</strong> phiếu ]
                </span>
            </h3>
        </div>
        <div class="maincontent">
            <ul>
                <!-- BEGIN poll_option -->
                <li class="floated clearfix">
                    <div class="poll-title left" title="{poll_option.POLL_OPTION_CAPTION}">{poll_option.POLL_OPTION_CAPTION}</div>
                    <div class="poll-bar left">
                        <div class="poll-width floated" data-width="{poll_option.POLL_OPTION_PERCENT}"><span class="poll_percent">{poll_option.POLL_OPTION_PERCENT}</span></div>
                    </div>
                    <div class="poll_result left text-right">{poll_option.POLL_OPTION_RESULT}</div>
                </li>
                <!-- END poll_option -->
            </ul>
        </div>
        <div class="frm-buttons module inner centered">
            <!-- BEGIN switch_hide_result -->
            {L_POLL_HIDE_RESULT}&nbsp;&nbsp;
            <!-- END switch_hide_result -->
            <!-- BEGIN cancel_vote -->
            <a id="cancelvote" class="btn" href="{U_CANCEL_VOTE}"><i class="fa fa-ban" aria-hidden="true"></i> Bỏ bầu chọn</a>
            <!-- END cancel_vote -->
            <!-- BEGIN switch_user_logged_out -->
            <p class="desc">{L_NOT_CONNECTED} {L_LOGIN_REGISTER}</p>
            <!-- END switch_user_logged_out -->
        </div>
    </div>
</section>

<script type="text/javascript">
//<![CDATA[
(function($) {
    "use strict";

    $(".poll-width").not('[data-width="0%"]').css("width", function() {
        return $(this).data("width");
    });

})(jQuery);
//]]>
</script>
