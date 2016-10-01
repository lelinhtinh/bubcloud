/* global onMessage */
window.removeEventListener('message', onMessage, true);
// window.addEventListener('message', function (e) {
//     if (e.data.from !== 'servimg') return;
//
//     function genBBcodeImageWithLink(img_url) {
//         var full_size = img_url.replace(/(http:\/\/.+)(\/th)(\/[^\/]+\.(jpg|png|gif))$/, '$1$3');
//         return '[url=' + full_size + '][img]' + img_url + '[/img][/url]\n';
//     }
//
//     var arr = e.data.data.match(/http:\/\/([^\[]+)?\.(jpg|png|gif)/gi),
//         arrSize,
//         source = '';
//     if ($.type(arr) !== 'array') return;
//     arrSize = arr.length;
//
//     if (arrSize === 1) {
//         source = genBBcodeImageWithLink(arr[0]);
//     } else {
//         $.each(arr, function (i, v) {
//             source += genBBcodeImageWithLink(v);
//         });
//     }
//
//     $('#text_editor_textarea').sceditor('instance').insert(source + '\n');
// }, true);

window.addEventListener('message', function(e) {
    if (e.data.from !== 'servimg') return;

    var arr = e.data.data.match(/\[img\](.+)?\[\/img\]/g),
        arrSize,
        source = '';
    if ($.type(arr) !== 'array') return;
    arrSize = arr.length;

    if (arrSize === 1) {
        source = arr[0] + '\n';
    } else {
        $.each(arr, function(i, v) {
            source += v + '\n';
        });
    }

    $('#text_editor_textarea').sceditor('instance').insert(source + '\n');
}, true);

// function genBBcodeImageWithSize(img_url, callback) {
//     var img = new Image();
//     img.onload = function () {
//         callback('[img(' + this.width + 'px,' + this.height + 'px)]' + this.src + '[/img]');
//     };
//     img.src = img_url;
// }
// genBBcodeImageWithSize();
