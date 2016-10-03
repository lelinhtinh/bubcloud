<nav class="breadcrumb">
    <ul id="navstrip" class="clearfix" itemscope itemtype="http://data-vocabulary.org/Breadcrumb">
        <li class="begin"><a href="{U_INDEX}" itemprop="url"><span itemprop="title">{L_INDEX}</span></a></li>
        {NAV_CAT_DESC}
        <li>{L_MEMBERLIST}</li>
    </ul>
</nav>
<!-- BEGIN switch_pagination -->
<nav class="borderwrap pagination">
    {PAGINATION}
</nav>
<!-- END switch_pagination -->
<form action="{S_MODE_ACTION}" method="get" class="ipbform">
    <div class="borderwrap member-list">
        <div class="maintitle">
            <h3>{L_ORDER_OR_SELECT}</h3>
        </div>
        <div class="maincontent">
            <div class="member-filter col-3 clearfix">
                <dl class="search-filter">
                    <dt>{L_USER_SELECT}</dt>
                    <dd>
                        <input type="search" class="inputbox" name="username" maxlength="25" size="20" value="{L_USER_SELECT_VALUE}" />
                    </dd>
                </dl>
                <dl class="search-filter">
                    <dt>{L_SELECT_SORT_METHOD}</dt>
                    <dd>{S_MODE_SELECT}</dd>
                </dl>
                <dl class="search-filter">
                    <dt>{L_ORDER}</dt>
                    <dd>{S_ORDER_SELECT}</dd>
                </dl>
            </div>
        </div>
        <div class="module inner centered">
            {S_HIDDEN_SID}
            <input type="submit" name="submit" value="Tìm kiếm" class="button" />
        </div>
    </div>
</form>
<div class="borderwrap member-list">
    <div class="maintitle">
        <h1>{PAGE_TITLE}</h1>
    </div>
    <div class="maincontent clearfix">
        <!-- BEGIN memberrow -->
        <section class="member clearfix">
            <div class="member-avatar left">{memberrow.AVATAR_IMG}</div>
            <div class="member-status">{memberrow.INTERESTS}</div>
            <div class="member-name">
                <a href="javascript:void(0);" onclick="return togglePopUpMenu('pm{memberrow.ROW_NUMBER}');">
                    <span class="membername">{memberrow.USERNAME}&nbsp;<i class="fa fa-angle-down"></i></span>
                </a>
            </div>
            <div class="member-links">
                {memberrow.PROFILE_IMG}
                &nbsp;{memberrow.PM_IMG}
                <!-- BEGIN switch_user_email -->
                &nbsp;{memberrow.EMAIL_IMG}
                <!-- END switch_user_email -->
                <!-- BEGIN switch_user_website -->
                &nbsp;{memberrow.WWW_IMG}
                <!-- END switch_user_website -->
                &nbsp;{memberrow.USER_POSTS_IMG}
            </div>
            <div class="member-post">{memberrow.POSTS} <small>bài viết</small></div>
            <div id="pm{memberrow.ROW_NUMBER}" class="popupmember clearfix" style="display:none;">
                <div class="member-details details-table">
                    <div class="details-row">
                    <!-- BEGIN switch_td_group -->
                    <div class="stat4r"><span class="label">Nhóm:</span><strong>{memberrow.GROUPS}</strong></div>
                    <!-- END switch_td_group -->
                    <div class="stat4r"><span class="label">Ngày tham gia:</span><strong>{memberrow.JOINED}</strong></div>
                    <div class="stat4r"><span class="label">Truy cập cuối:</span><strong>{memberrow.LASTVISIT}</strong></div>
                    </div>
                </div>
            </div>
        </section>
        <!-- END memberrow -->
        <!-- BEGIN switch_no_user -->
        {switch_no_user.L_NO_USER}
        <!-- END switch_no_user -->
        <div class="clear"></div>
    </div>
</div>
<!-- BEGIN switch_pagination -->
<nav class="borderwrap pagination">
    {PAGINATION}
</nav>
<!-- END switch_pagination -->
