<nav class="breadcrumb">
    <ul id="navstrip" class="clearfix" itemscope itemtype="http://data-vocabulary.org/Breadcrumb">
        <li class="begin"><a href="{U_INDEX}" itemprop="url"><span itemprop="title">{L_INDEX}</span></a></li>
        {NAV_CAT_DESC}
        <li>{L_SEARCH_TITLE}</li>
    </ul>
</nav>
{ERROR_MESSAGE}
<nav class="borderwrap pagination clearfix">
    {PAGINATION}
</nav>
<section class="borderwrap">
    <div class="maintitle"><h1>{L_SEARCH_MATCHES}</h1></div>
    <div class="maincontent">
        <form action="{S_ACTION}" method="post" name="post" onsubmit="return verify_select();" class="ipbform">
            <table cellpadding="0" cellspacing="0" class="ipbtable topic-list-box search-results-topics">
                <thead>
                    <tr>
                        <th class="topic-title">{L_TOPICS}</th>
                        <th class="last post-search">{L_LASTPOST}</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- BEGIN searchresults -->
                    <tr>
                        <!-- <td class="row2 centered">
                            <div style="background-image:url(https://i78.servimg.com/u/f78/17/70/81/78/inet-n10.jpg);" class="topicthumbnail"></div>
                        </td> -->
                        <td class="row2 topic-title">
                            <img src="{searchresults.TOPIC_FOLDER_IMG}" alt="{searchresults.L_TOPIC_FOLDER_ALT}" title="{searchresults.L_TOPIC_FOLDER_ALT}" />&nbsp;
                            <a class="topictitle" href="{searchresults.U_VIEW_TOPIC}">{searchresults.TOPIC_TITLE}</a>&nbsp;
                            <strong class="pagination">{searchresults.GOTO_PAGE}</strong>&nbsp;
                            <p>{searchresults.TOPIC_ICON}&nbsp;
                                <span class="topic4r stat4r">Tác giả:&nbsp;
                                    {searchresults.TOPIC_AUTHOR}
                                </span>
                                <span class="post4r stat4r">Gửi lúc:&nbsp;
                                    <strong>{searchresults.FIRST_POST_TIME}</strong>
                                </span>
                                <span class="post4r stat4r">Trả lời:&nbsp;
                                    <strong>{searchresults.REPLIES}</strong>
                                </span>
                                <span class="post4r stat4r">Lượt xem:&nbsp;
                                    <strong>{searchresults.VIEWS}</strong>
                                </span>
                                <span class="post4r stat4r">Chuyên mục:&nbsp;
                                    <strong><a href="{searchresults.U_VIEW_FORUM}">{searchresults.FORUM_NAME}</a></strong>
                                </span>
                            </p>
                        </td>
                        <td class="row1 lastaction">
                            <!-- <span class="lastpost-avatar"><img src="https://r38.imgfast.net/users/3815/19/59/01/avatars/gallery/noavat10.jpg" alt="avatar"></span> -->
                            <span class="stat4r">
                                {searchresults.LAST_POST_TIME}
                                <br />
                                {searchresults.LAST_POST_AUTHOR} {searchresults.LAST_POST_IMG}
                            </span>
                        </td>
                    </tr>
                    <!-- END searchresults -->
                </tbody>
            </table>
        </form>
    </div>
    <!-- BEGIN switch_active_topics -->
    <div class="module inner clearfix">
        <div class="mod-forum-toolbox">
            <form method="get" action="{S_FORM_ACTIVE_ACTION}">
                <fieldset class="quickmod">
                    <input type="hidden" name="search_id" value="activetopics" />
                    <label>{L_OTHER_ACTIVE_TOPICS}:&nbsp;</label>
                    <select name="active_time">
                        <option value="today">{L_TODAY_DAY}</option>
                        <option value="week">{L_THIS_WEEK}</option>
                        <option value="2_weeks">{L_2_PAST_WEEKS}</option>
                        <option value="month">{L_THIS_MONTH}</option>
                        <option value="3_months">{L_3_PAST_MONTHS}</option>
                        <option value="year">{L_THIS_YEAR}</option>
                    </select>
                    &nbsp;
                    <input class="button" type="submit" value="{L_GO}" />
                </fieldset>
            </form>
        </div>
    </div>
    <!-- END switch_active_topics -->
</section>
<nav class="borderwrap pagination">
    {PAGINATION}
</nav>
