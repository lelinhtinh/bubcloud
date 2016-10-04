<!DOCTYPE html>
<html class="no-js" lang="{L_LANG_HTML}" xml:lang="{L_LANG_HTML}" {NAMESPACE_FB} {NAMESPACE_FB_LIKE} {NAMESPACE_BBCODE}>

<head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>{SITENAME_TITLE}{PAGE_TITLE}</title>
    <!-- BEGIN switch_canonical_url -->
    <link rel="canonical" href="{switch_canonical_url.CANONICAL_URL}">
    <!-- END switch_canonical_url -->
    {META_FAVICO}
    <link rel="icon" type="image/png" href="http://i35.servimg.com/u/f35/19/38/83/61/6410.png">
    {META} {META_FB_LIKE}
    <meta name="title" content="{SITENAME_TITLE}{PAGE_TITLE}">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="//fonts.googleapis.com/css?family=Roboto:300,400,400i,700,900&amp;subset=latin-ext,vietnamese" rel="stylesheet" type="text/css">
    <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    {T_HEAD_STYLESHEET}
    {CSS}
    <link href="/style.css" rel="stylesheet" type="text/css">
    <link rel="search" type="application/opensearchdescription+xml" href="/improvedsearch.xml" title="{SITENAME}">
    <link rel="search" type="application/opensearchdescription+xml" href="{URL_BOARD_DIRECTORY}/search/improvedsearch.xml" title="{SEARCH_FORUMS}">
    <!--[if lt IE 9]>
    <script src="//cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.min.js" type="text/javascript"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/respond.js/1.4.2/respond.min.js" type="text/javascript"></script>
    <![endif]-->
    <script src="//cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js" type="text/javascript"></script>
    <!-- [if (!IE)|(gt IE 8)] -->
    <script src="//ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js" type="text/javascript"></script>
    <!-- [endif] -->
    <!--[if lte IE 8]>
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js" type="text/javascript"></script>
    <![endif]-->
    <script src="{JS_DIR}{L_LANG}.js" type="text/javascript"></script>
    <!-- BEGIN switch_fb_login -->
    <script src="http://connect.facebook.net/{switch_fb_login.FB_LOCAL}/all.js" type="text/javascript"></script>
    <script src="{switch_fb_login.JS_FB_LOGIN}" type="text/javascript"></script>
    <!-- END switch_fb_login -->
    <script src="{JS_DIR}invision.js" type="text/javascript"></script>
    <script src="/bubcloud.top.js" type="text/javascript"></script>
    {HOSTING_JS}
    <!-- BEGIN google_analytics_code -->
    <script type="text/javascript">
    //<![CDATA[
    var _gaq = _gaq || [];
    _gaq.push(["_setAccount", "{G_ANALYTICS_ID}"]);
    _gaq.push(["_trackPageview"]);
    _gaq.push(['_trackPageLoadTime']);
    <!-- BEGIN google_analytics_code_bis -->
    _gaq.push(['b._setAccount', '{G_ANALYTICS_ID_BIS}']);
    _gaq.push(['b._trackPageview']);
    <!-- END google_analytics_code_bis -->
    (function() {
        var ga = document.createElement("script");
        ga.type = "text/javascript";
        ga.async = true;
        ga.src = ("https:" == document.location.protocol ? "https://ssl" : "http://www") + ".google-analytics.com/ga.js";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(ga, s);
    })();
    //]]>
    </script>
    <!-- END google_analytics_code -->
</head>

<body class="default">
    <a id="top" name="top" accesskey="t"></a>
    <header id="header">
        <div class="wrap">
            <div id="logostrip" class="clearfix">
                <a href="{U_INDEX}" id="logo" title="{L_INDEX}"><img src="{LOGO}" alt="{L_INDEX}"></a>
                <!-- BEGIN switch_h1 -->
                <div id="main-title">{switch_h1.MAIN_SITENAME}</div>
                <!-- END switch_h1 -->
                <!-- BEGIN switch_desc -->
                <p id="site-desc">{switch_desc.SITE_DESCRIPTION}</p>
                <!-- END switch_desc -->
            </div>
            <div id="togglesearch" class="toggle-btn">
                <i class="fa fa-lg fa-search"></i>
                <span class="hide">Tìm kiếm</span>
            </div>
            <div id="togglemenu" class="toggle-btn">
                <i class="fa fa-lg fa-bars"></i>
                <span class="hide">Trình đơn</span>
            </div>
        </div>
    </header>
    <nav id="nav" class="nav-top">
        <div class="wrap clearfix">
            <ul class="main-menu clearfix">
                <li class="nav-link home-link active"><a href="/"><i class="fa-fw fa fa-home"></i><span>Trang chủ</span></a></li>
                <li class="nav-link memberlist-link"><a href="/memberlist"><i class="fa-fw fa fa-th-list fa-rotate-90"></i><span>Thành viên</span></a></li>
                <li class="nav-link groups-link"><a href="/groups"><i class="fa-fw fa fa-users"></i><span>Hội nhóm</span></a></li>
                <li class="has-sub floated">
                    <strong><span>Mục khác </span><i class="fa fa-angle-down"></i></strong>
                    <ul>
                        <li class="nav-link search-link"><a href="/search"><i class="fa-fw fa fa-search"></i><span>Tìm kiếm</span></a></li>
                        <li class="nav-link calendar-link"><a href="/calendar"><i class="fa-fw fa fa-calendar"></i><span>Lịch</span></a></li>
                        <li class="nav-link faq-link"><a href="/faq"><i class="fa-fw fa fa-question-circle"></i><span>FAQ</span></a></li>
                    </ul>
                </li>
            </ul>
            <ul class="user-menu clearfix">
                <!-- BEGIN switch_user_logged_in -->
                <li class="nav-link notifications-link"><a href="/profile?mode=editprofile&amp;page_profil=notifications"><i class="fa-fw fa fa-bell"></i><span>Thông báo</span></a></li>
                <li class="nav-link inbox-link floated"><a href="/privmsg?folder=inbox"><i class="fa-fw fa fa-inbox"></i><span>Hòm thư</span><i class="new-mail hide">{PRIVATE_MESSAGE_INFO}</i></a></li>
                <!-- END switch_user_logged_in -->
                <!-- BEGIN switch_user_logged_out -->
                <li class="nav-link login-link"><a href="/login"><i class="fa-fw fa fa-sign-in"></i><span>Đăng nhập</span></a></li>
                <li class="nav-link register-link"><a href="/register"><i class="fa-fw fa fa-key"></i><span>Đăng ký</span></a></li>
                <!-- END switch_user_logged_out -->
                <li class="has-sub floated color-change clearfix">
                    <strong class="color-button"><span>Chọn màu </span><i class="fa fa-circle"></i></strong>
                    <ul class="color-panel">
                        <li class="color-list">
                            <div class="fa-stack color-choose" data-colorx="16a085" data-colory="1abc9c">
                                <i class="fa fa-check fa-stack-1x"></i>
                                <i class="fa fa-circle-o fa-stack-2x" style="color: #16a085;"></i>
                            </div>
                        </li>
                        <li class="color-list">
                            <div class="fa-stack color-choose" data-colorx="27ae60" data-colory="2ecc71">
                                <i class="fa fa-check fa-stack-1x"></i>
                                <i class="fa fa-circle-o fa-stack-2x" style="color: #27ae60;"></i>
                            </div>
                        </li>
                        <li class="color-list">
                            <div class="fa-stack color-choose" data-colorx="2980b9" data-colory="3498db">
                                <i class="fa fa-check fa-stack-1x"></i>
                                <i class="fa fa-circle-o fa-stack-2x" style="color: #2980b9;"></i>
                            </div>
                        </li>
                        <li class="color-list">
                            <div class="fa-stack color-choose" data-colorx="8e44ad" data-colory="9b59b6">
                                <i class="fa fa-check fa-stack-1x"></i>
                                <i class="fa fa-circle-o fa-stack-2x" style="color: #8e44ad;"></i>
                            </div>
                        </li>
                        <li class="color-list">
                            <div class="fa-stack color-choose" data-colorx="2c3e50" data-colory="34495e">
                                <i class="fa fa-check fa-stack-1x"></i>
                                <i class="fa fa-circle-o fa-stack-2x" style="color: #2c3e50;"></i>
                            </div>
                        </li>
                        <li class="color-list">
                            <div class="fa-stack color-choose" data-colorx="f39c12" data-colory="f1c40f">
                                <i class="fa fa-check fa-stack-1x"></i>
                                <i class="fa fa-circle-o fa-stack-2x" style="color: #f39c12;"></i>
                            </div>
                        </li>
                        <li class="color-list">
                            <div class="fa-stack color-choose" data-colorx="d35400" data-colory="e67e22">
                                <i class="fa fa-check fa-stack-1x"></i>
                                <i class="fa fa-circle-o fa-stack-2x" style="color: #d35400;"></i>
                            </div>
                        </li>
                        <li class="color-list">
                            <div class="fa-stack color-choose" data-colorx="c0392b" data-colory="e74c3c">
                                <i class="fa fa-check fa-stack-1x"></i>
                                <i class="fa fa-circle-o fa-stack-2x" style="color: #c0392b;"></i>
                            </div>
                        </li>
                        <li class="color-list">
                            <div class="fa-stack color-choose" data-colorx="" data-colory="">
                                <i class="fa fa-times fa-stack-1x" style="color: #FF5C5C;"></i>
                                <i class="fa fa-circle-o fa-stack-2x" style="color: #e7e7e7;"></i>
                            </div>
                        </li>
                    </ul>
                </li>
                <!-- BEGIN switch_user_logged_in -->
                <li class="has-sub floated">
                    <strong><span class="current-user">Người dùng</span><i class="current-avatar"><img src="//i56.servimg.com/u/f56/18/59/49/93/noavat10.jpg"></i></strong>
                    <ul>
                        <li class="current-user-link hide"><a href="#user"><strong class="current-user"></strong></a></li>
                        <li class="nav-link editprofile-link"><a href="/profile?mode=editprofile"><i class="fa-fw fa fa-cog"></i> Thông tin cá nhân</a></li>
                        <li class="nav-link preferences-link"><a href="/profile?mode=editprofile&amp;page_profil=preferences"><i class="fa-fw fa fa-lock"></i> Tùy chọn riêng tư</a></li>
                        <li class="nav-link signature-link"><a href="/profile?mode=editprofile&amp;page_profil=signature"><i class="fa-fw fa fa-pencil-square-o"></i> Sửa chữ ký</a></li>
                        <li class="nav-link avatars-link"><a href="/profile?mode=editprofile&amp;page_profil=avatars"><i class="fa-fw fa fa-picture-o"></i> Thay ảnh đại diện</a></li>
                        <li class="nav-link friendsfoes-link"><a href="/profile?mode=editprofile&amp;page_profil=friendsfoes"><i class="fa-fw fa fa-list-alt"></i> Danh sách bạn và thù</a></li>
                        <li class="nav-link watchsearch-link line"><a href="/search?search_id=watchsearch"><i class="fa-fw fa fa-bookmark"></i> Bài đang theo dõi</a></li>
                        <li class="nav-link tags-link"><a href="/profile?mode=editprofile&amp;page_profil=tags"><i class="fa-fw fa fa-tags"></i> Thẻ đang theo dõi</a></li>
                        <li class="nav-link favouritesearch-link"><a href="/search?search_id=favouritesearch"><i class="fa-fw fa fa-heart"></i> Bài viết ưa thích</a></li>
                        <li class="nav-link newposts-link"><a href="/search?search_id=newposts"><i class="fa-fw fa fa-star"></i> Xem bài viết mới</a></li>
                        <li class="nav-link egosearch-link"><a href="/search?search_id=egosearch"><i class="fa-fw fa fa-user"></i> Bài viết của bạn</a></li>
                        <li class="nav-link unanswered-link"><a href="/search?search_id=unanswered"><i class="fa-fw fa fa-ban"></i> Bài chưa trả lời</a></li>
                        <li class="nav-link logout-link line"><a id="logout" href="{U_LOGIN_LOGOUT}"><i class="fa-fw fa fa-power-off"></i> Thoát</a></li>
                    </ul>
                </li>
                <!-- END switch_user_logged_in -->
            </ul>
            <form method="get" class="search-form clearfix" action="/search">
                <input class="search-btn fa" type="submit" value="">
                <div class="search-box">
                    <input class="search-input" name="search_keywords" placeholder="Tìm kiếm" type="search">
                </div>
            </form>
        </div>
    </nav>
    <main id="{ID_CONTENT_CONTAINER}" {CLASS_CONTENT_CONTAINER}>
        <div class="wrap clearfix">
