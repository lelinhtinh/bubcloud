<nav class="breadcrumb">
    <ul id="navstrip" class="clearfix" itemscope itemtype="http://data-vocabulary.org/Breadcrumb">
        <li class="begin"><a href="{U_INDEX}" itemprop="url"><span itemprop="title">{L_INDEX}</span></a></li>
        <li><a href="{U_CALENDAR_SCHEDULER}" itemprop="url"><span itemprop="title">{L_CALENDAR_SCHEDULER}</span></a></li>
    </ul>
</nav>
<form name="_calendar_scheduler" method="post" action="{ACTION}">
    <section id="mini-calendar">
        <div class="borderwrap clearfix">
            <div class="maintitle">
                <h2>{L_CALENDAR_SCHEDULER}</h2>
            </div>
            <div class="maincontent">
                <table class="ipbtable" cellspacing="0" cellpadding="0">
                    <tr>
                        <!-- BEGIN header_cell -->
                        <th>{header_cell.L_DAY}</th>
                        <!-- END header_cell -->
                    </tr>
                    <!-- BEGIN row -->
                    <tr>
                        <!-- BEGIN cell -->
                        <td class="{row.cell.CLASS_NEW} center">{row.cell.DAY}</td>
                        <!-- END cell -->
                    </tr>
                    <!-- END row -->
                </table>
            </div>
            <div class="module inner center">
                <a href="{U_CALENDAR}" title="{L_CALENDAR}">{L_CALENDAR}&nbsp;<img src="{IMG_CALENDAR}" alt="{L_CALENDAR}" title="{L_CALENDAR}" /></a>
            </div>
        </div>
        <div class="borderwrap module center">
            <strong><a href="{U_PREC}" class="titletext btn"><i class="fa fa-angle-double-left"></i></a></strong>
            &nbsp; {S_MONTH} {S_YEAR} &nbsp;
            <strong><a href="{U_NEXT}" class="titletext btn"><i class="fa fa-angle-double-right"></i></a></strong>
        </div>
    </section>
    <section id="calendar-result" class="borderwrap clearfix">
    	<div class="borderwrap clearfix">
	        <div class="maintitle">
	            <h2>Event</h2>
	        </div>
	        {TOPIC_LIST_SCHEDULER}
	        <div class="maincontent birthday-list">
	        	{BIRTHDAY_LIST_SCHEDULER}
	        </div>
        </div>
        <div class="borderwrap clearfix">
	        <nav class="pagination">{PAGINATION}</nav>
	    </div>
    </section>
    {S_HIDDEN_FIELDS}
</form>
