<!-- BEGIN _calendar_box -->
<div class="borderwrap calmonths module center">
    <!-- BEGIN switch_not_anonymous -->
    <a href="{_calendar_box.U_PREC}" class="calarrow btn" rel="nofollow"><i class="fa fa-angle-double-left" aria-hidden="true"></i></a>
    <!-- END switch_not_anonymous -->
    &nbsp;
    <form name="_calendar" method="post" action="{_calendar_box.S_ACTION}" style="display:inline;">{_calendar_box.S_MONTH} {_calendar_box.S_YEAR} {_calendar_box.S_FORUM_LIST}
        <input type="submit" value="{_calendar_box.L_GO}" class="button" />
    </form>&nbsp;
    <!-- BEGIN switch_not_anonymous -->
    <a href="{_calendar_box.U_NEXT}" class="calarrow btn" rel="nofollow"><i class="fa fa-angle-double-right" aria-hidden="true"></i></a>
    <!-- END switch_not_anonymous -->
</div>
<section class="borderwrap">
    <div class="maintitle clearfix">
        <h3>{L_CALENDAR}</h3>
    </div>
    <div class="box-content">
        <table class="ipbtable calendar" cellspacing="0" cellpadding="0">
            <thead>
                <tr>
                    <!-- BEGIN _cell -->
                    <th style="width: {_calendar_box._cell.WIDTH}%;">{_calendar_box._cell.L_DAY}</th>
                    <!-- END _cell -->
                </tr>
            </thead>
            <!-- BEGIN _row -->
            <tbody>
                <tr>
                    <!-- BEGIN _cell -->
                    <!-- BEGIN switch_filled_no -->
                    <td colspan="{_calendar_box._row._cell.SPAN}" style="width: {_calendar_box._row._cell.WIDTH}%;">
                        &nbsp;
                    </td>
                    <!-- END switch_filled_no -->
                    <!-- BEGIN switch_filled -->
                    <td class="celldate" colspan="{_calendar_box._row._cell.SPAN}" style="width: {_calendar_box._row._cell.WIDTH}%;" valign="top">
                        <div class="calday">
                            {_calendar_box._row._cell.U_DATE}&nbsp;
                        </div>
                        <ul>
                            <!-- BEGIN _event -->
                            <!-- BEGIN switch_event -->
                            <li>{_calendar_box._row._cell.switch_filled._event.switch_event.EVENT_TYPE}<a rel="nofollow" href="{_calendar_box._row._cell.switch_filled._event.switch_event.U_EVENT}" {_calendar_box._row._cell.switch_filled._event.switch_event.OVERVIEW_MESSAGE} class="{_calendar_box._row._cell.switch_filled._event.switch_event.EVENT_CLASS}">{_calendar_box._row._cell.switch_filled._event.switch_event.EVENT_TITLE}</a></li>
                            <!-- END switch_event -->
                            <!-- BEGIN switch_event_no -->
                            <li>&nbsp;</li>
                            <!-- END switch_event_no -->
                            <!-- END _event -->
                        </ul>
                        <p class="right-event">
                            <!-- BEGIN switch_add_event_day -->
                            <a href="{_calendar_box._row._cell.switch_filled.switch_add_event_day.U_CREATE_EVENT}"><img src="{FOLDER_CALENDAR_IMG}" alt="{L_ADD_EVENT}" title="{L_ADD_EVENT}" /></a>
                            <!-- END switch_add_event_day -->
                        </p>
                    </td>
                    <!-- END switch_filled -->
                    <!-- END _cell -->
                </tr>
            </tbody>
            <!-- END _row -->
        </table>
    </div>
    <!-- BEGIN switch_add_event -->
    <div class="module inner center">
        <form action="{S_CREATE_EVENT}" method="post">
            <input type="submit" value="{L_ADD_EVENT}" class="button" />
        </form>
    </div>
    <!-- END switch_add_event -->
</section>
<!-- END _calendar_box -->
