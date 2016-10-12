/*!
 * bubcloud - v0.7.0
 * A responsive theme for Forumotion
 * http://devs.forumvi.com
 *
 * Made by Zzbaivong
 * Under MIT License
 */
window.removeEventListener("message",onMessage,!0),window.addEventListener("message",function(e){if("servimg"===e.data.from){var t,a=e.data.data.match(/\[img\](.+)?\[\/img\]/g),n="";"array"===$.type(a)&&(t=a.length,1===t?n=a[0]+"\n":$.each(a,function(e,t){n+=t+"\n"}),$("#text_editor_textarea").sceditor("instance").insert(n+"\n"))}},!0);
!function(n){"use strict";function e(e){var i=n(e);i.attr("value",i.val())}var i=navigator.userAgent.toLowerCase();n.browser={version:parseInt(navigator.appVersion),msie:-1!==i.indexOf("msie")&&-1===i.indexOf("opera"),opera:-1!==i.indexOf("opera"),mozilla:-1!==i.indexOf("mozilla"),safari:-1!==i.indexOf("safari")},n.fn.jqDrag=n.fn.bgiframe=function(){return n.noop()};var a=1;n(function(){0===location.pathname.indexOf("/u")&&1===_userdata.session_logged_in&&n(".field_editable").on("input",[".post",".inputbox"][a],function(){e(this)}).on("change","select",function(){e(this)}).find("select, input, textarea").each(function(){e(this)})})}(jQuery);