"use strict";
class Jeu extends Scene {
    constructor(element) {
        super(element, false);
        this.tabriques_ = [];
        this.zone_ = new Sprite(document.getElementById("zone"));
        this.zone_.setXY(10, 20);
        this.zone_.setWidth(this.getWidth() - 20);
        this.zone_.setHeight(this.getHeight() - 30);
        this.compteur_ = new Sprite(document.getElementById("compteur"));
        this.compteur_.getElement().style.borderRadius = "5px";
        this.compteur_.getElement().style.border = "solid 2px";
        this.compteur_.getElement().style.fontSize = "16px";
        this.compteur_.getElement().style.textAlign = "center";
        this.compteur_.setDimension(150, 15);
        this.compteur_.setXY((this.getWidth() / 2) - (this.compteur_.getWidth() / 2), -16);
        this.message_ = new Sprite(document.getElementById("messagefin"));
        this.message_.getElement().style.borderRadius = "5px";
        this.message_.getElement().style.border = "solid 5px";
        this.message_.getElement().style.fontSize = "55px";
        this.message_.getElement().style.display = "flex";
        this.message_.getElement().style.textAlign = "center";
        this.message_.getElement().style.justifyContent = "center";
        this.message_.getElement().style.padding = "30px";
        this.message_.setDimension(200, 60);
        let X = (this.getWidth() / 2) - (this.message_.getWidth() / 2) - 10;
        let Y = (this.getHeight() / 2) - (this.message_.getHeight() / 2) - 50;
        this.message_.setXY(X, Y);
        this.message_.getElement().style.zIndex = "5";
        this.ecouteurRedémarrer = (evt) => { console.log("restart"); evt.stopPropagation(); this.restart(); };
    }
    start() {
        this.compteur = 0;
        this.compteur_.getElement().textContent = this.compteur + " briques détruites";
        this.message_.getElement().style.visibility = "hidden";
        this.ball_ = new Balle(document.createElement("img"), this);
        this.appendChild(this.ball_);
        let windowbox = this.getParentNode().getBoundingClientRect();
        let xjeu = (windowbox.width - this.getWidth()) / 2;
        console.log("ici", xjeu);
        this.palet_ = new Palet(document.createElement("img"), xjeu);
        this.appendChild(this.palet_);
        this.palet_.setXY(this.getWidth() / 2 - this.palet_.getWidth() / 2, this.getHeight() - this.palet_.getHeight() - 15);
        this.ball_.setLimites(this.zone_);
        setTimeout(() => { this.ball_.animer(); }, 0);
        this.palet_.setLimites(this.zone_);
        setTimeout(() => { this.palet_.animer(); }, 0);
        this.tabriques_ = [];
        let nbcolonnes = 10;
        let nblignes = 4;
        for (let i = 0; i < nblignes; i++) {
            for (let j = 0; j < nbcolonnes; ++j) {
                let brique = new Sprite(document.createElement("img"));
                brique.setImage("Brique.png", 40, 26);
                this.appendChild(brique);
                brique.setXY((j + 1) * this.getWidth() / (nbcolonnes + 2), (this.getHeight() / 2) / (nblignes + 1) * (i + 1));
                this.tabriques_.push(brique);
            }
        }
        console.log(this.tabriques_);
        this.message_.addEventListener("mousedown", this.ecouteurRedémarrer);
    }
    pause() {
        setTimeout(() => { this.ball_.figer(); }, 0);
        setTimeout(() => { this.palet_.figer(); }, 0);
    }
    unpause() {
    }
    clean() {
        this.removeChild(this.ball_);
        this.removeChild(this.palet_);
        for (let i = 0; i < this.tabriques_.length; i++) {
            this.removeChild(this.tabriques_[i]);
        }
        this.message_.removeEventListener("mousedown", this.ecouteurRedémarrer);
    }
    augmenterScore() {
        this.compteur += 1;
        this.compteur_.getElement().textContent = this.compteur + " briques détruites";
        if (this.compteur == 40) {
            this.gagner();
        }
    }
    gagner() {
        this.pause();
        this.message_.getElement().textContent = "Gagné !";
        this.message_.getElement().style.backgroundColor = "#8EF4C0";
        this.message_.getElement().style.visibility = "visible";
        console.log("gagné");
    }
    perdre() {
        this.pause();
        this.message_.getElement().textContent = "Perdu !";
        this.message_.getElement().style.backgroundColor = "#F5AD8E";
        this.message_.getElement().style.visibility = "visible";
        console.log("perdu");
    }
}
