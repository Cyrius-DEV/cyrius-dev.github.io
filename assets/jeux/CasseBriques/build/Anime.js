"use strict";
class Anime extends Sprite {
    constructor(element) {
        super(element);
    }
    setLimites(zone) {
        this.xmin_ = zone.getX();
        this.xmax_ = zone.getX() + zone.getWidth() - this.getWidth() - 10;
        this.ymin_ = zone.getY();
        this.ymax_ = zone.getX() + zone.getHeight() - this.getHeight() + 10;
    }
    animer() { }
    figer() { }
}
