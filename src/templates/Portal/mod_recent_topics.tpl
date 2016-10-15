<!-- BEGIN classical_row -->
<tr>
   <th class="double">
      Bài viết mới
      <span class="right">Người gửi cuối</span>
   </th>
   <th class="centered">
      <select class="changeLast" data-group="post">
         <option value="top_posters">Viết bài nhiều nhất</option>
         <option value="active_starters">Tạo chủ đề nhiều nhất</option>
      </select>
   </th>
   <th class="centered">
      <select class="changeLast" data-group="time">
         <option value="users_week">Tích cực nhất tuần</option>
         <option value="users_month">Tích cực nhất tháng</option>
      </select>
   </th>
</tr>
<tr>
   <td class="double" rowspan="3">
      <ol id="recent_topics" class="olList">
         <!-- BEGIN recent_topic_row -->
         <li>
            <a href="{classical_row.recent_topic_row.U_TITLE}">{classical_row.recent_topic_row.L_TITLE}</a>
            <div class="tooltip_data hide">
               <div>
                  <span class="tooltip-title">Tiêu đề</span>: {classical_row.recent_topic_row.L_TITLE}
               </div>
               <div>
                  <span class="tooltip-date">Gửi lúc</span>: {classical_row.recent_topic_row.S_POSTTIME}
               </div>
            </div>

            <!-- BEGIN switch_poster -->
            <a class="lastRight" href="{classical_row.recent_topic_row.switch_poster.U_POSTER}">{classical_row.recent_topic_row.switch_poster.S_POSTER}</a>
            <!-- END switch_poster -->
            <!-- BEGIN switch_poster_guest -->
            <span class="lastRight">
               {classical_row.recent_topic_row.switch_poster_guest.S_POSTER}
            </span>
            <!-- END switch_poster_guest -->
         </li>
         <!-- END recent_topic_row -->
      </ol>
   </td>
<!-- </tr> -->
<!-- END classical_row -->
