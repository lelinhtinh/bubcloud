<script src="{JS_DIR}extendedview.js" type="text/javascript"></script>
<nav class="breadcrumb">
    <ul id="navstrip" class="clearfix">
        <li class="begin"><a href="{U_INDEX}"><span>{L_INDEX}</span></a></li>
        {NAV_CAT_DESC}
        <li>{L_SEARCH_TITLE}</li>
    </ul>
</nav>
<nav class="borderwrap pagination">
    {PAGINATION}
</nav>
<section class="borderwrap">
    <div class="maintitle"><h1>{L_SEARCH_MATCHES}</h1></div>
    <div class="maincontent">
        <!-- BEGIN searchresults -->
        <div class="post search-results-posts">
            <div class="post-container">
                <div class="postbody">
                    <div class="module inner">
                        <p><big><a class="postdetails" href="{searchresults.U_TOPIC}">{searchresults.TOPIC_TITLE}</a></big></p>
                        <p><span class="stat4r">Diễn đàn:&nbsp;<a class="postdetails catLink" href="{searchresults.U_FORUM}"><strong>{searchresults.FORUM_NAME}</strong></a></span><span class="stat4r">Trả lời:&nbsp;<strong class="repNumber">{searchresults.TOPIC_REPLIES}</strong></span><span class="stat4r">Lượt xem:&nbsp;<strong class="viewNumber">{searchresults.TOPIC_VIEWS}</strong></span></p>
                    </div>
                    <div class="review-details clearfix">
                        <div class="author-review member-avatar">
                            {searchresults.POSTER_AVATAR}
                        </div>
                        <div class="user-review">
                            <small><i class="fa fa-user" aria-hidden="true"></i>&nbsp;{searchresults.POSTER_NAME}</small>
                        </div>
                        <div class="date-review">
                            <small><i class="fa fa-clock-o" aria-hidden="true"></i>&nbsp;{searchresults.POST_DATE}</small>
                        </div>
                    </div>
                    <div class="post-entry">
                        <div class="entry-content">
                            <p>{searchresults.MESSAGE}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- END searchresults -->
    </div>
</section>
<nav class="borderwrap pagination">
    {PAGINATION}
</nav>
<br />
<p class="right"><a href="#top">{L_BACK_TO_TOP}</a></p>
<script type="text/javascript">
//<![CDATA[
(function(a) {
    a('strong:contains("Tags: ")').hide().prev("br, hr").hide().prev("hr").hide();
    a('a[title^="See all tagged subjects with:"]', ".post-entry").replaceWith(function() {
        return a("<a>", {
            href: this.href,
            "class": "tags",
            text: this.textContent.replace("#", "").replace(/-/g, " ")
        })
    });
    a(".post-entry").each(function() {
        a(this).find(".tags").wrapAll('<div class="tagsGroup"></div>')
    })
})(jQuery);
//]]>
</script>
<!-- BEGIN switch_image_resize -->
<script type="text/javascript">
//<![CDATA[
$(resize_images({
    'selector': '.post-entry .entry-content',
    'max_width': {switch_image_resize.IMG_RESIZE_WIDTH},
    'max_height': {switch_image_resize.IMG_RESIZE_HEIGHT}
}));
//]]>
</script>
<!-- END switch_image_resize -->
