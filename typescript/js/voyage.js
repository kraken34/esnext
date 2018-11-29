"use strict";
console.log("Voyage App");
var Sejour = /** @class */ (function () {
    function Sejour(_nom, _prix) {
        this._nom = _nom;
        this._prix = _prix;
    }
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
    function SejourService(sejours) {
        if (sejours) {
            this._sejours = sejours;
        }
        else {
            this._sejours = [];
            this._sejours.push(new Sejour("Paris", 500));
            this._sejours.push(new Sejour("Nantes", 250));
            this._sejours.push(new Sejour("Toulouse", 50));
        }
    }
    SejourService.prototype.chercheSejourParNom = function (nom) {
        return this._sejours.filter(function (sejour) { return sejour.nom === nom; });
    };
    return SejourService;
}());
var sejourService = new SejourService();
console.log(sejourService.chercheSejourParNom("Paris"));
