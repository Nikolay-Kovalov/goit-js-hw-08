import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');

const player = new Player(iframe);

    player.on('timeupdate',  throttle(onPlay, 1000));
  function onPlay(data) {
      localStorage.setItem("videoplayer-current-time", JSON.stringify(data.seconds)); 
    };


player.setCurrentTime(localStorage.getItem("videoplayer-current-time")).then(function(seconds) {
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            break;
        default:
            break;
    }
});



