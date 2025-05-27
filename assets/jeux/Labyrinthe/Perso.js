"use strict";
class Perso extends Sprite {
    constructor(element, scene, px, py) {
        super(element);
        this.scene_ = scene;
        this.px_ = px;
        this.py_ = py;
    }
    haut() {
        console.log(this.scene_.carte_[this.py_ - 1][this.px_]);
        if (this.scene_.carte_[this.py_ - 1][this.px_] != 1) {
            this.scene_.carte_[this.py_ - 1][this.px_] = this.scene_.carte_[this.py_][this.px_];
            this.py_ -= 1;
        }
        let X = this.scene_.pas_ * (this.px_) + this.scene_.x0_;
        let Y = this.scene_.pas_ * (this.py_) + this.scene_.y0_;
        this.setXY(X, Y);
    }
    bas() {
        if (this.scene_.carte_[this.py_ + 1][this.px_] != 1) {
            this.scene_.carte_[this.py_ + 1][this.px_] = this.scene_.carte_[this.py_][this.px_];
            this.py_ += 1;
        }
        let X = this.scene_.pas_ * (this.px_) + this.scene_.x0_;
        let Y = this.scene_.pas_ * (this.py_) + this.scene_.y0_;
        this.setXY(X, Y);
    }
    gauche() {
        if (this.scene_.carte_[this.py_][this.px_ - 1] != 1) {
            this.scene_.carte_[this.py_][this.px_ - 1] = this.scene_.carte_[this.py_][this.px_];
            this.px_ -= 1;
        }
        let X = this.scene_.pas_ * (this.px_) + this.scene_.x0_;
        let Y = this.scene_.pas_ * (this.py_) + this.scene_.y0_;
        this.setXY(X, Y);
    }
    droite() {
        if (this.scene_.carte_[this.py_][this.px_ + 1] != 1) {
            this.scene_.carte_[this.py_][this.px_ + 1] = this.scene_.carte_[this.py_][this.px_];
            this.px_ += 1;
        }
        let X = this.scene_.pas_ * (this.px_) + this.scene_.x0_;
        let Y = this.scene_.pas_ * (this.py_) + this.scene_.y0_;
        this.setXY(X, Y);
    }
    animer() { }
    figer() { }
    manger() { }
}
