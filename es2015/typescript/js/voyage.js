"use strict";
var Sejour = /** @class */ (function () {
    function Sejour(_nom, _prix) {
        this._nom = _nom;
        this._prix = _prix;
    }
    Sejour.prototype.toString = function () {
        return this._nom + " - " + this._prix;
    };
    Object.defineProperty(Sejour.prototype, "nom", {
        get: function () {
            return this._nom;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sejour.prototype, "prix", {
        get: function () {
            return this._prix;
        },
        enumerable: true,
        configurable: true
    });
    return Sejour;
}());
var SejourService = /** @class */ (function () {
    function SejourService() {
        this._sejours = [];
        this._sejours.push(new Sejour('Montpellier', 80));
        this._sejours.push(new Sejour('Paris', 1200));
    }
    SejourService.prototype._findSejourbyName = function (nom) {
        var ceSejour /*implicitement Sejour|undefined */ = this._sejours.find(function (unSejour) { return nom === unSejour.nom; });
        return ceSejour;
    };
    return SejourService;
}());
var sejourService = new SejourService();
var sejourTrouve = sejourService._findSejourbyName('Montpellier');
console.log(sejourTrouve);
