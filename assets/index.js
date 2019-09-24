import MediaPlayer from "./MediaPlayer.js";
import AutoPlay from "./plugins/AutoPlay.js";
import AutoPause from "./plugins/AutoPause.ts";

const video = document.querySelector("video");
const player = new MediaPlayer({
  el: video,
  plugins: [new AutoPlay(), new AutoPause()]
});

const button = document.getElementById("play");
button.onclick = () => player.togglePlay();
const button2 = document.getElementById("mute");
button2.onclick = () => player.toggleMute();


if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(error=>{
        console.log(error.message)
    });
}   