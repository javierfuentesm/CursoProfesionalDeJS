class AutoPause {
  constructor() {
    this.threshold = 0.25;
    //Vamos a establecer el this permanentemente a la instancia del proyecto o con un arrow function  se puede omitir
     this.handleIntersection = this.handleIntersection.bind(this);
     this.handleVisibilityChange = this.handleVisibilityChange.bind(this);

  }
  run(player) {
    this.player = player;
    const observer = new IntersectionObserver(this.handleIntersection, {
      threshold: this.threshold
    });
    observer.observe(this.player.media);

    document.addEventListener("visibilitychange", this.handleVisibilityChange);
  }

  //Con el arrow function le pasamos automaticamente el scope de la misma funcon
  handleIntersection(entries) {
    const entry = entries[0];

    const isVisible = entry.intersectionRatio >= this.threshold;
    if (isVisible) {
      this.player.play();
    } else {
      this.player.pause();
    }
  }

  handleVisibilityChange (){
    const isVisible = document.visibilityState === "visible";
    if (isVisible) {
      this.player.play();
    } else {
      this.player.pause();
    }
  };
}
export default AutoPause;

/* class AutoPause {
  constructor() {
    this.threshold = 0.25;
    //Vamos a establecer el this permanentemente a la instancia del proeycto
    this.handleIntersection = this.handleIntersection.bind(this);
  }
  run(player) {
    this.player = player;
    const observer = new IntersectionObserver(this.handleIntersection, {
      threshold: this.threshold
    });
    observer.observe(this.player.media);
  }


    handleIntersection = entries => {
    const entry = entries[0];

    const isVisible = entry.intersectionRatio >= this.threshold;
    if (isVisible) {
      this.player.play();
    } else {
      this.player.pause();
    }
  };

  handleVisibilityChange = () => {
    const isVisible = document.visibilityState === "visible";
    if (isVisible) {
      this.player.play();
    } else {
      this.player.pause();
    }
  };
}
export default AutoPause;
 */
