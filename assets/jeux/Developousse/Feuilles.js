"use strict";
class Feuilles extends Vegetal {
    constructor(element) {
        super(element);
        this.getElement().style.zIndex = "3";
        this.setImage("Plateforme.png", 168, 40);
    }
}
