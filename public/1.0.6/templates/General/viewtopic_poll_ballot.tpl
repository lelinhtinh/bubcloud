<!-- zzPoll by Zzbaivong - devs.forumvi.com -->
<section id="zzPoll" class="borderwrap">
    <form id="poll_ballot" class="zzPoll" method="post" action="{S_POLL_ACTION}">
        <div class="maintitle clearfix">
            <h3>
                {CLOSE_POLL}{POLL_QUESTION}
                <span id="totalvote" class="right"></span>
            </h3>
        </div>
        <div class="maincontent">
            <ul>
                <!-- BEGIN poll_option -->
                <li class="floated clearfix">
                    <div class="poll-option">
                        <input class="poll-vote" id="poll{poll_option.POLL_OPTION_ID}" type="{poll_option.POLL_TYPE_BUTTON}" name="vote_id[]" value="{poll_option.POLL_OPTION_ID}" />
                        <label class="poll-label" for="poll{poll_option.POLL_OPTION_ID}">
                            <i class="fa fa-square fa-fw" aria-hidden="true"></i>&nbsp; {poll_option.POLL_OPTION_CAPTION}
                        </label>
                    </div>
                </li>
                <!-- END poll_option -->
            </ul>
        </div>
        <div class="frm-buttons module inner centered">
            {S_HIDDEN_FIELDS}
            <button type="submit" name="submit" class="noIcon"><i class="fa fa-bar-chart-o" aria-hidden="true"></i> Bầu chọn</button>&nbsp;&nbsp;
            <a href="{U_VIEW_RESULTS}" class="btn" id="viewvote"><i class="fa fa-eye" aria-hidden="true"></i> Xem kết quả</a>
        </div>
    </form>
</section>
<script type="text/javascript">
//<![CDATA[
(function($) {
    "use strict";

    function disActions() {
        if(disable) return;
        disable = true;

        $totalvote.html('<i class="fa fa-spinner fa-pulse" aria-hidden="true"></i>');
        $ballot.addClass("poll-wailt");
    }

    function enActions() {
        $totalvote.empty();
        $ballot.removeClass("poll-wailt");
        disable = false;
    }

    function showResult(data) {
        data = data.replace(/<img\b[^>]*>/ig, "");
        $result = $(data).find("#poll_result");
        $result.add($ballot).hide();
        $poll.append($result);
        $result.fadeIn();
        $result.find(".poll-width").not('[data-width="0%"]').css("width", function() {
            return $(this).data("width");
        });

        enActions();
    }

    function showBallot() {
        $result.remove();
        $ballot.fadeIn();
    }

    var $poll = $("#zzPoll"),
    $ballot = $("#poll_ballot"),
    $result,
    $viewvote = $("#viewvote"),
    $totalvote = $("#totalvote"),
    disable = false;

    $viewvote.on("click", function(e) {
        e.preventDefault();
        disActions();

        $.get(this.href).done(function(data) {
            history.replaceState(null, null, "?vote=viewresult");
            showResult(data);
            $result.append('<div class="frm-buttons module inner centered"><a href="javascript:;" class="btn" id="backvote"><i class="fa fa-chevron-left" aria-hidden="true"></i> Quay lại</a></div>');
        });
    });

    $ballot.on("submit", function(e) {
        e.preventDefault();

        if($(".poll-vote:checked").length === 0) return;
        disActions();

        $.post($ballot.attr("action"), $ballot.serializeArray()).done(function() {
            $.get(location.pathname).done(function(data) {
            showResult(data);
            });
        });
    });

    $poll.on("click", "#backvote", function(e) {
        e.preventDefault();
        history.replaceState(null, null, location.pathname);

        showBallot();

    }).on("click", "#cancelvote", function(e) {
        e.preventDefault();
        disActions();

        showBallot();

        $ballot.trigger("reset");
        $.post(this.href).done(function() {
            enActions();
        });
    });

})(jQuery);
//]]>
</script>
