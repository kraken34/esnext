"use strict";
var Meteo = /** @class */ (function () {
    //this.ville:string;
    function Meteo(_ville, _temperature) {
        this._ville = _ville;
        this._temperature = _temperature;
    }
    Meteo.prototype.toString = function () {
        return this._ville + " - " + this._temperature + "\u00B0C";
    };
    return Meteo;
}());
var montpellierCeMatin = new Meteo("Montpellier", 25);
console.log(montpellierCeMatin.toString());
