"use strict";
class Pacman extends Perso {
    constructor(element, scene, px, py) {
        super(element, scene, px, py);
        this.setImage("assets/jeux/Labyrinthe/Pacman.png", this.scene_.pas_, this.scene_.pas_);
        this.ecouteurDeplacer = (evt) => { this.deplacer(evt); };
        this.setXY(this.px_, this.py_);
    }
    deplacer(evt) {
        if (this.estArrive() != true) {
            if (evt.key == "ArrowLeft") {
                this.px_ -= 1;
                if (this.estArrive() == true && this.scene_.compteur == 0) {
                    this.scene_.gagner();
                }
                if (this.estArrive() == true && this.scene_.compteur != 0) {
                    this.scene_.perdre();
                }
                this.px_ += 1;
                this.setRotation(180);
                this.gauche();
            }
            else if (evt.key == "ArrowRight") {
                this.px_ += 1;
                if (this.estArrive() == true && this.scene_.compteur == 0) {
                    this.scene_.gagner();
                }
                if (this.estArrive() == true && this.scene_.compteur != 0) {
                    this.scene_.perdre();
                }
                this.px_ -= 1;
                this.setRotation(0);
                this.droite();
            }
            else if (evt.key == "ArrowUp") {
                this.py_ -= 1;
                if (this.estArrive() == true && this.scene_.compteur == 0) {
                    this.scene_.gagner();
                }
                if (this.estArrive() == true && this.scene_.compteur != 0) {
                    this.scene_.perdre();
                }
                this.py_ += 1;
                this.setRotation(270);
                this.haut();
            }
            else if (evt.key == "ArrowDown") {
                this.py_ += 1;
                if (this.estArrive() == true && this.scene_.compteur == 0) {
                    this.scene_.gagner();
                }
                if (this.estArrive() == true && this.scene_.compteur != 0) {
                    this.scene_.perdre();
                }
                this.py_ -= 1;
                this.setRotation(90);
                this.bas();
            }
        }
        for (let i = 0; i < this.scene_.fantomes.length; i++) {
            if (this.px_ == this.scene_.fantomes[i].px_ && this.py_ == this.scene_.fantomes[i].py_) {
                this.scene_.perdre();
                console.log("pause");
            }
        }
        this.manger();
        console.log(this.scene_.carte_, this.scene_.pastilles);
    }
    animer() {
        window.addEventListener("keydown", this.ecouteurDeplacer);
    }
    figer() {
        window.removeEventListener("keydown", this.ecouteurDeplacer);
    }
    estArrive() {
        if (this.scene_.carte_[this.py_][this.px_] == 9) {
            return true;
        }
        else {
            return false;
        }
    }
    manger() {
        for (let i = 0; i < this.scene_.fantomes.length; i++) {
            if ((this.px_ != this.scene_.fantomes[i].px_) || (this.py_ != this.scene_.fantomes[i].py_)) {
                if (this.scene_.pastilles[this.py_][this.px_] != null) {
                    this.scene_.retirerPastille(this.py_, this.px_);
                    console.log("pastille mangée");
                }
            }
            else {
                console.log("pause");
                this.scene_.perdre();
            }
        }
    }
}
