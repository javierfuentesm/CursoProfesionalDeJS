class MediaPlayer {
  constructor(config) {
    this.media = config.el;
    this.plugins = config.plugins || [];
    this._initPlugins();
  }

  _initPlugins() {
    this.plugins.forEach(plugin => {
      plugin.run(this);
    });
  }
  play() {
    this.media.play();
  }

  pause() {
    this.media.pause();
  }

  togglePlay() {
    if (this.media.paused) {
      this.media.play();
    } else {
      this.media.pause();
    }
  }
  mute() {
    this.media.muted = true;
  }
  unmute() {
    this.media.muted = false;
  }

  toggleMute() {
 /*    if (this.media.muted === true) {
      this.unmute();
    } else {
      this.mute();
    } */

   (this.media.muted) ? this.unmute() : this.mute()
  }
}
/*  function MediaPlayer(config) {
        this.media = config.el;
      }

      MediaPlayer.prototype.play = function() {
        this.media.play();
      };

      MediaPlayer.prototype.pause = function() {
        this.media.pause();
      };

      MediaPlayer.prototype.togglePlay = function() {
        if (this.media.paused) {
          this.play();
        } else {
          this.pause();
        }
      }; */

export default MediaPlayer;