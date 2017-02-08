<!-- BEGIN html_validation -->
<!DOCTYPE html>
<html>

<body>
    <footer>
        <div>
            <div>
                <div>
                    <!-- END html_validation -->
                    <!-- BEGIN switch_footer_links -->
                    <!-- BEGIN footer_link -->
                    <!-- BEGIN switch_separator -->&nbsp;|&nbsp;
                    <!-- END switch_separator -->
                    {switch_footer_links.footer_link.FOOTER_LINK_SEPARATOR}<a name="bottom" class="copyright" href="{switch_footer_links.footer_link.U_FOOTER_LINK_HREF}" rel="{switch_footer_links.footer_link.FOOTER_LINK_REL}" target="{switch_footer_links.footer_link.FOOTER_LINK_TARGET}"
                        title="{switch_footer_links.footer_link.L_FOOTER_LINK_TITLE}">{switch_footer_links.footer_link.L_FOOTER_LINK_TEXT}</a>
                    <!-- END footer_link -->
                    <!-- END switch_footer_links -->
                    <div class="copyright right">Bubcloud © 2015+, <a href="http://devs.forumvi.com/u1">Zzbaivong</a></div>
                </div>
            </div>
        </div>
        {PROTECT_FOOTER}
        <p class="centered">
            <strong>{ADMIN_LINK}</strong>
        </p>
        <div id="back_to_top"></div>
    </footer>
    <script src="/bubcloud.footer.js" type="text/javascript"></script>

    <script type="text/javascript">
        //<![CDATA[
        function lang_vi(a) {
            a = a.toLowerCase();
            a = a.replace(/\u00e0|\u00e1|\u1ea1|\u1ea3|\u00e3|\u00e2|\u1ea7|\u1ea5|\u1ead|\u1ea9|\u1eab|\u0103|\u1eb1|\u1eaf|\u1eb7|\u1eb3|\u1eb5/g, "a");
            a = a.replace(/\u00e8|\u00e9|\u1eb9|\u1ebb|\u1ebd|\u00ea|\u1ec1|\u1ebf|\u1ec7|\u1ec3|\u1ec5/g, "e");
            a = a.replace(/\u00ec|\u00ed|\u1ecb|\u1ec9|\u0129/g, "i");
            a = a.replace(/\u00f2|\u00f3|\u1ecd|\u1ecf|\u00f5|\u00f4|\u1ed3|\u1ed1|\u1ed9|\u1ed5|\u1ed7|\u01a1|\u1edd|\u1edb|\u1ee3|\u1edf|\u1ee1/g, "o");
            a = a.replace(/\u00f9|\u00fa|\u1ee5|\u1ee7|\u0169|\u01b0|\u1eeb|\u1ee9|\u1ef1|\u1eed|\u1eef/g,
                "u");
            a = a.replace(/\u1ef3|\u00fd|\u1ef5|\u1ef7|\u1ef9/g, "y");
            a = a.replace(/\u0111/g, "d");
            a = a.replace(/\W+/g, "-");
            a = a.replace(/^\-+|\-+$/g, "");
            a = a.replace(/(-group)$/, "");
            return a.replace(/(-page-\d+)$/, "")
        }
        $("a[href^='/t'], a[href^='http://" + location.host + "/t']").html(function() {
            var a = $(this).text();
            if (/^\[([^\[\]]+)\]/.test(a)) return a.replace(/^\[[^\[\]]+\]/, function(a) {
                return '<span class="prefix ' + lang_vi(a) + '">' + a.slice(1, -1) + "</span>"
            })
        });
        //]]>
    </script>

    <!-- BEGIN switch_facebook_login -->
    <div id="fb-root"></div>
    <script type="text/javascript">
        FB.init({
            appId: {
                switch_facebook_login.FACEBOOK_APP_ID
            },
            cookie: true,
            xfbml: true,
            oauth: true,
            version: 'v2.3'
        });

        (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {
                return;
            }
            js = d.createElement(s);
            js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    </script>
    <!-- END switch_facebook_login -->
    <!-- BEGIN switch_facebook_logout_TMP -->
    <script type="text/javascript">
        //<![CDATA[
        FB.Event.subscribe('auth.logout', function(response) {
            if ($('a#logout')) {
                var lien_redir = $('a#logout').attr('href');

                if ($('a#logout').attr('href') && $('a#logout').attr('href') != '') {
                    document.location.href = 'http://{switch_facebook_logout.SERVER_NAME}/' + lien_redir;
                }
            }
        });

        $(document).ready(function() {
            $('a#logout').click(function() {
                FB.logout();
            });
        });
        //]]>
    </script>
    <!-- END switch_facebook_logout_TMP -->
    <script type="text/javascript">
        //<![CDATA[
        fa_endpage();
        //]]>
    </script>
</body>

</html>
