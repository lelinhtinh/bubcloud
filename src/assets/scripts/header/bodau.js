/* eslint-disable no-unused-vars */
function bodau(str) {
    str = str.toLowerCase();
    str = str.replace(/\u00e0|\u00e1|\u1ea1|\u1ea3|\u00e3|\u00e2|\u1ea7|\u1ea5|\u1ead|\u1ea9|\u1eab|\u0103|\u1eb1|\u1eaf|\u1eb7|\u1eb3|\u1eb5/g, 'a');
    str = str.replace(/\u00e8|\u00e9|\u1eb9|\u1ebb|\u1ebd|\u00ea|\u1ec1|\u1ebf|\u1ec7|\u1ec3|\u1ec5/g, 'e');
    str = str.replace(/\u00ec|\u00ed|\u1ecb|\u1ec9|\u0129/g, 'i');
    str = str.replace(/\u00f2|\u00f3|\u1ecd|\u1ecf|\u00f5|\u00f4|\u1ed3|\u1ed1|\u1ed9|\u1ed5|\u1ed7|\u01a1|\u1edd|\u1edb|\u1ee3|\u1edf|\u1ee1/g, 'o');
    str = str.replace(/\u00f9|\u00fa|\u1ee5|\u1ee7|\u0169|\u01b0|\u1eeb|\u1ee9|\u1ef1|\u1eed|\u1eef/g, 'u');
    str = str.replace(/\u1ef3|\u00fd|\u1ef5|\u1ef7|\u1ef9/g, 'y');
    str = str.replace(/\u0111/g, 'd');
    str = str.replace(/\W+/g, '-');
    str = str.replace(/\-{2}/g, '-');
    str = str.replace(/^\-+|\-+$/g, '');
    return str;
}
