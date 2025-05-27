"use strict";
class Fantome extends Perso {
    constructor(element, scene, px, py) {
        super(element, scene, px, py);
        this.px_ = px;
        this.py_ = py;
        this.setImage("assets/jeux/Labyrinthe/Fantome.png", this.scene_.pas_, this.scene_.pas_);
        this.setXY(this.px_, this.py_);
    }
    deplacer() {
        let n = Math.random();
        if (n >= 0 && n < 0.3) {
            if (this.px_ > this.scene_.pacman_.px_) {
                this.gauche();
            }
            else {
                this.droite();
            }
            console.log("déplacement horizontal");
        }
        if (n >= 0.3 && n < 0.6) {
            if (this.py_ > this.scene_.pacman_.py_) {
                this.haut();
            }
            else {
                this.bas();
            }
            console.log("déplacement vertical");
        }
        if (n >= 0.6 && n < 0.7) {
            this.gauche();
            console.log("déplacement gauche");
        }
        if (n >= 0.7 && n < 0.8) {
            this.droite();
            console.log("déplacement droite");
        }
        if (n >= 0.8 && n < 0.9) {
            this.haut();
            console.log("déplacement haut");
        }
        if (n >= 0.9 && n < 1) {
            this.bas();
            console.log("déplacement bas");
        }
        if (this.px_ == this.scene_.pacman_.px_ && this.py_ == this.scene_.pacman_.py_) {
            this.scene_.perdre();
            console.log("pause");
        }
        let X = this.scene_.pas_ * (this.px_) + this.scene_.x0_;
        let Y = this.scene_.pas_ * (this.py_) + this.scene_.y0_;
        this.setXY(X, Y);
    }
    animer() {
        this.timerDeplacer = setInterval(() => {
            this.deplacer();
        }, 2000 / 3);
        console.log("animer fantôme");
    }
    figer() {
        clearInterval(this.timerDeplacer);
    }
}
