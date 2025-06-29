"use strict";
class Anime extends Sprite {
    constructor(element) {
        super(element);
        this.ensoleillé_ = false;
        this.v_ = 0;
        this.ypoussé_ = 140;
        this.entraindepousser_ = false;
    }
    setLimites(zone) {
        this.xmin_ = zone.getX();
        this.xmax_ = zone.getX() + zone.getWidth() - this.getWidth();
        this.ymin_ = zone.getY();
        this.ymax_ = zone.getX() + zone.getHeight() - this.getHeight();
    }
    droite() { }
    gauche() { }
    calculDestination() {
        this.ydestinationpousse_ = this.getY() - this.ypoussé_;
        this.ydestinationdepousse_ = this.getY();
    }
    ensoleiller() {
        if (this.ensoleillé_ == false) {
            this.ensoleillé_ = true;
        }
        else {
            this.ensoleillé_ = false;
        }
        if (this.ensoleillé_ == true) {
            this.v_ = -10;
            console.log("pousse");
        }
        else {
            this.v_ = 10;
            console.log("dépousse");
        }
        if (this.entraindepousser_ == false) {
            this.entraindepousser_ = true;
            this.animer();
        }
    }
    bouger() {
        this.setY(this.getY() + this.v_);
        if (this.getY() < this.ydestinationpousse_) {
            this.figer();
            this.entraindepousser_ = false;
        }
        if (this.getY() > this.ydestinationdepousse_) {
            this.figer();
            this.entraindepousser_ = false;
        }
    }
    animer() {
        this.timerPousse_ = setInterval(() => { this.bouger(); }, 1000 / 10);
    }
    figer() {
        clearInterval(this.timerPousse_);
    }
}
