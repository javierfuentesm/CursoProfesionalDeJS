"use strict";
exports.__esModule = true;
var MediaPlayer = /** @class */ (function () {
    function MediaPlayer(config) {
        this.media = config.el;
        this.plugins = config.plugins || [];
        this.initPlayer();
        this.initPlugins();
    }
    MediaPlayer.prototype.initPlayer = function () {
        this.container = document.createElement('div');
        this.container.style.position = 'relative';
        this.media.parentNode.insertBefore(this.container, this.media);
        this.container.appendChild(this.media);
    };
    MediaPlayer.prototype.initPlugins = function () {
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
        var _this = this;
        this.plugins.forEach(function (plugin) {
            plugin.run(_this);
        });
    };
    MediaPlayer.prototype.play = function () {
        this.media.play();
    };
    MediaPlayer.prototype.pause = function () {
        this.media.pause();
    };
    MediaPlayer.prototype.togglePlay = function () {
        if (this.media.paused) {
            this.media.play();
        }
        else {
            this.media.pause();
        }
    };
    MediaPlayer.prototype.mute = function () {
        this.media.muted = true;
    };
    MediaPlayer.prototype.unmute = function () {
        this.media.muted = false;
    };
    MediaPlayer.prototype.toggleMute = function () {
        /*    if (this.media.muted === true) {
          this.unmute();
        } else {
          this.mute();
        } */
        this.media.muted ? this.unmute() : this.mute();
    };
    return MediaPlayer;
}());
exports["default"] = MediaPlayer;
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
