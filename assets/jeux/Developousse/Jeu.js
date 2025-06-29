"use strict";
class Jeu extends Scene {
    constructor(element) {
        super(element, false);
        this.plateformes_ = [];
        this.feuilles_ = [];
        this.plateformes2_ = [];
        this.troncs_ = [];
        this.obstacles_ = [];
        this.jardin_ = [[], [], [], [], []];
        this.zoneéclairée_ = 0;
        this.soleilallume_ = false;
        this.compteuraudioElec_ = 1350;
        this.niveauactuel_ = 1;
        this.ecouteurFleche1_ = (evt) => {
            let zone = 0;
            if (this.zoneéclairée_ > 1) {
                zone = this.zoneéclairée_ - 1;
            }
            this.updatelumiere(zone);
            if (this.soleilallume_ == true) {
                this.ensoleiller(zone);
            }
            else {
                this.zoneéclairée_ = zone;
            }
        };
        this.ecouteurFleche2_ = (evt) => {
            let zone = 4;
            if (this.zoneéclairée_ < 4) {
                zone = this.zoneéclairée_ + 1;
            }
            this.updatelumiere(zone);
            if (this.soleilallume_ == true) {
                this.ensoleiller(zone);
            }
            else {
                this.zoneéclairée_ = zone;
            }
        };
        this.messageSoleil_ = new Sprite(document.createElement("p"));
        this.appendChild(this.messageSoleil_);
        this.messageSoleil_.setDimension(228, 30);
        this.messageSoleil_.setXY(this.getWidth() / 2 - this.messageSoleil_.getWidth() / 2, 90);
        this.messageSoleil_.getElement().textContent = "Cliquez sur la lampe pour l'allumer";
        this.messageSoleil_.hide();
        this.zaps_ = new Sprite(document.createElement("img"));
        this.appendChild(this.zaps_);
        this.zaps_.setImage("zaps2.png", 1280, 720);
        this.zaps_.setXY(0, 0);
        this.zaps_.hide();
        this.messagetotal_ = new Sprite(document.createElement("img"));
        this.appendChild(this.messagetotal_);
        this.messagetotal_.setXY(0, 0);
        this.messagetotal_.setImage("Menutest.png", this.getWidth(), this.getHeight());
        this.messagetotal_.getElement().style.zIndex = "20";
        this.popupnext_ = new Sprite(document.createElement("img"));
        this.appendChild(this.popupnext_);
        this.popupnext_.setImage("Menutest2.png", this.getWidth(), this.getHeight());
        this.popupnext_.setXY(0, 0);
        this.popupnext_.getElement().style.zIndex = "19";
        this.popupnext_.hide();
        this.messagefinal_ = new Sprite(document.createElement("img"));
        this.appendChild(this.messagefinal_);
        this.messagefinal_.setImage("Menutest3.png", this.getWidth(), this.getHeight());
        this.messagefinal_.setXY(0, 0);
        this.messagefinal_.getElement().style.zIndex = "19";
        this.messagefinal_.hide();
        this.ecouteurLancer_ = (evt) => {
            this.lancer();
            this.messagetotal_.hide();
        };
        this.ecouteurNext_ = (evt) => {
            this.clean();
            this.zoneéclairée_ = 0;
            this.soleilallume_ = false;
            this.compteuraudioElec_ = -12;
            this.lancer();
            this.popupnext_.hide();
        };
        this.ecouteurFin_ = (evt) => {
            this.clean();
            this.zoneéclairée_ = 0;
            this.soleilallume_ = false;
            this.compteuraudioElec_ = 1350;
            this.lancer();
            this.messagefinal_.hide();
        };
    }
    start() {
        this.messagetotal_.addEventListener("mousedown", this.ecouteurLancer_);
    }
    lancer() {
        console.log("téléchargement du niveau");
        this.niveau(this.niveauactuel_);
    }
    start_suite() {
        let audio = new Audio("testelec2.mp3");
        this.ecouteurSoleil_ = (evt) => {
            const audio = new Audio('clic.mp3');
            audio.volume = 0.5; // moitié volume
            audio.play();

            if (this.soleilallume_ == false) {
                this.soleilallume_ = true;
                this.plafond_.setImage("electest13.png", this.getWidth(), 21);
                this.timerElec_ = setInterval(() => { this.plafondelec(); }, 500);
                this.timeraudioElec_ = setInterval(() => { this.elecanim(audio); }, 1000 / 100);
                this.ensoleiller(this.zoneéclairée_);
            }
            else {
                this.soleilallume_ = false;
                this.updatelumiere(this.zoneéclairée_);
                this.ensoleiller(null);
            }
        };
        this.zone_ = new Sprite(document.getElementById("zone"));
        this.zone_.setXY(20, 20);
        this.zone_.setWidth(this.getWidth() - 40);
        this.zone_.setHeight(this.getHeight() - 40);
        this.zone1_ = this.getWidth() * 1 / 5;
        this.zone2_ = this.getWidth() * 2 / 5;
        this.zone3_ = this.getWidth() * 3 / 5;
        this.zone4_ = this.getWidth() * 4 / 5;
        this.zone5_ = this.getWidth() * 5 / 5;
        console.log("zones : 0 - ", this.zone1_, "-", this.zone2_, "-", this.zone3_, "-", this.zone4_, "-", this.zone5_);
        this.sol_ = new Plateforme(document.createElement("img"));
        this.appendChild(this.sol_);
        this.sol_.getElement().style.backgroundColor = "black";
        this.sol_.setDimension(this.getWidth(), 50);
        this.sol_.setXY(0, (this.zone_.getY() + this.zone_.getHeight()));
        this.sol_.hide();
        this.plateformes_.push(this.sol_);
        this.feuilles_.push(this.sol_);
        this.plafond_ = new Plateforme(document.createElement("img"));
        this.appendChild(this.plafond_);
        this.plafond_.setDimension(this.getWidth(), 21);
        this.plafond_.setXY(0, 0);
        this.plateformes2_.push(this.plafond_);
        this.plafond_.hide();
        this.initialiserNiveau3();
        this.perso_ = new Perso(document.createElement("img"), this);
        this.appendChild(this.perso_);
        this.perso_.setXY(this.persoxstart_, this.getHeight() - this.perso_.getHeight() - 20);
        this.perso_.getElement().style.zIndex = "6";
        this.checkcollperso_ = new Sprite(document.createElement("img"));
        this.appendChild(this.checkcollperso_);
        this.checkcollperso_.getElement().style.backgroundColor = "red";
        this.checkcollperso_.setDimension(this.perso_.getWidth(), 3);
        this.checkcollperso_.follow(this.perso_, 0, (this.perso_.getHeight() / 2), 1000 / 120);
        this.checkcollperso_.hide();
        this.soleil1_ = new Sprite(document.createElement("img"));
        this.appendChild(this.soleil1_);
        this.soleil1_.setImage("soleil1.png", 94, 89);
        this.soleil1_.getElement().style.zIndex = "10";
        this.soleil1_.setXY(this.getWidth() / 2 - this.soleil1_.getWidth() / 2, 0);
        this.plateformes_.push(this.soleil1_);
        this.plateformes2_.push(this.soleil1_);
        this.soleil2_ = new Sprite(document.createElement("img"));
        this.appendChild(this.soleil2_);
        this.soleil2_.setImage("soleil2.png", 156, 73);
        this.soleil2_.getElement().style.zIndex = "9";
        this.soleil2_.setXY(this.getWidth() / 2 - this.soleil2_.getWidth() / 2, 0);
        this.plateformes_.push(this.soleil2_);
        this.plateformes2_.push(this.soleil2_);
        this.soleil3_ = new Sprite(document.createElement("img"));
        this.appendChild(this.soleil3_);
        this.soleil3_.setImage("soleil3.png", 188, 57);
        this.soleil3_.getElement().style.zIndex = "8";
        this.soleil3_.setXY(this.getWidth() / 2 - this.soleil3_.getWidth() / 2 - 1, 0);
        this.plateformes_.push(this.soleil3_);
        this.plateformes2_.push(this.soleil3_);
        this.soleil4_ = new Sprite(document.createElement("img"));
        this.appendChild(this.soleil4_);
        this.soleil4_.setImage("soleil4.png", 220, 42);
        this.soleil4_.getElement().style.zIndex = "7";
        this.soleil4_.setXY(this.getWidth() / 2 - this.soleil4_.getWidth() / 2 - 1, 0);
        this.plateformes_.push(this.soleil4_);
        this.plateformes2_.push(this.soleil4_);
        this.soleil5_ = new Sprite(document.createElement("img"));
        this.appendChild(this.soleil5_);
        this.soleil5_.setImage("soleil5.png", 248, 26);
        this.soleil5_.getElement().style.zIndex = "6";
        this.soleil5_.setXY(this.getWidth() / 2 - this.soleil5_.getWidth() / 2, 0);
        this.plateformes_.push(this.soleil5_);
        this.plateformes2_.push(this.soleil5_);
        this.soleil1_.addEventListener("mousedown", this.ecouteurSoleil_);
        this.soleil2_.addEventListener("mousedown", this.ecouteurSoleil_);
        this.soleil3_.addEventListener("mousedown", this.ecouteurSoleil_);
        this.soleil4_.addEventListener("mousedown", this.ecouteurSoleil_);
        this.soleil5_.addEventListener("mousedown", this.ecouteurSoleil_);
        this.messageSoleil_.hide();
        this.fleche1_ = new Fleche(document.createElement("img"), this);
        this.appendChild(this.fleche1_);
        this.fleche1_.setXY(this.getWidth() / 2 - this.fleche1_.getWidth() / 2 - 175, 25);
        this.fleche1_.setRotation(180);
        this.fleche1_.getElement().style.zIndex = "7";
        this.fleche1_.addEventListener("mousedown", this.ecouteurFleche1_);
        this.fleche2_ = new Fleche(document.createElement("img"), this);
        this.appendChild(this.fleche2_);
        this.fleche2_.setXY(this.getWidth() / 2 - this.fleche2_.getWidth() / 2 + 175, 25);
        this.fleche2_.getElement().style.zIndex = "7";
        this.fleche2_.addEventListener("mousedown", this.ecouteurFleche2_);
        this.lumiere_ = new Sprite(document.createElement("img"));
        this.updatelumiere(this.zoneéclairée_);
        this.appendChild(this.lumiere_);
        this.lumiere_.setXY(0, 0);
        this.perso_.setLimites(this.zone_);
        setTimeout(() => { this.perso_.animer(); }, 0);
        console.log("GROS CHECK", "Jardin : ", this.jardin_, "Plateformes : ", this.plateformes_, "Feuilles : ", this.feuilles_, "Obstacles : ", this.obstacles_);
    }
    pause() {
    }
    unpause() {
    }
    clean() {
        this.perso_.figer();
        this.removeChild(this.zone_);
        this.removeChild(this.sol_);
        this.removeChild(this.plafond_);
        this.removeChild(this.perso_);
        this.removeChild(this.checkcollperso_);
        this.removeChild(this.soleil1_);
        this.removeChild(this.soleil2_);
        this.removeChild(this.soleil3_);
        this.removeChild(this.soleil4_);
        this.removeChild(this.soleil5_);
        this.removeChild(this.fleche1_);
        this.removeChild(this.fleche2_);
        this.removeChild(this.lumiere_);
        for (let i = 0; i < this.jardin_.length; i++) {
            for (let j = 0; j < this.jardin_[i].length; j++) {
                for (let k = 0; k < this.jardin_[i][j].length; k++) {
                    this.removeChild(this.jardin_[i][j][k]);
                    this.jardin_[i][j][k] = null;
                }
            }
        }
        this.jardin_ = [[], [], [], [], []];
        this.removeChild(this.fin_);
        this.removeChild(this.victoire_);
        for (let i = 0; i < this.obstacles_.length; i++) {
            this.removeChild(this.obstacles_[i]);
            this.obstacles_[i] = null;
        }
        this.obstacles_ = [];
        for (let i = 0; i < this.plateformes_.length; i++) {
            this.plateformes_[i] = null;
        }
        this.plateformes_ = [];
        for (let i = 0; i < this.plateformes2_.length; i++) {
            this.plateformes2_[i] = null;
        }
        this.plateformes2_ = [];
        for (let i = 0; i < this.feuilles_.length; i++) {
            this.feuilles_[i] = null;
        }
        this.feuilles_ = [];
        for (let i = 0; i < this.troncs_.length; i++) {
            this.troncs_[i] = null;
        }
        this.troncs_ = [];
    }
    elecanim(audio) {
        if (this.soleilallume_ == true) {
            audio.play();
            if (this.compteuraudioElec_ < 1350) {
                this.compteuraudioElec_ += 1;
                console.log("Compteur", this.compteuraudioElec_);
            }
            else {
                this.compteuraudioElec_ = -12;
            }
            if ((this.compteuraudioElec_ <= 72 && this.compteuraudioElec_ >= 12) || (this.compteuraudioElec_ <= 520 && this.compteuraudioElec_ >= 460) || (this.compteuraudioElec_ <= 968 && this.compteuraudioElec_ >= 908))
                this.zaps_.show();
            else
                this.zaps_.hide();
        }
        else {
            audio.pause();
            this.zaps_.hide();
            clearInterval(this.timeraudioElec_);
            clearInterval(this.timerElec_);
            this.plafond_.hide();
        }
    }
    plafondelec() {
        if (this.soleilallume_ == true) {
            this.plafond_.show();
            if (this.animElec_ == 1) {
                this.plafond_.setImage("electest11.png", this.getWidth(), 21);
            }
            else if (this.animElec_ == 2) {
                this.plafond_.setImage("electest12.png", this.getWidth(), 21);
            }
            else if (this.animElec_ == 3) {
                this.plafond_.setImage("electest13.png", this.getWidth(), 21);
            }
            else {
                this.plafond_.setImage("electest10.png", this.getWidth(), 21);
                this.animElec_ = 0;
            }
            this.animElec_ += 1;
        }
        else {
            this.animElec_ = 0;
            clearInterval(this.timerElec_);
            this.plafond_.hide();
        }
    }
    ensoleiller(zone) {
        if (zone != this.zoneéclairée_) {
            this.exzone_ = this.zoneéclairée_;
            for (let i = 0; i < this.jardin_[this.exzone_].length; i++) {
                for (let j = 0; j < this.jardin_[this.exzone_][i].length; j++) {
                    this.jardin_[this.exzone_][i][j].ensoleiller();
                }
            }
        }
        if (zone != null) {
            this.zoneéclairée_ = zone;
            this.updatelumiere(this.zoneéclairée_);
            for (let i = 0; i < this.jardin_[this.zoneéclairée_].length; i++) {
                for (let j = 0; j < this.jardin_[this.zoneéclairée_][i].length; j++) {
                    this.jardin_[this.zoneéclairée_][i][j].ensoleiller();
                }
            }
        }
        console.log("zone éclairée : ", this.zoneéclairée_);
    }
    initialiserNiveau2() {
        let json = JSON.parse(this.niveau_.carte);
        let jardintri = [];
        for (let i = 0; i < json.length; i++) {
            if (i != 5) {
                for (let j = 0; j < json[i].length; j++) {
                    console.log("Zone " + i + ", ");
                    if (json[i][j] != null) {
                        let tronctest1 = new Troncoupe(document.createElement("img"));
                        this.appendChild(tronctest1);
                        tronctest1.setXY(json[i][j][0], 250);
                        let tronctest2 = new Tronc(document.createElement("img"), this);
                        this.appendChild(tronctest2);
                        tronctest2.setHeight(450 - tronctest1.getHeight());
                        tronctest2.setXY(json[i][j][0], 250 + tronctest1.getHeight());
                        this.troncs_.push(tronctest2);
                        console.log("tronc1", tronctest1.getX(), tronctest1.getX() + tronctest1.getWidth());
                        jardintri.push([tronctest1, tronctest2]);
                        for (let k = 1; k < json[i][j].length; k++) {
                            let platest = new Feuilles(document.createElement("img"));
                            this.appendChild(platest);
                            platest.setXY(tronctest1.getX() - 64, (this.zone_.getY() + this.zone_.getHeight() - json[i][j][k]));
                            this.plateformes_.push(platest);
                            this.feuilles_.push(platest);
                            let lianetest = new Liane(document.createElement("img"));
                            this.appendChild(lianetest);
                            lianetest.setXY(tronctest1.getX() - 64, (this.zone_.getY() + this.zone_.getHeight() - json[i][j][k] + 10));
                            let lianetest3 = new Liane(document.createElement("img"));
                            this.appendChild(lianetest3);
                            lianetest3.setXY(tronctest1.getX() - 64, (this.zone_.getY() + this.zone_.getHeight() - json[i][j][k] + 30));
                            let lianetest4 = new Liane(document.createElement("img"));
                            this.appendChild(lianetest4);
                            lianetest4.setXY(tronctest1.getX() - 64, (this.zone_.getY() + this.zone_.getHeight() - json[i][j][k] - 10));
                            let lianetest12 = new Liane2(document.createElement("img"));
                            this.appendChild(lianetest12);
                            lianetest12.setXY(tronctest1.getX() - 64, (this.zone_.getY() + this.zone_.getHeight() - json[i][j][k] + 10));
                            let lianetest32 = new Liane2(document.createElement("img"));
                            this.appendChild(lianetest32);
                            lianetest32.setXY(tronctest1.getX() - 64, (this.zone_.getY() + this.zone_.getHeight() - json[i][j][k] + 30));
                            let lianetest42 = new Liane2(document.createElement("img"));
                            this.appendChild(lianetest42);
                            lianetest42.setXY(tronctest1.getX() - 64, (this.zone_.getY() + this.zone_.getHeight() - json[i][j][k] - 10));
                            jardintri.push([platest, lianetest, lianetest3, lianetest4, lianetest12, lianetest32, lianetest42]);
                        }
                    }
                }
            }
            else {
                this.fin_ = new Plateforme(document.createElement("img"));
                this.appendChild(this.fin_);
                this.fin_.setDimension(100, json[i][0][0]);
                this.fin_.setXY(json[i][0][1], (this.zone_.getY() + this.zone_.getHeight() - this.fin_.getHeight()));
                this.plateformes_.push(this.fin_);
                this.feuilles_.push(this.fin_);
                this.fin_.setImage("plateformefin.png", 100, 26);
                if (this.fin_.getX() + this.fin_.getWidth() / 2 < this.getWidth() / 2)
                    this.fin_.getElement().style.transform = "scaleX(-1)";
                this.fin_.getElement().style.zIndex = "6";
                this.victoire_ = new Victoire(document.createElement("img"), this);
                this.appendChild(this.victoire_);
                this.victoire_.setXY(this.fin_.getX() + ((this.fin_.getWidth() - this.victoire_.getWidth()) / 2), this.fin_.getY() - this.victoire_.getHeight());
                this.victoire_.getElement().style.zIndex = "6";
                for (let j = 1; j < json[i].length; j++) {
                    console.log("ICI", json[i][j][0], json[i][j][1], json[i][j][2], json[i][j][3]);
                    let obstacletrou = new Sprite(document.createElement("img"));
                    this.appendChild(obstacletrou);
                    obstacletrou.setImage("obstacletrou.png", json[i][j][2] * 80 / 30, 60);
                    obstacletrou.setXY(json[i][j][0] - 33, (this.zone_.getY() + this.zone_.getHeight() - obstacletrou.getHeight()));
                    this.obstacles_.push(obstacletrou);
                    let obstaclebeche = new Sprite(document.createElement("img"));
                    this.appendChild(obstaclebeche);
                    obstaclebeche.setImage("obstaclebeche.png", json[i][j][2] * 80 / 30, 60);
                    obstaclebeche.setXY(json[i][j][0] - 33, (this.zone_.getY() + this.zone_.getHeight() - obstaclebeche.getHeight() - obstacletrou.getHeight()));
                    this.plateformes_.push(obstaclebeche);
                    this.obstacles_.push(obstaclebeche);
                    let obstaclemanche = new Sprite(document.createElement("img"));
                    this.appendChild(obstaclemanche);
                    obstaclemanche.setImage("obstaclemanche.png", json[i][j][2] * 80 / 30, json[i][j][3] - obstaclebeche.getHeight() - obstacletrou.getHeight());
                    obstaclemanche.setXY(json[i][j][0] - 33, (this.zone_.getY() + this.zone_.getHeight() - obstaclemanche.getHeight() - obstacletrou.getHeight() - obstaclebeche.getHeight()));
                    this.plateformes_.push(obstaclemanche);
                    this.obstacles_.push(obstaclemanche);
                }
            }
        }
        for (let i = 0; i < jardintri.length; i++) {
            for (let j = 0; j < jardintri[i].length; j++) {
                jardintri[i][j].calculDestination();
            }
        }
        console.log("ICIIII", jardintri);
        for (let i = 0; i < jardintri.length; i++) {
            if (jardintri[i][0].getX() + jardintri[i][0].getWidth() / 2 >= 0 && jardintri[i][0].getX() + jardintri[i][0].getWidth() / 2 < this.zone1_) {
                this.jardin_[0].push(jardintri[i]);
                console.log(jardintri[i][0].getX() + jardintri[i][0].getWidth() / 2, "zone 0");
            }
            else if (jardintri[i][0].getX() + jardintri[i][0].getWidth() / 2 >= this.zone1_ && jardintri[i][0].getX() + jardintri[i][0].getWidth() / 2 < this.zone2_) {
                this.jardin_[1].push(jardintri[i]);
                console.log(jardintri[i][0].getX() + jardintri[i][0].getWidth() / 2, "zone 1");
            }
            else if (jardintri[i][0].getX() + jardintri[i][0].getWidth() / 2 >= this.zone2_ && jardintri[i][0].getX() + jardintri[i][0].getWidth() / 2 < this.zone3_) {
                this.jardin_[2].push(jardintri[i]);
                console.log(jardintri[i][0].getX() + jardintri[i][0].getWidth() / 2, "zone 2");
            }
            else if (jardintri[i][0].getX() + jardintri[i][0].getWidth() / 2 >= this.zone3_ && jardintri[i][0].getX() + jardintri[i][0].getWidth() / 2 < this.zone4_) {
                this.jardin_[3].push(jardintri[i]);
                console.log(jardintri[i][0].getX() + jardintri[i][0].getWidth() / 2, "zone 3");
            }
            else if (jardintri[i][0].getX() + jardintri[i][0].getWidth() / 2 >= this.zone4_ && jardintri[i][0].getX() + jardintri[i][0].getWidth() / 2 < this.zone5_) {
                this.jardin_[4].push(jardintri[i]);
                console.log(jardintri[i][0].getX() + jardintri[i][0].getWidth() / 2, "zone 4");
            }
        }
        console.log("Jardin : ", this.jardin_);
    }
    updatelumiere(zone) {
        if (zone == 0) {
            this.lumiere_.setImage("Lumierezone1.png", 1280, 720);
        }
        else if (zone == 1) {
            this.lumiere_.setImage("Lumierezone2.png", 1280, 720);
        }
        else if (zone == 2) {
            this.lumiere_.setImage("Lumierezone3.png", 1280, 720);
        }
        else if (zone == 3) {
            this.lumiere_.setImage("Lumierezone4.png", 1280, 720);
        }
        else if (zone == 4) {
            this.lumiere_.setImage("Lumierezone5.png", 1280, 720);
        }
        if (this.soleilallume_ == true) {
            this.lumiere_.show();
            this.messageSoleil_.hide();
            this.soleil1_.setImage("soleil1.png", 94, 89);
            this.soleil2_.setImage("soleil2.png", 156, 73);
            this.soleil3_.setImage("soleil3.png", 188, 57);
            this.soleil4_.setImage("soleil4.png", 220, 42);
            this.soleil5_.setImage("soleil5.png", 248, 26);
        }
        else {
            this.lumiere_.hide();
            this.messageSoleil_.show();
            this.soleil1_.setImage("soleil1vide.png", 94, 89);
            this.soleil2_.setImage("soleil2vide.png", 156, 73);
            this.soleil3_.setImage("soleil3vide.png", 188, 57);
            this.soleil4_.setImage("soleil4vide.png", 220, 42);
            this.soleil5_.setImage("soleil5vide.png", 248, 26);
        }
    }
    telechargerNiveau(numero) {
        if (numero == 1)
            this.persoxstart_ = 150;
        if (numero == 2)
            this.persoxstart_ = 50;
        if (numero == 3)
            this.persoxstart_ = 130;
        let requete = new XMLHttpRequest();
        let parametres = "niveau=" + numero;
        console.log("appel");
        requete.open("get", "http://192.168.56.101/~saetomarchimbaud/api.php?" + parametres);
        requete.onreadystatechange = () => {
            if (requete.readyState == XMLHttpRequest.DONE
                && requete.status == 200) {
                console.log("ICI", requete, JSON.parse(requete.responseText));
                let item = JSON.parse(requete.responseText);
                this.niveau_ = item;
                this.start_suite();
            }
        };
        requete.send();
        console.log(this.niveau_);
    }
    gagner() {
        this.pause();
        new Audio("claps.mp3").play();
        if (this.niveauactuel_ < 3) {
            this.popupnext_.show();
            this.niveauactuel_ += 1;
            this.popupnext_.addEventListener("mousedown", this.ecouteurNext_);
        }
        else {
            this.messagefinal_.show();
            this.niveauactuel_ = 1;
            this.messagefinal_.addEventListener("mousedown", this.ecouteurFin_);
        }
    }
    perdre() {
        console.log("perdu");
        this.perso_.setImage("Persozap4.png", 40, 55);
        new Audio("mortzap.mp3").play();
        let X = this.perso_.getX();
        setTimeout(() => { this.perso_.setX(X + 10); }, 0);
        setTimeout(() => { this.perso_.setX(X - 10); }, 100);
        setTimeout(() => { this.perso_.setX(X + 10); }, 200);
        setTimeout(() => { this.perso_.setX(X - 10); }, 300);
        setTimeout(() => { this.perso_.setX(X + 10); }, 400);
        setTimeout(() => { this.perso_.setX(X - 10); }, 500);
        setTimeout(() => { this.perso_.setX(X + 10); }, 600);
        setTimeout(() => { this.perso_.setX(X - 10); }, 700);
        setTimeout(() => { this.perso_.setX(X + 10); }, 800);
        setTimeout(() => { this.perso_.setX(X - 10); }, 900);
        setTimeout(() => { this.perso_.setX(X + 10); }, 1000);
        setTimeout(() => { this.perso_.setX(X - 10); }, 1100);
        setTimeout(() => { this.perso_.setX(X + 10); }, 1200);
        setTimeout(() => { this.perso_.setX(X - 10); }, 1300);
        setTimeout(() => { this.perso_.setX(X + 10); }, 1400);
        setTimeout(() => { this.perso_.setX(X); }, 1500);
        setTimeout(() => { this.mortreset(); }, 1500);
    }
    mortreset() {
        console.log("mortreset");
        this.perso_.setImage("perso.png", 40, 55);
        this.perso_.setXY(this.persoxstart_, this.getHeight() - this.perso_.getHeight() - 20);
        this.perso_.futurx_ = this.persoxstart_;
        this.perso_.futury_ = this.getHeight() - this.perso_.getHeight() - 20;
        this.perso_.enlair_ = false;
        this.perso_.directionHaut_ = false;
        this.perso_.directionDroite_ = false;
        this.perso_.directionGauche_ = false;
        setTimeout(() => { this.perso_.animer(); }, 0);
    }
    niveau(niveau) {
        console.log("niveau");
        let json;
        if (niveau == 1) {
            this.persoxstart_ = 150;
            json = [
                [],
                [[400, 120, 370]],
                [[700, 120, 370]],
                [],
                [],
                [[500, 1000]]
            ];
        }
        if (niveau == 2) {
            this.persoxstart_ = 50;
            json = [
                [],
                [[400, 245]],
                [[700, 120, 370]],
                [[1100, 245]],
                [],
                [[500, 25], [560, 60, 30, 500]]
            ];
        }
        if (niveau == 3) {
            this.persoxstart_ = 130;
            json = [
                [[300, 120]],
                [[550, 370]],
                [[800, 245]],
                [[985, 370]],
                [],
                [[100, 1155], [1100, 60, 30, 600], [685, 60, 30, 500]]
            ];
        }
        this.niveau_ = json;
        this.start_suite();
    }
    initialiserNiveau3() {
        console.log("initialiserNiveau3");
        let json = this.niveau_;
        let jardintri = [];
        for (let i = 0; i < json.length; i++) {
            if (i != 5) {
                for (let j = 0; j < json[i].length; j++) {
                    console.log("Zone " + i + ", ");
                    if (json[i][j] != null) {
                        let tronctest1 = new Troncoupe(document.createElement("img"));
                        this.appendChild(tronctest1);
                        tronctest1.setXY(json[i][j][0], 250);
                        let tronctest2 = new Tronc(document.createElement("img"), this);
                        this.appendChild(tronctest2);
                        tronctest2.setHeight(450 - tronctest1.getHeight());
                        tronctest2.setXY(json[i][j][0], 250 + tronctest1.getHeight());
                        this.troncs_.push(tronctest2);
                        console.log("tronc1", tronctest1.getX(), tronctest1.getX() + tronctest1.getWidth());
                        jardintri.push([tronctest1, tronctest2]);
                        for (let k = 1; k < json[i][j].length; k++) {
                            let platest = new Feuilles(document.createElement("img"));
                            this.appendChild(platest);
                            platest.setXY(tronctest1.getX() - 64, (this.zone_.getY() + this.zone_.getHeight() - json[i][j][k]));
                            this.plateformes_.push(platest);
                            this.feuilles_.push(platest);
                            let lianetest = new Liane(document.createElement("img"));
                            this.appendChild(lianetest);
                            lianetest.setXY(tronctest1.getX() - 64, (this.zone_.getY() + this.zone_.getHeight() - json[i][j][k] + 10));
                            let lianetest3 = new Liane(document.createElement("img"));
                            this.appendChild(lianetest3);
                            lianetest3.setXY(tronctest1.getX() - 64, (this.zone_.getY() + this.zone_.getHeight() - json[i][j][k] + 30));
                            let lianetest4 = new Liane(document.createElement("img"));
                            this.appendChild(lianetest4);
                            lianetest4.setXY(tronctest1.getX() - 64, (this.zone_.getY() + this.zone_.getHeight() - json[i][j][k] - 10));
                            let lianetest12 = new Liane2(document.createElement("img"));
                            this.appendChild(lianetest12);
                            lianetest12.setXY(tronctest1.getX() - 64, (this.zone_.getY() + this.zone_.getHeight() - json[i][j][k] + 10));
                            let lianetest32 = new Liane2(document.createElement("img"));
                            this.appendChild(lianetest32);
                            lianetest32.setXY(tronctest1.getX() - 64, (this.zone_.getY() + this.zone_.getHeight() - json[i][j][k] + 30));
                            let lianetest42 = new Liane2(document.createElement("img"));
                            this.appendChild(lianetest42);
                            lianetest42.setXY(tronctest1.getX() - 64, (this.zone_.getY() + this.zone_.getHeight() - json[i][j][k] - 10));
                            jardintri.push([platest, lianetest, lianetest3, lianetest4, lianetest12, lianetest32, lianetest42]);
                        }
                    }
                }
            }
            else {
                this.fin_ = new Plateforme(document.createElement("img"));
                this.appendChild(this.fin_);
                this.fin_.setDimension(100, json[i][0][0]);
                this.fin_.setXY(json[i][0][1], (this.zone_.getY() + this.zone_.getHeight() - this.fin_.getHeight()));
                this.plateformes_.push(this.fin_);
                this.feuilles_.push(this.fin_);
                this.fin_.setImage("plateformefin.png", 100, 26);
                if (this.fin_.getX() + this.fin_.getWidth() / 2 < this.getWidth() / 2)
                    this.fin_.getElement().style.transform = "scaleX(-1)";
                this.fin_.getElement().style.zIndex = "6";
                this.victoire_ = new Victoire(document.createElement("img"), this);
                this.appendChild(this.victoire_);
                this.victoire_.setXY(this.fin_.getX() + ((this.fin_.getWidth() - this.victoire_.getWidth()) / 2), this.fin_.getY() - this.victoire_.getHeight());
                this.victoire_.getElement().style.zIndex = "6";
                for (let j = 1; j < json[i].length; j++) {
                    console.log("ICI", json[i][j][0], json[i][j][1], json[i][j][2], json[i][j][3]);
                    let obstacletrou = new Sprite(document.createElement("img"));
                    this.appendChild(obstacletrou);
                    obstacletrou.setImage("obstacletrou.png", json[i][j][2] * 80 / 30, 60);
                    obstacletrou.setXY(json[i][j][0] - 33, (this.zone_.getY() + this.zone_.getHeight() - obstacletrou.getHeight()));
                    this.obstacles_.push(obstacletrou);
                    let obstaclebeche = new Sprite(document.createElement("img"));
                    this.appendChild(obstaclebeche);
                    obstaclebeche.setImage("obstaclebeche.png", json[i][j][2] * 80 / 30, 60);
                    obstaclebeche.setXY(json[i][j][0] - 33, (this.zone_.getY() + this.zone_.getHeight() - obstaclebeche.getHeight() - obstacletrou.getHeight()));
                    this.plateformes_.push(obstaclebeche);
                    this.obstacles_.push(obstaclebeche);
                    let obstaclemanche = new Sprite(document.createElement("img"));
                    this.appendChild(obstaclemanche);
                    obstaclemanche.setImage("obstaclemanche.png", json[i][j][2] * 80 / 30, json[i][j][3] - obstaclebeche.getHeight() - obstacletrou.getHeight());
                    obstaclemanche.setXY(json[i][j][0] - 33, (this.zone_.getY() + this.zone_.getHeight() - obstaclemanche.getHeight() - obstacletrou.getHeight() - obstaclebeche.getHeight()));
                    this.plateformes_.push(obstaclemanche);
                    this.obstacles_.push(obstaclemanche);
                }
            }
        }
        for (let i = 0; i < jardintri.length; i++) {
            for (let j = 0; j < jardintri[i].length; j++) {
                jardintri[i][j].calculDestination();
            }
        }
        console.log("ICIIII", jardintri);
        for (let i = 0; i < jardintri.length; i++) {
            if (jardintri[i][0].getX() + jardintri[i][0].getWidth() / 2 >= 0 && jardintri[i][0].getX() + jardintri[i][0].getWidth() / 2 < this.zone1_) {
                this.jardin_[0].push(jardintri[i]);
                console.log(jardintri[i][0].getX() + jardintri[i][0].getWidth() / 2, "zone 0");
            }
            else if (jardintri[i][0].getX() + jardintri[i][0].getWidth() / 2 >= this.zone1_ && jardintri[i][0].getX() + jardintri[i][0].getWidth() / 2 < this.zone2_) {
                this.jardin_[1].push(jardintri[i]);
                console.log(jardintri[i][0].getX() + jardintri[i][0].getWidth() / 2, "zone 1");
            }
            else if (jardintri[i][0].getX() + jardintri[i][0].getWidth() / 2 >= this.zone2_ && jardintri[i][0].getX() + jardintri[i][0].getWidth() / 2 < this.zone3_) {
                this.jardin_[2].push(jardintri[i]);
                console.log(jardintri[i][0].getX() + jardintri[i][0].getWidth() / 2, "zone 2");
            }
            else if (jardintri[i][0].getX() + jardintri[i][0].getWidth() / 2 >= this.zone3_ && jardintri[i][0].getX() + jardintri[i][0].getWidth() / 2 < this.zone4_) {
                this.jardin_[3].push(jardintri[i]);
                console.log(jardintri[i][0].getX() + jardintri[i][0].getWidth() / 2, "zone 3");
            }
            else if (jardintri[i][0].getX() + jardintri[i][0].getWidth() / 2 >= this.zone4_ && jardintri[i][0].getX() + jardintri[i][0].getWidth() / 2 < this.zone5_) {
                this.jardin_[4].push(jardintri[i]);
                console.log(jardintri[i][0].getX() + jardintri[i][0].getWidth() / 2, "zone 4");
            }
        }
        console.log("Jardin : ", this.jardin_);
    }
}
