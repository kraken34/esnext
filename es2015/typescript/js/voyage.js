"use strict";
var Sejour = /** @class */ (function () {
    function Sejour(_nom, _prix) {
        this._nom = _nom;
        this._prix = _prix;
    }
    Sejour.prototype.getNomComplet = function () {
        return "nom + " + this._nom;
    };
    Sejour.prototype.setNom = function () {
        return this._nom;
    };
    return Sejour;
}());
var SejourService = /** @class */ (function () {
    function SejourService(sejour) {
        if (sejour === void 0) { sejour = []; }
        this.sejour = sejour;
        sejour = [new Sejour("Nantes", 12)];
    }
    SejourService.prototype.findByName = function (nom) {
        return Sejour.findByName().nom;
    };
    return SejourService;
}());
