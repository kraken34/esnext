class Meteo {
    //this.ville:string;
    constructor(private _ville:string, private _temperature:number){
    }

    toString():string{
        return `${this._ville} - ${this._temperature}°C`
    }
}

let montpellierCeMatin = new Meteo("Montpellier", 25);

console.log(montpellierCeMatin.toString());