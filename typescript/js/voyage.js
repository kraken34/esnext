"use strict";
// Créer une classe séjour
class Sejour {
    constructor(_nom, _prix) {
        this._nom = _nom;
        this._prix = _prix;
    }
    // Ajout des getter
    get nom() {
        return this._nom;
    }
    get prix() {
        return this._prix;
    }
}
class SejourService {
    constructor(sejour = []) {
        this.sejour = sejour;
        this.sejour.push(new Sejour('Paris', 20));
        this.sejour.push(new Sejour('Bordeaux', 35));
    }
    searchSejourByName(nom) {
        return this.sejour.find(S => S.nom == nom);
    }
}
const sejourTrouve = new SejourService();
console.log(sejourTrouve.searchSejourByName('Paris'));
