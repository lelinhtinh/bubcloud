<nav class="breadcrumb">
	<ul id="navstrip" class="clearfix" itemscope itemtype="http://data-vocabulary.org/Breadcrumb">
	    <li class="begin"><a href="{U_INDEX}" itemprop="url"><span itemprop="title">{L_INDEX}</span></a></li>
	    {NAV_CAT_DESC}
	    <li>{L_FAQ_TITLE}</li>
	</ul>
</nav>
<script type="text/javascript" src="{U_CFAQ_JSLIB}"></script>
<noscript>
    <div class="borderwrap">
        <div class="errorwrap">
            <p class="centered">{L_CFAQ_NOSCRIPT}</p>
        </div>
    </div>
</noscript>
<section class="borderwrap">
    <div class="maintitle">
        <h3>{L_FAQ_TITLE}</h3>
    </div>
    <div class="box-content">
        <!-- BEGIN faq_block -->
        <dl class="faq row1">
            <dt class="subtitle">{faq_block.BLOCK_TITLE}</dt>
            <!-- BEGIN faq_row -->
            <dd onclick="return CFAQ.display('faq_a_{faq_block.faq_row.U_FAQ_ID}', false);" class="question">
                <a href="javascript:void(0)" onclick="return CFAQ.display('faq_a_{faq_block.faq_row.U_FAQ_ID}', true);" onfocus="this.blur();">{faq_block.faq_row.FAQ_QUESTION}</a>
            </dd>
            <dd style="display:none;" id="faq_a_{faq_block.faq_row.U_FAQ_ID}">
                {faq_block.faq_row.FAQ_ANSWER}
            </dd>
            <!-- END faq_row -->
        </dl>
        <!-- END faq_block -->
    </div>
</section>
