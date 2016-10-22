/* eslint-disable no-unused-vars */
function debounce(func, wait, immediate) {
    var timeout;

    return function() {
        var context = this,
            args = arguments,
            later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            },
            callNow = immediate && !timeout;

        clearTimeout(timeout);
        timeout = setTimeout(later, wait);

        if (callNow) func.apply(context, args);
    };
}
