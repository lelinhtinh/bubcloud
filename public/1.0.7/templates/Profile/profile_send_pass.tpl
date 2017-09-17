<nav class="breadcrumb">
    <ul id="navstrip" class="clearfix">
        <li class="begin"><a href="{U_INDEX}"><span>{L_INDEX}</span></a></li>
        {NAV_CAT_DESC}
    </ul>
</nav>


<!-- BEGIN switch_user_logged_in -->
<div class="newslink">
    <p class="right rightside">{LAST_VISIT_DATE}</p>
</div>
<!-- END switch_user_logged_in -->

<form action="{S_PROFILE_ACTION}" method="post" class="ipbform2">
    <section class="borderwrap">
        <div class="maintitle">
            <h3>{L_SEND_PASSWORD}</h3>
        </div>
        <div class="box-content resend-pwd">
            <div class="errorwrap padded">
                <p>{L_ITEMS_REQUIRED}</p>
            </div>
            <fieldset class="formcolumn1">
                <div class="row">
                    <label for="send_pass_username">{L_USERNAME}: *</label>
                    <input id="send_pass_username" class="input_field" type="text" name="username" value="{USERNAME}">
                </div>
                <div class="row">
                    <label for="send_pass_email">{L_EMAIL_ADDRESS}: *</label>
                    <input id="send_pass_email" class="input_field" type="text" name="email" value="{EMAIL}">
                </div>
            </fieldset>
        </div>
        <div class="module inner center noIcon">
            {S_HIDDEN_FIELDS}
            <button type="submit" name="submit" class="button" value="{L_SUBMIT}"><i class="fa fa-check" aria-hidden="true"></i> {L_SUBMIT}</button>&nbsp;&nbsp;
            <button type="reset" name="reset" class="button" value="{L_RESET}"><i class="fa fa-refresh" aria-hidden="true"></i> {L_RESET}</button>
        </div>
    </section>
</form>
