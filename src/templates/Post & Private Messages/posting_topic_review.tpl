<div class="borderwrap postreview">
    <!-- BEGIN switch_inline_mode -->
    <div class="maintitle">
        <h3>{L_TOPIC_REVIEW}</h3>
    </div>
    <!-- END switch_inline_mode -->
    <div class="maincontent">
        <!-- BEGIN postrow -->
        <!-- BEGIN displayed -->
        <section class="post">
            <a name="{postrow.displayed.POST_ID}"></a>
            <div class="post-container">
                <div class="postbody">
                    <div class="review-details clearfix">
                        <div class="author-review member-avatar">
                            {postrow.displayed.POSTER_AVATAR}
                        </div>
                        <div class="user-review">
                            <small><i class="fa fa-user"></i>&nbsp;{postrow.displayed.POSTER_NAME}</small>
                        </div>
                        <div class="date-review">
                            <small><i class="fa fa-clock-o"></i>&nbsp;{postrow.displayed.POST_DATE}</small>
                        </div>
                    </div>
                    <div class="post-entry">
                        <div class="entry-content">
                            {postrow.displayed.MESSAGE}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- END displayed -->
        <!-- BEGIN hidden -->
        <div class="main-content topic">
            <p class="p-hidden">{postrow.hidden.MESSAGE}</p>
        </div>
        <!-- END hidden -->
        <!-- END postrow -->
    </div>
</div>
