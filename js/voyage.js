"use strict";
var Sejour = /** @class */ (function () {
    function Sejour(nom, prix) {
        this.nom = nom;
        this.prix = prix;
    }
    Object.defineProperty(Sejour.prototype, "Nom", {
        get: function () {
            return this.nom;
        },
        set: function (nom) {
            this.nom = nom;
        },
        enumerable: true,
        configurable: true
    });
    return Sejour;
}());
var SejourService = /** @class */ (function () {
    function SejourService(sejour) {
        if (sejour === void 0) { sejour = []; }
        this.sejour = sejour;
        this.sejour = [new Sejour("Nantes", 12), new Sejour("Montpellier", 20)];
    }
    SejourService.prototype.findByName = function (nom) {
        return this.sejour.find(function (x) { return x.Nom === nom; });
    };
    return SejourService;
}());
var sejourService = new SejourService();
console.log(sejourService.findByName("Montpellier"));
