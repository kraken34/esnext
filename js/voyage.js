"use strict";
console.log("Voyage App");
var Sejour = /** @class */ (function () {
    function Sejour(nom, prix) {
        this.nom = nom;
        this.prix = prix;
    }
    Object.defineProperty(Sejour.prototype, "Nom", {
        get: function () {
            return this.nom;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sejour.prototype, "Prix", {
        get: function () {
            return this.prix;
        },
        enumerable: true,
        configurable: true
    });
    return Sejour;
}());
var SejourService = /** @class */ (function () {
    function SejourService() {
        this._sejours = [];
        this._sejours.push(new Sejour("Paris", 100));
        this._sejours.push(new Sejour("Toulouse", 200));
        this._sejours.push(new Sejour("Lyon", 300));
    }
    SejourService.prototype.findSejoursById = function (nom) {
        return this._sejours.filter(function (sejour) { return sejour.Nom === nom; });
    };
    return SejourService;
}());
var sejourService = new SejourService();
console.log(sejourService.findSejoursById("Paris"));
