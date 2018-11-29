"use strict";
console.log("Meteo App");
var Meteo = /** @class */ (function () {
    //ville:string
    function Meteo(_ville, _temperature) {
        this._ville = _ville;
        this._temperature = _temperature;
    }
    Meteo.prototype.toString = function () {
        return this._ville + " - " + this._temperature + "\u00B0C";
    };
    return Meteo;
}());
//let nantesCeMatin = new Meteo();
//les arguments du contructeur de Meteo n'ont pas été initialisés
var nantesCeMatin = new Meteo("Nantes", 12);
console.log(nantesCeMatin.toString());
