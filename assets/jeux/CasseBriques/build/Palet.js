"use strict";
class Palet extends Anime {
    constructor(element, xjeu) {
        super(element);
        this.xjeu_ = xjeu;
        this.setImage("Palet.png", 100, 25);
        this.setBorderRadius("2px");
        this.setShadow("2px 2px 2px rgb(170,170,170)");
        this.ecouteurSuivre = (evt) => { this.suivre(evt); };
    }
    suivre(evt) {
        let futurx = evt.clientX - this.xjeu_;
        if (futurx >= this.xmin_ && futurx <= this.xmax_) {
            this.setX(futurx);
        }
    }
    animer() {
        window.addEventListener("mousemove", this.ecouteurSuivre);
        this.xjeu_ += (this.getWidth() / 2);
    }
    figer() {
        window.removeEventListener("mousemove", this.ecouteurSuivre);
    }
}
