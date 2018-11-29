"use strict";
var Sejour = /** @class */ (function () {
    //private _nom:string;
    //private _prix:number;
    function Sejour(_nom, _prix) {
        this._nom = _nom;
        this._prix = _prix;
    }
    Sejour.prototype.getNom = function () {
        return this._nom;
    };
    Sejour.prototype.setNom = function (nom) {
        this._nom = nom;
    };
    Sejour.prototype.getPrix = function () {
        return this._prix;
    };
    Sejour.prototype.setPrix = function (prix) {
        this._prix = prix;
    };
    return Sejour;
}());
var SejourService = /** @class */ (function () {
    function SejourService(_sejours) {
        this._sejours = _sejours;
    }
    SejourService.prototype.findSejourByName = function (name) {
        return this._sejours.find(function (s) { return s.getNom() === name; });
    };
    SejourService.prototype.getSejours = function () {
        return this._sejours;
    };
    SejourService.prototype.setSejours = function (sejours) {
        this._sejours = sejours;
    };
    return SejourService;
}());
var ListeSejoursDisponibles = new SejourService([
    new Sejour("Marseille", 30),
    new Sejour("Nantes", 120),
    new Sejour("Vitòria ES", 400)
]);
var voyageVoyage = ListeSejoursDisponibles.findSejourByName("Vitòria ES");
console.log(voyageVoyage);
