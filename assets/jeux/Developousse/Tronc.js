"use strict";
class Tronc extends Vegetal {
    constructor(element, scene) {
        super(element);
        this.setImage("Tronc2.png", 40, 428);
        this.getElement().style.zIndex = "4";
        this.scène_ = scene;
    }
    bouger() {
        if (this.scène_.perso_.checkEnLair() == false && this.scène_.perso_.getY() != this.scène_.perso_.ymax_) {
            if (this.v_ < 0 && (this.scène_.perso_.getX() + this.scène_.perso_.getWidth() > this.getX() - 64 && this.scène_.perso_.getX() < this.getX() + this.getWidth() + 64)) {
                console.log("vy=", this.scène_.perso_.vy_);
                this.scène_.perso_.vy_ = 0;
                console.log("vy=", this.scène_.perso_.vy_);
                this.scène_.perso_.futury_ = this.scène_.perso_.getY() + this.v_;
                this.scène_.perso_.checkCollisionphysique();
                this.scène_.perso_.setY(this.scène_.perso_.futury_);
            }
        }
        this.setY(this.getY() + this.v_);
        this.setHeight(this.getHeight() - this.v_);
        if (this.getY() < this.ydestinationpousse_) {
            this.figer();
            this.entraindepousser_ = false;
        }
        if (this.getY() > this.ydestinationdepousse_) {
            this.figer();
            this.entraindepousser_ = false;
        }
    }
}
