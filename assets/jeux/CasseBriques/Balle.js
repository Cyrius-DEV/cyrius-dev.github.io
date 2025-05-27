"use strict";
class Balle extends Anime {
    constructor(element, scene) {
        super(element);
        this.setImage("Balle.png", 25, 25);
        this.initVitesse(5);
        this.scène_ = scene;
        this.vmax_ = 8;
        this.colle_ = true;
        this.ecouteurDecoller = (evt) => { this.colle_ = false; console.log(this.colle_); };
    }
    rebondirBordure() {
        if (this.futurx_ <= this.xmin_ || this.futurx_ >= this.xmax_) {
            this.vx_ = -(this.vx_);
            this.futurx_ += this.vx_;
        }
        this.setX(this.futurx_);
        if (this.futury_ >= this.ymin_) {
            if (this.futury_ >= this.ymax_) {
                this.scène_.perdre();
            }
        }
        else {
            this.vy_ = -(this.vy_);
            this.futury_ += this.vy_;
        }
        this.setY(this.futury_);
    }
    rebondirPalet() {
        let checkcollision = Sprite.collision(this.getCircle(), this.scène_.palet_.getRectangle());
        if (checkcollision === true) {
            let cercle = this.getCircle();
            let checkcollision2 = Sprite.collision(cercle, this.scène_.palet_.getRectangle());
            do {
                cercle.cx_ -= this.vx_ * 0.5 / this.getVitesse();
                cercle.cy_ -= this.vy_ * 0.5 / this.getVitesse();
                checkcollision2 = Sprite.collision(cercle, this.scène_.palet_.getRectangle());
            } while (checkcollision2 === true);
            cercle.cx_ -= this.getWidth() / 2;
            cercle.cy_ -= this.getHeight() / 2;
            this.setXY(cercle.cx_, cercle.cy_);
            let dx = (this.getCenterX() - this.scène_.palet_.getCenterX()) / (this.scène_.palet_.getWidth() / 2);
            let a = (45 * dx - 90) * Math.PI / 180;
            let vx = Math.cos(a);
            let vy = Math.sin(a);
            this.vx_ = vx * this.getVitesse();
            this.vy_ = vy * this.getVitesse();
            this.futurx_ = this.getX() + this.vx_;
            this.futury_ = this.getY() + this.vy_;
            this.setXY(this.futurx_, this.futury_);
            this.accelerer(1.2);
        }
    }
    rebondirBrique() {
        let test = null;
        for (let i = 0; i < this.scène_.tabriques_.length; i++) {
            if (this.scène_.tabriques_[i] != null) {
                let checkcollision = Sprite.collision(this.getCircle(), this.scène_.tabriques_[i].getRectangle());
                if (checkcollision === true) {
                    let cercle = this.getCircle();
                    let checkcollision2 = Sprite.collision(cercle, this.scène_.tabriques_[i].getRectangle());
                    do {
                        cercle.cx_ -= this.vx_ * 0.5 / this.getVitesse();
                        cercle.cy_ -= this.vy_ * 0.5 / this.getVitesse();
                        checkcollision2 = Sprite.collision(cercle, this.scène_.tabriques_[i].getRectangle());
                    } while (checkcollision2 === true);
                    cercle.cx_ -= this.getWidth() / 2;
                    cercle.cy_ -= this.getHeight() / 2;
                    this.setXY(cercle.cx_, cercle.cy_);
                    let droit = false;
                    let gauche = false;
                    let haut = false;
                    let bas = false;
                    let dg = this.scène_.tabriques_[i].getX() - this.getX() - this.getWidth();
                    let dd = this.getX() - this.scène_.tabriques_[i].getX() - this.scène_.tabriques_[i].getWidth();
                    let dh = this.scène_.tabriques_[i].getY() - this.getY() - this.getHeight();
                    let db = this.getY() - this.scène_.tabriques_[i].getY() - this.scène_.tabriques_[i].getHeight();
                    if (dg < 1 && dg > -this.getWidth() / 2) {
                        console.log("bord gauche");
                        gauche = true;
                    }
                    if (dd < 1 && dd > -this.getWidth() / 2) {
                        console.log("bord droit");
                        droit = true;
                    }
                    if (dh < 1 && dh > -this.getHeight() / 2) {
                        console.log("bord haut");
                        haut = true;
                    }
                    if (db < 1 && db > -this.getHeight() / 2) {
                        console.log("bord bas");
                        bas = true;
                    }
                    if (haut == true) {
                        if (droit == false && gauche == false) {
                            this.vy_ = -(this.vy_);
                        }
                        if (droit == true && gauche == false) {
                            if (db > dh) {
                                this.vx_ /= -1.2;
                                this.vy_ = -(this.vy_);
                            }
                            else {
                                this.vy_ /= -1.2;
                                this.vx_ = -(this.vx_);
                            }
                        }
                        if (droit == false && gauche == true) {
                            if (dg > dh) {
                                this.vx_ /= -1.2;
                                this.vy_ = -(this.vy_);
                            }
                            else {
                                this.vy_ /= -1.2;
                                this.vx_ = -(this.vx_);
                            }
                        }
                    }
                    if (bas == true) {
                        if (droit == false && gauche == false) {
                            this.vy_ = -(this.vy_);
                        }
                        if (droit == true && gauche == false) {
                            if (db > db) {
                                this.vx_ /= -1.2;
                                this.vy_ = -(this.vy_);
                            }
                            else {
                                this.vy_ /= -1.2;
                                this.vx_ = -(this.vx_);
                            }
                        }
                        if (droit == false && gauche == true) {
                            if (dg > db) {
                                this.vx_ /= -1.2;
                                this.vy_ = -(this.vy_);
                            }
                            else {
                                this.vy_ /= -1.2;
                                this.vx_ = -(this.vx_);
                            }
                        }
                    }
                    if (gauche == true && haut == false && bas == false) {
                        this.vx_ = -(this.vx_);
                    }
                    if (droit == true && haut == false && bas == false) {
                        this.vx_ = -(this.vx_);
                    }
                    test = i;
                }
            }
            if (test != null) {
                this.scène_.removeChild(this.scène_.tabriques_[i]);
                this.scène_.tabriques_[i] = null;
                test = null;
                this.scène_.augmenterScore();
            }
        }
    }
    accelerer(plusvite) {
        this.vx_ = plusvite * this.vx_;
        this.vy_ = plusvite * this.vy_;
        if (this.getVitesse() >= this.vmax_) {
            let vr = Math.sqrt((this.vx_ * this.vx_) + (this.vy_ * this.vy_));
            let vxprime = this.vx_ / vr;
            let vyprime = this.vy_ / vr;
            this.vx_ = vxprime * this.vmax_;
            this.vy_ = vyprime * this.vmax_;
        }
    }
    bouger() {
        if (this.colle_ === true) {
            let X = this.scène_.palet_.getCenterX() - this.getWidth() / 2;
            let Y = this.scène_.palet_.getY() - this.getHeight();
            this.setXY(X, Y);
        }
        else {
            this.futurx_ = this.getX() + this.vx_;
            this.futury_ = this.getY() + this.vy_;
            this.rebondirBordure();
            this.rebondirPalet();
            this.rebondirBrique();
            this.setXY(this.futurx_, this.futury_);
        }
    }
    animer() {
        window.addEventListener("mousedown", this.ecouteurDecoller);
        this.timerAnimation_ = setInterval(() => { this.bouger(); }, 1000 / 120);
    }
    figer() {
        clearInterval(this.timerAnimation_);
        window.removeEventListener("mousedown", this.ecouteurDecoller);
    }
    initVitesse(v) {
        this.vx_ = (Math.random() * 4) - 2;
        this.vy_ = -2;
        let vr = Math.sqrt((this.vx_ * this.vx_) + (this.vy_ * this.vy_));
        let vxprime = this.vx_ / vr;
        let vyprime = this.vy_ / vr;
        this.vx_ = vxprime * v;
        this.vy_ = vyprime * v;
    }
    getVitesse() {
        let vitesse = Math.sqrt((this.vx_ * this.vx_) + (this.vy_ * this.vy_));
        return vitesse;
    }
}
