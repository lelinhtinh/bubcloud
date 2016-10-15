<nav class="breadcrumb">
    <ul id="navstrip" class="clearfix" itemscope itemtype="http://data-vocabulary.org/Breadcrumb">
        <li class="begin"><a href="{U_INDEX}" itemprop="url"><span itemprop="title">{L_INDEX}</span></a></li>
        {NAV_CAT_DESC}
    </ul>
</nav>

<div class="borderwrap clearfix">
    <nav class="pagination topic-options">
        {PAGINATION}
    </nav>

    <div class="posting-options right topic-options">
        <!-- BEGIN switch_user_authpost -->
        <a class="btn large" href="{U_POST_NEW_TOPIC}" accesskey="n" rel="nofollow"><i class="fa fa-plus fa-lg" aria-hidden="true"></i><span>Gửi bài mới</span></a>
        <!-- END switch_user_authpost -->
    </div>
</div>

<section class="borderwrap">
    {TOPICS_LIST_BOX}
</section>

<div class="borderwrap clearfix">
    <nav class="pagination left topic-options">
        {PAGINATION}
    </nav>

    <div class="posting-options right topic-options">
        <!-- BEGIN switch_user_authpost -->
        <a class="btn large" href="{U_POST_NEW_TOPIC}" accesskey="n" rel="nofollow"><i class="fa fa-plus fa-lg" aria-hidden="true"></i><span>Gửi bài mới</span></a>
        <!-- END switch_user_authpost -->
    </div>
</div>

{BOARD_INDEX}

<div class="borderwrap module clearfix">
    <div class="left rtl-inversion-left">
        {L_MODERATOR}:&nbsp;{MODERATORS}<br />
        {LOGGED_IN_USERS_LIST}<br />
        <em>{FORUM_ONLINE_USERS}</em>
    </div>
    <div class="right rtl-inversion-right">
        {S_AUTH_LIST}
    </div>
</div>

<!-- BEGIN switch_legend -->
<div class="borderwrap module inner clearfix">
    <ul class="ul-icons">
        <li><img src="{FOLDER_ANNOUNCE_IMG}" alt="{L_FOLDER_ANNOUNCE_IMG}" />&nbsp;{L_FOLDER_ANNOUNCE_IMG}</li>
        <li><img src="{FOLDER_NEW_IMG}" alt="{L_FOLDER_NEW_IMG}" />&nbsp;{L_FOLDER_NEW_IMG}</li>
        <li><img src="{FOLDER_IMG}" alt="{L_FOLDER_IMG}" />&nbsp;{L_FOLDER_IMG}</li>
    </ul>
    <ul class="ul-icons">
        <li><img src="{FOLDER_STICKY_IMG}" alt="{L_FOLDER_STICKY_IMG}" />&nbsp;{L_FOLDER_STICKY_IMG}</li>
        <li><img src="{FOLDER_HOT_NEW_IMG}" alt="{L_FOLDER_HOT_NEW_IMG}" />&nbsp;{L_FOLDER_HOT_NEW_IMG}</li>
        <li><img src="{FOLDER_HOT_IMG}" alt="{L_FOLDER_HOT_IMG}" />&nbsp;{L_FOLDER_HOT_IMG}</li>
    </ul>
    <ul class="ul-icons">
        <li><img src="{FOLDER_GLOBAL_ANNOUNCE_IMG}" alt="{L_FOLDER_GLOBAL_ANNOUNCE_IMG}" />&nbsp;{L_FOLDER_GLOBAL_ANNOUNCE_IMG}</li>
        <li><img src="{FOLDER_LOCKED_NEW_IMG}" alt="{L_FOLDER_LOCKED_NEW_IMG}" />&nbsp;{L_FOLDER_LOCKED_NEW_IMG}</li>
        <li><img src="{FOLDER_LOCKED_IMG}" alt="{L_FOLDER_LOCKED_IMG}" />&nbsp;{L_FOLDER_LOCKED_IMG}</li>
    </ul>
</div>
<!-- END switch_legend -->
