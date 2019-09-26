class MediaPlayer {
  media:HTMLMediaElement;
  plugins:Array<any>;
  container: HTMLElement;

  constructor(config) {
    this.media = config.el;
    this.plugins = config.plugins || [];
    this.initPlayer();
    this.initPlugins();
  }

  initPlayer(){
    this.container = document.createElement('div');
    this.container.style.position = 'relative';
    this.media.parentNode.insertBefore(this.container, this.media);
    this.container.appendChild(this.media);
  }

  private initPlugins() {
    /*   
    const player = {

      //Con Typescript ya no es ncesario porqueya existe private
    play: () => this.play(),
      pause: () => this.pause(),
      media: this.media,
      get muted() {
        return this.media.muted;
      },

      set muted(value) {
        this.media.muted = value;
      }
    }; */

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

    this.media.muted ? this.unmute() : this.mute();
  }
}
export default MediaPlayer;
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


