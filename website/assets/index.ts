import MediaPlayer from "@rjfm/mediaplayer";
import AutoPlay from "@rjfm/mediaplayer/lib/plugins/AutoPlay";
import AutoPause from "@rjfm/mediaplayer/lib/plugins/AutoPause";
import Ads from "@rjfm/mediaplayer/lib/plugins/Ads/";

const video = document.querySelector("video");
const player = new MediaPlayer({
  el: video,
  plugins: [new AutoPlay(), new AutoPause(), new Ads()]
});

const button :HTMLElement = document.getElementById("play");
button.onclick = () => player.togglePlay();
const button2 :HTMLElement= document.getElementById("mute");
button2.onclick = () => player.toggleMute();


if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(error=>{
        console.log(error.message)
    });
}   