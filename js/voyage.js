"use strict";
var Sejour = /** @class */ (function () {
    function Sejour(_nom, _prix) {
        this._nom = _nom;
        this._prix = _prix;
    }
    Object.defineProperty(Sejour.prototype, "nom", {
        get: function () { return this._nom; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sejour.prototype, "prix", {
        get: function () { return this._prix; },
        enumerable: true,
        configurable: true
    });
    return Sejour;
}());
var SejourService = /** @class */ (function () {
    function SejourService() {
        this.sejour = [];
        this.sejour.push(new Sejour("ici", 20));
        this.sejour.push(new Sejour("là", 20000));
    }
    SejourService.prototype.search = function (name) {
        var found = this.sejour.find(function (s) { return s.nom == name; });
        return found;
    };
    return SejourService;
}());
var sej = new SejourService();
console.log(sej.search("ici"));
