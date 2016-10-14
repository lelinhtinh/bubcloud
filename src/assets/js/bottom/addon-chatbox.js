/* global my_getcookie, my_setcookie */
(function($) {

    'use strict';

    // https://twitter.github.io/twemoji/preview.html

    // var emoji = document.getElementsByClassName('emoji'),
    //     list = '';
    // for (var i = 0; i < emoji.length; i++) {
    //     list += ' ' + emoji[i].src.match(/([^\/]+)\.png$/)[1];
    // };
    // console.log(list);

    // 872 emoji

    var $chatbox = $('#frame_chatbox');
    if (!$chatbox.length) return;

    $chatbox.on('load', function() {
        var zzChatbox = $chatbox[0].contentWindow.chatbox;
        if (!zzChatbox) return;

        function animateToggle($element) {
            var $optionsList = $element.find('.cb-bubcloud-options-list');
            emojiToggle = emojiToggle ? false : true;

            if (emojiToggle) {
                $optionsList.css('visibility', 'visible').stop(true, false).animate({
                    opacity: 1,
                    top: 27
                }, 'fast', function() {
                    $element.addClass('active');
                });
            } else {
                $optionsList.stop(true, false).animate({
                    opacity: 0,
                    top: 12
                }, 'fast', function() {
                    $element.removeClass('active');
                    $optionsList.css('visibility', 'hidden');
                });
            }
        }

        function getScrollbarWidth() {
            var outer = document.createElement('div');
            outer.style.visibility = 'hidden';
            outer.style.width = '100px';
            document.body.appendChild(outer);

            var widthNoScroll = outer.offsetWidth;
            outer.style.overflow = 'scroll';

            var inner = document.createElement('div');
            inner.style.width = '100%';
            outer.appendChild(inner);

            var widthWithScroll = inner.offsetWidth;
            outer.parentNode.removeChild(outer);

            return widthNoScroll - widthWithScroll;
        }

        function genYoutubeLink(video_id) {
            return '<a class="cb-bubcloud-media" data-video="https://www.youtube.com/embed/' + video_id + '?rel=0&autoplay=1" href="http://youtu.be/' + video_id + '" target="_blank" rel="nofollow" style="background-image: url(http://img.youtube.com/vi/' + video_id + '/mqdefault.jpg);"><img src="http://i97.servimg.com/u/f97/19/51/54/34/play-i10.png" alt="Play"></a>';
        }

        function genDailymotionLink(video_id) {
            $.getJSON('https://api.dailymotion.com/video/' + video_id, {
                fields: 'thumbnail_medium_url'
            }).done(function(data) {
                $contents.find('.cb-bubcloud-media.daily-icon-' + video_id).css('background-image', 'url(' + data.thumbnail_medium_url + ')');
            });

            return '<a class="cb-bubcloud-media daily-icon-' + video_id + '" data-video="https://www.dailymotion.com/embed/video/' + video_id + '?autoplay=1&endscreen-enable=0" href="http://dai.ly/' + video_id + '" target="_blank" rel="nofollow" style="background-image: url(//i97.servimg.com/u/f97/19/51/54/34/dailym10.png);"><img src="http://i97.servimg.com/u/f97/19/51/54/34/play-i10.png" alt="Play"></a>';
        }


        var $head = $chatbox.contents().find('head'),
            $body = $chatbox.contents().find('body'),

            $contents = $body.find('#chatbox'),
            $chatbox_footer = $body.find('#chatbox_footer'),
            $mess = $body.find('#message'),
            $chatbox_messenger_form = $body.find('#chatbox_messenger_form'),
            $chatbox_display_archive = $body.find('#chatbox_display_archives'),
            $chatbox_option_co = $body.find('#chatbox_option_co'),
            $chatbox_option_disco = $body.find('#chatbox_option_disco'),
            $online_users = $body.find('.online-users'),
            $away_users = $body.find('.away-users'),
            $member_title = $body.find('.member-title'),

            createBtn = function(id, icon) {
                var $btn = $('<div>', {
                    id: id + '_wrap',
                    class: 'cb-bubcloud-options'
                }).append($('<img>', {
                    src: '//twemoji.maxcdn.com/36x36/' + icon + '.png',
                    alt: id,
                    height: 20,
                    width: 20,
                    class: 'cb-bubcloud-btn'
                }));
                $chatbox_footer.append($btn);

                return $btn;
            },

            emojiList = '1f600 1f601 1f602 1f603 1f604 1f605 1f606 1f607 1f608 1f609 1f60a 1f60b 1f60c 1f60d 1f60e 1f60f 1f610 1f611 1f612 1f613 1f614 1f615 1f616 1f617 1f618 1f619 1f61a 1f61b 1f61c 1f61d 1f61e 1f61f 1f620 1f621 1f622 1f623 1f624 1f625 1f626 1f627 1f628 1f629 1f62a 1f62b 1f62c 1f62d 1f62e 1f62f 1f630 1f631 1f632 1f633 1f634 1f635 1f636 1f637 263a 1f638 1f639 1f63a 1f63b 1f63c 1f63d 1f63e 1f63f 1f640 1f645 1f646 1f647 1f648 1f649 1f64a 1f64b 1f64c 1f64d 1f64e 1f64f 1f300 1f301 1f302 1f303 1f304 1f305 1f306 1f307 1f308 1f309 1f30a 1f30b 1f30c 1f30d 1f30e 1f30f 1f310 1f311 1f312 1f313 1f314 1f315 1f316 1f317 1f318 1f319 1f31a 1f31b 1f31c 1f31d 1f31e 1f31f 1f320 1f330 1f331 1f332 1f333 1f334 1f335 1f337 1f338 1f339 1f33a 1f33b 1f33c 1f33d 1f33e 1f33f 1f340 1f341 1f342 1f343 1f344 1f345 1f346 1f347 1f348 1f349 1f34a 1f34b 1f34c 1f34d 1f34e 1f34f 1f350 1f351 1f352 1f353 1f354 1f355 1f356 1f357 1f358 1f359 1f35a 1f35b 1f35c 1f35d 1f35e 1f35f 1f360 1f361 1f362 1f363 1f364 1f365 1f366 1f367 1f368 1f369 1f36a 1f36b 1f36c 1f36d 1f36e 1f36f 1f370 1f371 1f372 1f373 1f374 1f375 1f376 1f377 1f378 1f379 1f37a 1f37b 1f37c 1f380 1f381 1f382 1f383 1f384 1f385 1f386 1f387 1f388 1f389 1f38a 1f38b 1f38c 1f38d 1f38e 1f38f 1f390 1f391 1f392 1f393 1f3a0 1f3a1 1f3a2 1f3a3 1f3a4 1f3a5 1f3a6 1f3a7 1f3a8 1f3a9 1f3aa 1f3ab 1f3ac 1f3ad 1f3ae 1f3af 1f3b0 1f3b1 1f3b2 1f3b3 1f3b4 1f3b5 1f3b6 1f3b7 1f3b8 1f3b9 1f3ba 1f3bb 1f3bc 1f3bd 1f3be 1f3bf 1f3c0 1f3c1 1f3c2 1f3c3 1f3c4 1f3c6 1f3c7 1f3c8 1f3c9 1f3ca 1f3e0 1f3e1 1f3e2 1f3e3 1f3e4 1f3e5 1f3e6 1f3e7 1f3e8 1f3e9 1f3ea 1f3eb 1f3ec 1f3ed 1f3ee 1f3ef 1f3f0 1f400 1f401 1f402 1f403 1f404 1f405 1f406 1f407 1f408 1f409 1f40a 1f40b 1f40c 1f40d 1f40e 1f40f 1f410 1f411 1f412 1f413 1f414 1f415 1f416 1f417 1f418 1f419 1f41a 1f41b 1f41c 1f41d 1f41e 1f41f 1f420 1f421 1f422 1f423 1f424 1f425 1f426 1f427 1f428 1f429 1f42a 1f42b 1f42c 1f42d 1f42e 1f42f 1f430 1f431 1f432 1f433 1f434 1f435 1f436 1f437 1f438 1f439 1f43a 1f43b 1f43c 1f43d 1f43e 1f440 1f442 1f443 1f444 1f445 1f446 1f447 1f448 1f449 1f44a 1f44b 1f44c 1f44d 1f44e 1f44f 1f450 1f451 1f452 1f453 1f454 1f455 1f456 1f457 1f458 1f459 1f45a 1f45b 1f45c 1f45d 1f45e 1f45f 1f460 1f461 1f462 1f463 1f464 1f465 1f466 1f467 1f468 1f469 1f46a 1f46b 1f46c 1f46d 1f46e 1f46f 1f470 1f471 1f472 1f473 1f474 1f475 1f476 1f477 1f478 1f479 1f47a 1f47b 1f47c 1f47d 1f47e 1f47f 1f480 1f481 1f482 1f483 1f484 1f485 1f486 1f487 1f488 1f489 1f48a 1f48b 1f48c 1f48d 1f48e 1f48f 1f490 1f491 1f492 1f493 1f494 1f495 1f496 1f497 1f498 1f499 1f49a 1f49b 1f49c 1f49d 1f49e 1f49f 1f4a0 1f4a1 1f4a2 1f4a3 1f4a4 1f4a5 1f4a6 1f4a7 1f4a8 1f4a9 1f4aa 1f4ab 1f4ac 1f4ad 1f4ae 1f4af 1f4b0 1f4b1 1f4b2 1f4b3 1f4b4 1f4b5 1f4b6 1f4b7 1f4b8 1f4b9 1f4ba 1f4bb 1f4bc 1f4bd 1f4be 1f4bf 1f4c0 1f4c1 1f4c2 1f4c3 1f4c4 1f4c5 1f4c6 1f4c7 1f4c8 1f4c9 1f4ca 1f4cb 1f4cc 1f4cd 1f4ce 1f4cf 1f4d0 1f4d1 1f4d2 1f4d3 1f4d4 1f4d5 1f4d6 1f4d7 1f4d8 1f4d9 1f4da 1f4db 1f4dc 1f4dd 1f4de 1f4df 1f4e0 1f4e1 1f4e2 1f4e3 1f4e4 1f4e5 1f4e6 1f4e7 1f4e8 1f4e9 1f4ea 1f4eb 1f4ec 1f4ed 1f4ee 1f4ef 1f4f0 1f4f1 1f4f2 1f4f3 1f4f4 1f4f5 1f4f6 1f4f7 1f4f9 1f4fa 1f4fb 1f4fc 1f500 1f501 1f502 1f503 1f504 1f505 1f506 1f507 1f508 1f509 1f50a 1f50b 1f50c 1f50d 1f50e 1f50f 1f510 1f511 1f512 1f513 1f514 1f515 1f516 1f517 1f518 1f519 1f51a 1f51b 1f51c 1f51d 1f51e 1f51f 1f520 1f521 1f522 1f523 1f524 1f525 1f526 1f527 1f528 1f529 1f52a 1f52b 1f52c 1f52d 1f52e 1f52f 1f530 1f531 1f532 1f533 1f534 1f535 1f536 1f537 1f538 1f539 1f53a 1f53b 1f53c 1f53d 1f550 1f551 1f552 1f553 1f554 1f555 1f556 1f557 1f558 1f559 1f55a 1f55b 1f55c 1f55d 1f55e 1f55f 1f560 1f561 1f562 1f563 1f564 1f565 1f566 1f567 1f5fb 1f5fc 1f5fd 1f5fe 1f5ff 1f680 1f681 1f682 1f683 1f684 1f685 1f686 1f687 1f688 1f689 1f68a 1f68b 1f68c 1f68d 1f68e 1f68f 1f690 1f691 1f692 1f693 1f694 1f695 1f696 1f697 1f698 1f699 1f69a 1f69b 1f69c 1f69d 1f69e 1f69f 1f6a0 1f6a1 1f6a2 1f6a3 1f6a4 1f6a5 1f6a6 1f6a7 1f6a8 1f6a9 1f6aa 1f6ab 1f6ac 1f6ad 1f6ae 1f6af 1f6b0 1f6b1 1f6b2 1f6b3 1f6b4 1f6b5 1f6b6 1f6b7 1f6b8 1f6b9 1f6ba 1f6bb 1f6bc 1f6bd 1f6be 1f6bf 1f6c0 1f6c1 1f6c2 1f6c3 1f6c4 1f6c5 203c 2049 2122 2139 2194 2195 2196 2197 2198 2199 21a9 21aa 23-20e3 231a 231b 23e9 23ea 23eb 23ec 23f0 23f3 24c2 25aa 25ab 25b6 25c0 25fb 25fc 25fd 25fe 2600 2601 260e 2611 2614 2615 261d 2648 2649 264a 264b 264c 264d 264e 264f 2650 2651 2652 2653 2660 2663 2665 2666 2668 267b 267f 2693 26a0 26a1 26aa 26ab 26bd 26be 26c4 26c5 26ce 26d4 26ea 26f2 26f3 26f5 26fa 26fd 2702 2705 2708 2709 270a 270b 270c 270f 2712 2714 2716 2728 2733 2734 2744 2747 274c 274e 2753 2754 2755 2757 2764 2795 2796 2797 27a1 27b0 27bf 2934 2935 2b05 2b06 2b07 2b1b 2b1c 2b50 2b55 30-20e3 3030 303d 31-20e3 32-20e3 3297 3299 33-20e3 34-20e3 35-20e3 36-20e3 37-20e3 38-20e3 39-20e3 a9 ae e50a 1f004 1f0cf 1f170 1f171 1f17e 1f17f 1f18e 1f191 1f192 1f193 1f194 1f195 1f196 1f197 1f198 1f199 1f19a 1f1e6 1f1e7 1f1e8-1f1f3 1f1e8 1f1e9-1f1ea 1f1e9 1f1ea-1f1f8 1f1ea 1f1eb-1f1f7 1f1eb 1f1ec-1f1e7 1f1ec 1f1ed 1f1ee-1f1f9 1f1ee 1f1ef-1f1f5 1f1ef 1f1f0-1f1f7 1f1f0 1f1f1 1f1f2 1f1f3 1f1f4 1f1f5 1f1f6 1f1f7-1f1fa 1f1f7 1f1f8 1f1f9 1f1fa-1f1f8 1f1fa 1f1fb 1f1fc 1f1fd 1f1fe 1f1ff 1f201 1f202 1f21a 1f22f 1f232 1f233 1f234 1f235 1f236 1f237 1f238 1f239 1f23a 1f250 1f251'.split(' '),

            emojiListSize = emojiList.length,
            emojiIndex = 0,
            emojiDisable = false,
            emojiToggle = false,
            $divsmilies = createBtn('emoji', '1f636'),
            $emoji_wrap = $('<div>', {
                class: 'cb-bubcloud-options-list'
            }),
            $emoji_ul = $('<div>', {
                id: 'emoji_list'
            }),
            createEmojiList = function() {
                emojiDisable = true;

                var stop = emojiIndex + 70;

                if (stop > emojiListSize) stop = emojiListSize;

                for (emojiIndex; emojiIndex < stop; emojiIndex++) {
                    var element = emojiList[emojiIndex],
                        $item = $('<img>', {
                            class: 'emoji',
                            alt: element,
                            src: 'http://twemoji.maxcdn.com/16x16/' + element + '.png'
                        }),
                        $li = $('<li>');
                    $item.appendTo($li).appendTo($emoji_ul);
                }

                emojiIndex = stop;
                emojiDisable = false;
            },

            $media = $('<div>', {
                id: 'media'
            }),

            $hasNewMess = $('<div>', {
                id: 'has_new_message'
            }),

            $soundControl = $('<div>', {
                id: 'sound_control'
            }),

            createAudio = function(id) {
                var cdn = '//baivong.github.io/cdn/bubcloud/';

                return $('<audio>', {
                    id: 'chatbox-' + id + '-audio',
                    src: cdn + id + '.mp3',
                    preload: 'auto'
                });
            },
            $audio = {
                buzz: createAudio('buzz'),
                alert: createAudio('alert'),
                message: createAudio('message'),
                online: createAudio('online'),
                offline: createAudio('offline')
            },
            mute = false,
            playAudio = function(id) {
                if (!mute) $audio[id][0].play();
            },

            $buzz = createBtn('buzz', '1f4a5'),
            buzzDisable = false,

            $roboto = $('<link>', {
                href: '//fonts.googleapis.com/css?family=Roboto:300,400,400i,700,900&amp;subset=latin-ext,vietnamese',
                rel: 'stylesheet',
                type: 'text/css'
            }),

            themeCookie = my_getcookie('bubcloud'),

            firstLoad = true,
            autoLogin = true,

            lastMessSize = 0,
            currentMessSize = 0,
            recentMessSize = 0;

        if (my_getcookie('autologin') === 'off') autoLogin = false;

        $head.append($roboto);

        if (themeCookie !== '' && themeCookie !== null) {
            themeCookie = themeCookie.split('|');

            $head.append($('<style>', {
                id: 'bubcloudChat',
                type: 'text/css',
                text: 'a:focus,a:hover{color:#' + themeCookie[0] + '}a{color:#' + themeCookie[1] + '}.msg-me .msg-act{background:#' + themeCookie[1] + '}'
            }));
        }

        // $head.find('link[href$="-ltr.css"]').attr('href', '/chatbox.css');

        $body.prepend($media);
        $.each($audio, function(key) {
            $body.append($audio[key]);
        });

        $body.append($hasNewMess);
        $hasNewMess.on('click', function() {
            $hasNewMess.removeClass('active');
            lastMessSize = currentMessSize;

            $contents.animate({
                scrollTop: 0
            }, 200);
        });

        $body.find('.chatbox-title').after($soundControl);
        $soundControl.on('click', function() {
            if (!mute) {
                $soundControl.addClass('disable');
                mute = true;
            } else {
                $soundControl.removeClass('disable');
                mute = false;
            }
        });


        $body.on('click', '.msg-avatar', function() {
            $mess[0].value += this.dataset.name;
            $mess.focus();
        }).on('click', '#chatbox_option_disco', function() {
            my_setcookie('autologin', 'off');
            autoLogin = false;
        }).on('click', '#chatbox_option_co', function() {
            my_setcookie('autologin', 'on');
            autoLogin = true;
        }).on('click', '.chat-title', function(e) {
            e.preventDefault();

            if ($body.hasClass('toggleMediaList')) {
                $media.empty();
                $body.removeClass('toggleMediaList');
            } else {
                $body.toggleClass('toggleUsersList');
            }
        }).on('click', '#chatbox', function() {
            if ($body.hasClass('toggleUsersList')) $body.removeClass('toggleUsersList');
        }).on('click', '.cb-bubcloud-media', function(e) {
            e.preventDefault();

            $media.html('<iframe width="560" height="315" src="' + this.dataset.video + '" frameborder="0" allowfullscreen></iframe>');
            if (!$body.hasClass('toggleMediaList')) $body.addClass('toggleMediaList');
        });


        $divsmilies.one('click', function() {

            $divsmilies.append($emoji_wrap.append($emoji_ul));
            $emoji_ul.width(229 + getScrollbarWidth());

            createEmojiList();
            $emoji_ul.scrollTop(0);

            $emoji_ul.on('scroll', function() {
                if (emojiDisable || (emojiIndex >= emojiList.length) || ($emoji_ul.scrollTop() + $emoji_ul.height() + 50 < $emoji_ul[0].scrollHeight)) return;

                createEmojiList();
            });

        }).on('click', '.emoji', function() {
            var val = $mess.val().trim(),
                src = this.src;

            if (val === '') {
                src = src.replace('/16x16/', '/36x36/');
            } else {
                val += ' ';
            }

            $mess.val(val + '[img]' + src + '[/img]');
            zzChatbox.send();

        }).on('click', function() {
            animateToggle($(this));
        });


        $buzz.on('click', function(e) {
            e.preventDefault();

            if (buzzDisable) return;
            buzzDisable = true;
            $buzz.addClass('disable');

            if ($contents.find('img[alt="BUZZ"]:first').closest('.msg-me').length) return;

            $mess.val('/buzz');
            zzChatbox.send();
        });

        $mess.on('input', function() {
            if ($mess.val().trim() === '/buzz') $mess.val('');
        });


        zzChatbox.nolisten = false;
        zzChatbox.refresh = function(data) {
            var usersList = {
                    online: [],
                    away: []
                },

                _chatbox = this;


            if (data.error) {
                $body.html(data.error);
            } else {
                if (_chatbox.connected) {
                    $chatbox_messenger_form.css({
                        display: 'block',
                        visibility: 'visible'
                    });
                    $chatbox_display_archive.show();
                    $chatbox_option_co.hide();
                    $chatbox_option_disco.add($chatbox_footer).show();

                    if (data.lastModified) _chatbox.listenParams.lastModified = data.lastModified;
                } else {
                    $chatbox_messenger_form.css({
                        display: 'none',
                        visibility: 'hidden'
                    });
                    $chatbox_option_co.show();
                    $chatbox_option_disco.add($chatbox_footer).hide();
                    $chatbox_display_archive.hide();
                }

                if (data.users) {
                    _chatbox.users = [];
                    $online_users.add($away_users).empty();
                    $member_title.hide();

                    for (var i in data.users) {
                        var user = data.users[i];
                        _chatbox.users[user.id] = user;
                        var username = '<span style="color:' + user.color + '">' + (user.admin ? '@ ' : '') + '<span class="chatbox-username chatbox-user-username" data-user="' + user.id + '">' + user.username + '</span>' + '</span>';
                        var list = '';
                        if (user.online) {
                            list = '.online-users';
                            usersList.online.push(user.id);
                        } else {
                            list = '.away-users';
                            usersList.away.push(user.id);
                        }
                        $body.find(list).append('<li>' + username + '</li>');
                    }

                    if (!$online_users.is(':empty')) $body.find('.member-title.online').show();
                    if (!$away_users.is(':empty')) $body.find('.member-title.away').show();
                }

                if (data.messages) {
                    currentMessSize = data.messages.length;
                    var scroll = !_chatbox.messages || lastMessSize !== currentMessSize;
                    _chatbox.messages = data.messages;

                    if (!_chatbox.messages) return;


                    var recentUser = 0,
                        recentDay = '',
                        recentTime = 0,
                        $recentMsg,

                        messSize = _chatbox.messages.length,
                        max = messSize - 1;

                    $contents.empty();

                    $.each(_chatbox.messages, function(i, val) {
                        var message = val,
                            currentUser = message.userId + '',
                            datetime = message.datetime.split(' '),

                            checkDay = function() {
                                return datetime.length === 1 || (datetime.length === 2 && recentDay === datetime[1]);
                            },
                            checkTime = function() {
                                if (!checkDay()) {
                                    return false;
                                } else {
                                    var time = datetime[0].split(':'),
                                        delay = 0;
                                    time = parseInt(time[0], 10) * 60 + parseInt(time[1], 10);

                                    delay = (recentTime === 0) ? 0 : time - recentTime;
                                    recentTime = time;

                                    return (0 <= delay && delay < 5);
                                }
                            },

                            $item = $('<div>', {
                                class: 'msg-row clearfix'
                            }),
                            $msg = $('<div>', {
                                class: (message.action || 'other') + '-act clearfix',
                                'data-time': datetime[0]
                            });

                        if (!checkDay()) $contents.prepend($('<div>', {
                            class: 'msg-row msg-day clearfix',
                            html: '<span>' + datetime[1] + '</span>'
                        }));

                        if (currentUser === '-10') {
                            if (message.msg.indexOf('<script>') !== -1) {
                                message.msg = message.msg.replace(/<script>.+<\/script>/, '');
                                if (autoLogin) _chatbox.connect();
                            }

                            if (!firstLoad && i === max) {
                                if (message.action === 'connect') {
                                    playAudio('online');
                                } else if (message.action === 'disconnect') {
                                    playAudio('offline');
                                } else {
                                    playAudio('alert');
                                }
                            }

                            $item.addClass('alert');
                            $contents.prepend($item.prepend($msg.html(message.msg)));

                            recentUser = 0;
                            currentMessSize--;
                        } else {
                            var $avatar = $('<div>', {
                                    class: 'msg-avatar',
                                    'data-user': currentUser,
                                    'data-name': message.username,
                                    html: '<div class="msg-avatar-circle"><img src="' + message.user.avatar + '" /></div>'
                                }),
                                $wrap = $('<div>', {
                                    class: 'msg-wrap'
                                }),

                                regexLink = /<a href="([^"]+)"[^>]+>(.*)?<\/a>/,
                                matchLink = message.msg.match(regexLink),

                                regexMedia = /<(iframe|embed)(.*)?src=\"([^"]+)"[^>]+>(<\/(iframe|embed)>)?/,
                                matchMedia = message.msg.match(regexMedia),

                                testYoutube = function(url) {
                                    var match = url.match(/^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*/);

                                    if (match && match[1].length == 11) return genYoutubeLink(match[1]);
                                    return false;
                                },

                                testDailyMotion = function(url) {
                                    var match = url.match(/^.+(dailymotion\.com(\/embed)?\/(video|hub|playlist\/[^\/]+)|dai\.ly)\/([^_#]+)?[^#]*(#video=([^_&]+))?/);
                                    match = match ? match[6] || match[4] : null;

                                    if (match) return genDailymotionLink(match);
                                    return false;
                                },

                                genVideoLink = function(regex, match) {
                                    var ytb = testYoutube(match),
                                        daily = testDailyMotion(match);

                                    if (ytb) {
                                        message.msg = message.msg.replace(regex, ytb);
                                    } else if (daily) {
                                        message.msg = message.msg.replace(regex, daily);
                                    }
                                };


                            if (_chatbox.userId + '' === currentUser) {
                                $item.addClass('msg-me');
                            } else {
                                if (usersList.online.indexOf(currentUser) !== -1) {
                                    $avatar.addClass('online');
                                } else if (usersList.away.indexOf(currentUser) !== -1) {
                                    $avatar.addClass('away');
                                } else {
                                    $avatar.addClass('offline');
                                }
                            }

                            if (/<span style="[^"]+">\/buzz<\/span>/.test(message.msg)) {
                                message.msg = '<img src="//twemoji.maxcdn.com/72x72/1f4a5.png" alt="BUZZ">';

                                if (!firstLoad && i === max) {
                                    if (!$contents.hasClass('chatbox-buzz')) {
                                        $contents.addClass('chatbox-buzz');
                                        playAudio('buzz');
                                    }

                                    setTimeout(function() {
                                        if ($contents.hasClass('chatbox-buzz')) $contents.removeClass('chatbox-buzz');
                                    }, 1000);
                                }
                            } else if (matchLink) {
                                genVideoLink(regexLink, matchLink[1]);
                            } else if (matchMedia) {
                                genVideoLink(regexMedia, matchMedia[3]);
                            }

                            if (message.msg.replace(/<[^>]*>/g, '').trim() === '') $msg.addClass('no-text');

                            if (checkTime() && recentUser === currentUser) {
                                $wrap = $recentMsg;
                            } else {
                                $contents.prepend($item);
                                $item.append($avatar).append($wrap);
                                $recentMsg = $wrap;
                            }
                            $wrap.prepend($msg.html(message.msg));

                            recentUser = currentUser;
                        }

                        if (!checkDay()) recentDay = datetime[1];
                    });

                    var $lastBuzz = $contents.find('img[alt="BUZZ"]:first');
                    if ($lastBuzz.length && $lastBuzz.closest('.msg-me').length) {
                        if (!$buzz.hasClass('disable')) $buzz.addClass('disable');
                    } else {
                        if ($buzz.hasClass('disable')) {
                            $buzz.removeClass('disable');
                            buzzDisable = false;
                        }
                    }

                    if (firstLoad) {
                        lastMessSize = currentMessSize;
                    } else {

                        if (scroll) {
                            if ($contents.find('.msg-row:first').hasClass('msg-me')) {
                                if ($hasNewMess.hasClass('active')) $hasNewMess.removeClass('active');
                                $contents.scrollTop(0);
                            } else {
                                var newMessSize = currentMessSize - lastMessSize;

                                if ($contents.scrollTop() > 0 && newMessSize > 0 && recentMessSize !== newMessSize) {
                                    $hasNewMess.text('Có ' + newMessSize + ' tin nhắn mới').addClass('active');
                                    playAudio('message');
                                }
                                recentMessSize = newMessSize;
                            }

                            if ($contents.scrollTop() == 0) lastMessSize = currentMessSize;
                        }

                    }

                    firstLoad = false;
                }
            }
        };

        $body.addClass('active');
        $mess.focus();
    });

})(jQuery);
