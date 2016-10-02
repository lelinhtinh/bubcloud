<nav class="breadcrumb">
    <ul id="navstrip" class="clearfix" itemscope itemtype="http://data-vocabulary.org/Breadcrumb">
        <li class="begin"><a href="{U_INDEX}" itemprop="url"><span itemprop="title">{L_INDEX}</span></a></li>
        <li><a href="{U_REPORT_LIST}" itemprop="url"><span itemprop="title">{L_REPORT_LIST}</span></a></li>
        <!-- BEGIN switch_archive -->
        <li><strong><a href="{U_REPORT_ARCHIVE}" itemprop="url"><span itemprop="title">{L_REPORT_ARCHIVE}</span></a></strong></li>
        <!-- END switch_archive -->
    </ul>
</nav>
<div class="borderwrap clearfix">
    <nav class="pagination">{PAGINATION}</nav>
</div>
<form method="post" action="{S_ACTION}" name="list_form" class="ipbform">
    <div class="borderwrap module">
        <!-- BEGIN switch_list -->
        <div class="left"><a class="btn" href="{U_REPORT_ARCHIVE}"><i class="fa fa-floppy-o"></i> {L_REPORT_ARCHIVE}</a></div>
        <!-- END switch_list -->
        <div class="right">{ORDER_SELECT}</div>
    </div>
    <section class="borderwrap">
        <div class="maintitle clearfix">
            <h3>{L_REPORT_LIST}</h3>
        </div>
        <div class="maincontent">
            <table cellspacing="0" class="ipbtable">
                <thead>
                    <tr>
                        <th>{L_REPORT}</th>
                        <th>{L_REASON}</th>
                        <th>{L_REPORTER}</th>
                        <th>{L_STATUS}</th>
                        <th>{L_LAST_EDIT}</th>
                        <th>&nbsp;</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- BEGIN row -->
                    <tr>
                        <td class="row1"><a href="{row.U_REPORT}">{row.REPORT}</a></td>
                        <td class="row2 centered">{row.REASON}</td>
                        <td class="row1">{row.TIME} - {row.REPORTER}</td>
                        <td class="row2 centered">{row.STATUS}</td>
                        <td class="row1">{row.LAST_EDIT_TIME} {row.LAST_EDIT_USER}</td>
                        <td class="row2 centered">
                            <input type="checkbox" name="mark[]" value="{row.REPORT_ID}" {row.S_CHECKED} />
                        </td>
                    </tr>
                    <!-- END row -->
                </tbody>
            </table>
        </div>
        <div class="module inner centered clearfix">
            <div class="left noIcon">
                {S_HIDDEN_FIELDS}
                <!-- BEGIN switch_view -->
                <button type="submit" onclick="return checkreport();" name="mode[view]" class="button"><i class="fa fa-eye"></i> {L_VIEW}</button>&nbsp;
                <!-- END switch_view -->
                <!-- BEGIN switch_edit -->
                <button type="submit" onclick="return checkreport();" name="mode[edit]" class="button"><i class="fa fa-pencil"></i> {L_EDIT}</button>&nbsp;
                <!-- END switch_edit -->
                <!-- BEGIN switch_status -->
                <button type="submit" onclick="return checkreport();" name="mode[status]" class="button"><i class="fa fa-info"></i> {L_STATUS}</button>&nbsp;
                <!-- END switch_status -->
                <!-- BEGIN switch_delete -->
                <button type="submit" onclick="delete_mode = true; return checkreport();" name="mode[delete]" class="button"><i class="fa fa-times"></i> {L_DELETE}</button>&nbsp;
                <input type="hidden" name="confirm" value="0" class="button" />
                <!-- END switch_delete -->
            </div>
            <div class="right">
                {MARK_SELECT}
                <input class="liteoption" type="button" value="{L_GO}" onclick="do_mark(this.form.mark_mode.options[form.mark_mode.selectedIndex].value, this.form.mark_type.options[form.mark_type.selectedIndex].value)" />
            </div>
        </div>
    </section>
</form>
<script type="text/javascript">
//<![CDATA[
special_mark_modes = new Array(7);
special_mark_modes[0] = '{JS_MARK_MODE_0}'.split(',');
special_mark_modes[1] = '{JS_MARK_MODE_1}'.split(',');
special_mark_modes[2] = '{JS_MARK_MODE_2}'.split(',');
special_mark_modes[3] = '{JS_MARK_MODE_3}'.split(',');
special_mark_modes[4] = '{JS_MARK_MODE_4}'.split(',');
special_mark_modes[5] = '{JS_MARK_MODE_5}'.split(',');
special_mark_modes[6] = '{JS_MARK_MODE_6}'.split(',');
form = window.document.list_form;
delete_mode = false;
//]]>
</script>
