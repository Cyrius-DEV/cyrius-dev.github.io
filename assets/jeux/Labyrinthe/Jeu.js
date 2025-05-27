"use strict";
class Jeu extends Scene {
    constructor(element) {
        super(element, false);
        this.pas_ = 20;
        this.x0_ = 0;
        this.y0_ = 0;
        this.pas_ = 46;
        this.compteur_ = new Sprite(document.getElementById("compteur"));
        this.message_ = new Sprite(document.getElementById("messagefin"));
        this.ecouteurRedémarrer = (evt) => { console.log("restart"); this.restart(); };
    }
    start() {
        this.fantomes = [];
        this.compteur = 0;
        this.initialiserCarte();
        this.dessinerLabyrinthe();
        this.compteur_.getElement().style.borderRadius = "5px";
        this.compteur_.getElement().style.border = "solid 5px";
        this.compteur_.getElement().textContent = this.compteur + " pastilles restantes";
        this.compteur_.getElement().style.fontSize = "16px";
        this.compteur_.getElement().style.textAlign = "center";
        this.compteur_.setDimension(60, 70);
        this.compteur_.setXY(560, 50);
        this.message_.getElement().style.borderRadius = "5px";
        this.message_.getElement().style.border = "solid 5px";
        this.message_.getElement().textContent = "Perdu !";
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
        this.message_.getElement().style.backgroundColor = "#F5AD8E";
        this.message_.getElement().style.visibility = "hidden";
        this.pacman_.animer();
        for (let i = 0; i < this.fantomes.length; i++) {
            this.fantomes[i].animer();
        }
        console.log(this.carte_, this.pastilles);
        this.message_.addEventListener("mousedown", this.ecouteurRedémarrer);
    }
    pause() {
        this.pacman_.figer();
        for (let i = 0; i < this.fantomes.length; i++) {
            this.fantomes[i].figer();
        }
    }
    unpause() {
    }
    clean() {
        this.removeChild(this.pacman_);
        for (let i = 0; i < this.fantomes.length; i++) {
            this.removeChild(this.fantomes[i]);
        }
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                if (this.pastilles[i] != null) {
                    this.removeChild(this.pastilles[i][j]);
                }
            }
        }
    }
    initialiserCarte() {
        this.carte_ = [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 2, 2, 2, 2, 1, 2, 2, 10, 1],
            [1, 1, 2, 1, 1, 1, 2, 1, 2, 1],
            [1, 2, 2, 2, 1, 1, 2, 2, 2, 1],
            [1, 2, 1, 2, 2, 2, 2, 1, 1, 1],
            [1, 2, 1, 2, 1, 8, 1, 1, 1, 1],
            [1, 2, 1, 1, 1, 2, 2, 2, 2, 1],
            [1, 2, 2, 2, 2, 2, 1, 1, 2, 9],
            [1, 10, 1, 2, 1, 2, 2, 2, 2, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
        ];
        this.pastilles = [
            [, , , , , , , , ,],
            [, , , , , , , , ,],
            [, , , , , , , , ,],
            [, , , , , , , , ,],
            [, , , , , , , , ,],
            [, , , , , , , , ,],
            [, , , , , , , , ,],
            [, , , , , , , , ,],
            [, , , , , , , , ,],
            [, , , , , , , , ,]
        ];
    }
    dessinerLabyrinthe() {
        this.x0_ = (this.getWidth() - (this.pas_ * 10)) / 2;
        this.y0_ = (this.getHeight() - (this.pas_ * 10)) / 2;
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                if (this.carte_[i][j] == 1) {
                    let brique = new Sprite(document.createElement("img"));
                    brique.setImage("Mur.jpg", this.pas_, this.pas_);
                    this.appendChild(brique);
                    brique.setXY(this.pas_ * (j) + this.x0_, this.pas_ * (i) + this.y0_);
                    console.log("brique");
                }
                if (this.carte_[i][j] == 2) {
                    let pastille = new Sprite(document.createElement("img"));
                    pastille.setImage("Pastille.png", this.pas_ - 15, this.pas_ - 15);
                    this.appendChild(pastille);
                    let X = (this.pas_ * (j + 1) + this.x0_) + ((-this.pas_ - pastille.getWidth()) / 2);
                    let Y = (this.pas_ * (i + 1) + this.y0_) + ((-this.pas_ - pastille.getWidth()) / 2);
                    pastille.setXY(X, Y);
                    this.pastilles[i][j] = pastille;
                    this.compteur += 1;
                    pastille.getElement().style.zIndex = "1";
                    console.log("pastille");
                }
                else {
                    this.pastilles[i][j] = null;
                }
                if (this.carte_[i][j] == 8) {
                    this.pacman_ = new Pacman(document.createElement("img"), this, j, i);
                    let X = this.pas_ * (this.pacman_.px_) + this.x0_;
                    let Y = this.pas_ * (this.pacman_.py_) + this.y0_;
                    this.pacman_.setXY(X, Y);
                    this.appendChild(this.pacman_);
                    this.pacman_.getElement().style.zIndex = "3";
                }
                if (this.carte_[i][j] == 10) {
                    let fantome = new Fantome(document.createElement("img"), this, i, j);
                    let X = this.pas_ * (fantome.px_) + this.x0_;
                    let Y = this.pas_ * (fantome.py_) + this.y0_;
                    fantome.setXY(X, Y);
                    this.appendChild(fantome);
                    fantome.getElement().style.zIndex = "2";
                    this.fantomes.push(fantome);
                }
            }
        }
    }
    retirerPastille(ligne, colonne) {
        this.removeChild(this.pastilles[ligne][colonne]);
        this.carte_[ligne][colonne] = 0;
        this.pastilles[ligne][colonne] = null;
        this.compteur -= 1;
        this.compteur_.getElement().textContent = this.compteur + " pastilles restantes";
        console.log("pastille en moins");
    }
    gagner() {
        this.pause();
        this.message_.getElement().textContent = "Gagné !";
        this.message_.getElement().style.backgroundColor = "#8EF4C0";
        this.message_.getElement().style.visibility = "visible";
    }
    perdre() {
        this.pause();
        this.message_.getElement().style.visibility = "visible";
    }
}
