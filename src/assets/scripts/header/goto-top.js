/* eslint-disable no-unused-vars */
function gotoTop($ele) {
    $('html, body').animate({
        scrollTop: $ele ? $ele.offset().top : 0
    });
}
