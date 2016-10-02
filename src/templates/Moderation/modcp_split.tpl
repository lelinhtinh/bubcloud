<nav class="breadcrumb">
    <ul id="navstrip" class="clearfix" itemscope itemtype="http://data-vocabulary.org/Breadcrumb">
        <li class="begin"><a href="{U_INDEX}" itemprop="url"><span itemprop="title">{L_INDEX}</span></a></li>
        <!--li><a href="{U_ALBUM}">{L_ALBUM}</a></li-->
        <li><strong>{L_SPLIT_TOPIC}</strong></li>
    </ul>
</nav>
<form action="{S_SPLIT_ACTION}" method="post" class="ipbform2">
    <div class="borderwrap">
        <div class="maintitle">
            <h3>{L_SPLIT_TOPIC}</h3>
        </div>
        <div class="box-content">
            <p class="subtitle">{L_SPLIT_TOPIC_EXPLAIN}</p>
            <fieldset>
                <dl>
                    <dt>
                        <label>{L_SPLIT_SUBJECT}</label>
                    </dt>
                    <dd>
                        <input class="inputbox" type="text" name="subject" maxlength="{MAX_TOPIC_LENGTH}" size="60" />
                    </dd>
                </dl>
                <dl>
                    <dt>
                        <label>{L_SPLIT_FORUM}</label>
                    </dt>
                    <dd>{S_FORUM_SELECT}</dd>
                </dl>
            </fieldset>
            <div class="formbuttonrow center">
                <input type="submit" name="split_type_all" value="{L_SPLIT_POSTS}" class="button" />&nbsp;
                <input type="submit" name="split_type_beyond" value="{L_SPLIT_AFTER}" class="button" />
            </div>
        </div>
    </div>
    <div class="borderwrap postreview">
        <div class="maintitle">
            <h3>{L_SPLIT_TOPIC}</h3>
        </div>
        <div class="maincontent">
            <!-- BEGIN postrow -->
            <section class="post">
                <div class="post-container">
                    <div class="postbody">
                        <div class="review-details clearfix">
                            <div class="author-review member-avatar">
                                {postrow.displayed.POSTER_AVATAR}
                            </div>
                            <div class="user-review">
                                <small>
                                    <i class="fa fa-user"></i>&nbsp;{postrow.POSTER_NAME}
                                    <label class="right">{postrow.POST_SUBJECT}&nbsp;{postrow.S_SPLIT_CHECKBOX}</label>
                                </small>
                            </div>
                            <div class="date-review">
                                <small><i class="fa fa-clock-o"></i>&nbsp;{postrow.POST_DATE}</small>
                            </div>
                        </div>
                        <div class="post-entry">
                            <div class="entry-content">
                                {postrow.MESSAGE}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- END postrow -->
        </div>
        <div class="module inner center">
            <input type="submit" name="split_type_all" value="{L_SPLIT_POSTS}" class="button" />&nbsp;
            <input type="submit" name="split_type_beyond" value="{L_SPLIT_AFTER}" class="button" /> {S_HIDDEN_FIELDS}
        </div>
    </div>
</form>
