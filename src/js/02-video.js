import Player from '@vimeo/player';
import throttle from "lodash.throttle";

const STORAGE_KEY = "videoplayer-current-time";

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(onPlayerTimePauses, 1000));

  const storedTime = JSON.parse(localStorage.getItem(STORAGE_KEY));
    player.setCurrentTime(storedTime||0);

  function onPlayerTimePauses (e) {
    const time = e.seconds;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(time));
  };


