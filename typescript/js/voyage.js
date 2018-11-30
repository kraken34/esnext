"use strict";
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
    function SejourService() {
        this._listSejour = [];
        this._listSejour.push(new Sejour("Japon", 800));
        this._listSejour.push(new Sejour("France", 500));
    }
    SejourService.prototype.sejourByName = function (name) {
        var sejour = this._listSejour.find(function (unSejour) { return unSejour.nom === name; });
        return sejour;
    };
    return SejourService;
}());
var mesSejourService = new SejourService();
console.log(mesSejourService.sejourByName("Japon"));
