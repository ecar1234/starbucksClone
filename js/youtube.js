

var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);



function onYouTubeIframeAPIReady() {
    new YT.Player('player', {
        videoId: 'An6LvWQuj_8',
        playerVars: {
            autoplay: true,
            loop: true,
            palylist: 'An6LvWQuj_8'
        },
        events: {
            'onReady': onPlayerReady,
        }
    });
}


function onPlayerReady(event) {
  event.target.mute();
}


