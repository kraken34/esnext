

class Sejour{
    //private _nom:string;
    //private _prix:number;

    constructor(private _nom:string, private _prix:number){
    }

    getNom():string{
        return this._nom;
    }

    setNom(nom:string):void{
        this._nom=nom;
    }

    getPrix():number{
        return this._prix;
    }

    setPrix(prix:number):void{
        this._prix=prix;
    }
}

class SejourService{
    constructor(private _sejours:Sejour[]){
    }

    findSejourByName(name:string):Sejour|undefined{
        return this._sejours.find(s => s.getNom()===name);
    }

    getSejours():Sejour[]{
        return this._sejours;
    }

    setSejours(sejours:Sejour[]):void{
        this._sejours=sejours;
    }
}

const ListeSejoursDisponibles:SejourService = new SejourService([
    new Sejour("Marseille", 30),
    new Sejour("Nantes",120),
    new Sejour("Vitòria ES",400)
]);

let voyageVoyage = ListeSejoursDisponibles.findSejourByName("Vitòria ES");

console.log(voyageVoyage);