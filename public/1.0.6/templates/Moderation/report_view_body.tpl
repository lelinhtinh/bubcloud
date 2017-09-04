<nav class="breadcrumb">
    <ul id="navstrip" class="clearfix" itemscope itemtype="http://data-vocabulary.org/Breadcrumb">
        <li class="begin"><a href="{U_INDEX}" itemprop="url"><span itemprop="title">{L_INDEX}</span></a></li>
        <li><a href="{U_REPORT_LIST}" itemprop="url"><span itemprop="title">{L_REPORT_LIST}</span></a></li>
        <li><a href="{U_REPORT_ARCHIVE}" itemprop="url"><span itemprop="title">{L_REPORT_ARCHIVE}</span></a></li>
        <li><strong><a href="{U_REPORT_VIEW}" itemprop="url"><span itemprop="title">{L_REPORT_VIEW}</span></a></strong></li>
    </ul>
</nav>
<!-- BEGIN row -->
<section class="borderwrap">
    <div class="maintitle">
        <h3>{L_REPORT_VIEW}</h3>
    </div>
    <div class="box-content">
        <table cellspacing="0" class="ipbtable">
            <thead>
                <tr>
                    <th>{L_STATUS}: <strong>{row.STATUS}</strong></th>
                    <th>{L_REASON} : <strong>{row.REASON}</strong></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="row1 report">
                        <p>{L_REPORTER}: {row.REPORTER}</p>
                        <p>{row.TIME}</p>
                        <hr />
                        <p>{L_LAST_EDIT}: {row.LAST_EDIT_USER}</p>
                        <p>{row.LAST_EDIT_TIME}</p>
                        <hr />
                        <p>{L_POST}: <a href="{row.U_POST}">{row.POST}</a></p>
                        <p>{L_AUTHOR}: {row.AUTHOR}</p>
                    </td>
                    <td class="row2 report-info floated" valign="top">
                        <div class="margin-field">
                            {row.TEXT}
                        </div>
                        <!-- BEGIN switch_edit -->
                        <a href="{row.U_EDIT}" class="btn report-edit"><i class="fa fa-pencil" aria-hidden="true"></i> Sửa</a>
                        <!-- END switch_edit -->
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="module inner centered">
        <!-- BEGIN switch_status -->
        <form method="post" action="{S_ACTION}">
            {S_HIDDEN_FIELDS}
            <input type="hidden" name="id" value="{row.REPORT_ID}" /> {row.STATUS_SELECT}
            <input type="submit" name="submit" value="{L_UPDATE_STATUS}" class="button" />
        </form>
        <!-- END switch_status -->
    </div>
</section>
<!-- END row -->
