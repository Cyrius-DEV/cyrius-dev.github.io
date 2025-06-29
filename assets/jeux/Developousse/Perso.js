"use strict";
class Perso extends Anime {
    constructor(element, scene) {
        super(element);
        this.setImage("Perso.png", 40, 55);
        this.scène_ = scene;
        this.vmax_ = 3;
        this.vx_ = 0;
        this.vy_ = 0;
        this.futurx_ = this.scène_.persoxstart_;
        this.futury_ = this.scène_.getHeight() - this.getHeight() - 20;
        console.log("Coordonnées de départ : ", this.futurx_, this.futury_);
        this.enlair_ = false;
        this.directionHaut_ = false;
        this.directionDroite_ = false;
        this.directionGauche_ = false;
        this.ecouteurDeplacer = (evt) => { this.directionMouvement(evt, 1); };
        this.ecouteurStop = (evt) => { this.directionMouvement(evt, 0); };
        this.gagné_ = false;
    }
    deplacer() {
        if (this.checkEnLair() == true) {
            if (this.vy_ < this.vmax_) {
                this.vy_ += 0.1;
            }
            if (this.futury_ < this.ymax_) {
                this.futury_ += this.vy_;
            }
        }
        if (this.directionGauche_ == true) {
            this.gauche();
        }
        else if (this.directionDroite_ == true) {
            this.droite();
        }
        if (this.checkEnLair() == false && this.directionHaut_ == true) {
            this.directionHaut_ = false;
            this.saut();
        }
        this.checkMort();
        this.resterBord();
        this.checkCollisionphysique();
        this.resterBord();
        this.setX(this.futurx_);
        this.setY(this.futury_);
        this.checkgagner();
    }
    checkMort() {
        for (let i = 0; i < this.scène_.plateformes2_.length; i++) {
            let checkcollision = Sprite.collision(this.getRectangle(), this.scène_.plateformes2_[i].getRectangle());
            if (checkcollision === true) {
                if (this.scène_.soleilallume_ == true) {
                    this.vx_ = 0;
                    this.vy_ = 0;
                    this.figer();
                    this.scène_.perdre();
                    console.log("ELECTRICITE TOUCHE");
                }
            }
        }
    }
    checkgagner() {
        let checkcollision = Sprite.collision(this.getRectangle(), this.scène_.victoire_.getRectangle());
        if (checkcollision === true) {
            console.log("checkgagné");
            if (this.gagné_ == false) {
                this.gagné_ = true;
                this.figer();
                this.scène_.gagner();
                console.log(this.gagné_);
            }
        }
    }
    checkCollisiontravers() {
        for (let i = 0; i < this.scène_.troncs_.length; i++) {
            let checkcollision = Sprite.collision(this.getRectangle(), this.scène_.troncs_[i].getRectangle());
            if (checkcollision === true) {
                this.scène_.troncs_[i].getElement().style.opacity = "0.75";
            }
            else {
                this.scène_.troncs_[i].getElement().style.opacity = "1";
            }
        }
    }
    checkCollisionphysique() {
        let bg;
        let bd;
        for (let i = 0; i < this.scène_.plateformes_.length; i++) {
            let checkcollision = Sprite.collision(this.getRectangle(), this.scène_.plateformes_[i].getRectangle());
            if (checkcollision === true) {
                bg = this.scène_.plateformes_[i].getX() + this.scène_.plateformes_[i].getWidth() - this.getX();
                bd = this.scène_.plateformes_[i].getX() - this.getX() - this.getWidth();
                if (bg < 0) {
                    bg *= -1;
                }
                if (bd < 0) {
                    bd *= -1;
                }
                if (bg < bd) {
                    if (this.vx_ > 0) {
                        this.vx_ *= -1;
                        console.log("CORRECTION BUG THOMAS");
                    }
                }
                else {
                    if (this.vx_ < 0) {
                        this.vx_ *= -1;
                        console.log("CORRECTION BUG THOMAS");
                    }
                }
                let rectangle = this.getRectangle();
                let checkcollision2 = Sprite.collision(rectangle, this.scène_.plateformes_[i].getRectangle());
                do {
                    rectangle.x_ -= this.vx_ * 0.5 / this.getVitesse();
                    rectangle.y_ -= this.vy_ * 0.5 / this.getVitesse();
                    checkcollision2 = Sprite.collision(rectangle, this.scène_.plateformes_[i].getRectangle());
                } while (checkcollision2 === true);
                if (this.vy_ < 1 && this.checkEnLair() == true) {
                    rectangle.y_ += 1;
                }
                this.futurx_ = rectangle.x_;
                this.futury_ = rectangle.y_;
                this.vy_ = 0;
            }
        }
    }
    checkEnLair() {
        let test = null;
        for (let i = 0; i < this.scène_.feuilles_.length; i++) {
            let checkcollision = Sprite.collision(this.scène_.checkcollperso_.getRectangle(), this.scène_.feuilles_[i].getRectangle());
            if (checkcollision === true) {
                test = 1;
            }
        }
        if (test == null) {
            return true;
        }
        else {
            return false;
        }
    }
    resterBord() {
        if (this.futurx_ <= this.xmin_) {
            this.futurx_ = this.xmin_;
        }
        if (this.futurx_ >= this.xmax_) {
            this.futurx_ = this.xmax_;
        }
        if (this.futury_ >= this.ymax_) {
            this.futury_ = this.ymax_;
        }
        if (this.futury_ <= this.ymin_) {
            this.futury_ = this.ymin_;
        }
    }
    saut() {
        if (this.checkEnLair() == false) {
            console.log("saut");
            this.vy_ = -6;
            this.futury_ += this.vy_;
            new Audio('jump.mp3').play();
        }
        this.setY(this.futury_);
    }
    droite() {
        this.vx_ = 2;
        this.futurx_ += this.vx_;
    }
    gauche() {
        this.vx_ = -2;
        this.futurx_ += this.vx_;
    }
    directionMouvement(evt, test) {
        if (evt.key == "ArrowRight") {
            if (test == 1) {
                this.directionDroite_ = true;
            }
            if (test == 0) {
                this.directionDroite_ = false;
            }
        }
        if (evt.key == "ArrowLeft") {
            if (test == 1) {
                this.directionGauche_ = true;
            }
            if (test == 0) {
                this.directionGauche_ = false;
            }
        }
        if (evt.key == "ArrowUp") {
            if (test == 1) {
                this.directionHaut_ = true;
            }
            if (test == 0) {
                this.directionHaut_ = false;
            }
        }
    }
    animer() {
        window.addEventListener("keydown", this.ecouteurDeplacer);
        window.addEventListener("keyup", this.ecouteurStop);
        this.timerAnimation_ = setInterval(() => { this.deplacer(); }, 1000 / 120);
        console.log("animer");
    }
    figer() {
        clearInterval(this.timerAnimation_);
        window.removeEventListener("keydown", this.ecouteurDeplacer);
        window.removeEventListener("keyup", this.ecouteurStop);
    }
    getVitesse() {
        let vitesse = Math.sqrt((this.vx_ * this.vx_) + (this.vy_ * this.vy_));
        return vitesse;
    }
}
