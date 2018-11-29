console.log("Voyage App");

class Sejour {
    constructor(private _nom:string, private _prix:number) {

    }
    
    get nom() {
        return this._nom;
    }

    get prix() {
        return this._prix;
    }
}

class SejourService {
    private _sejours:Sejour[];

    constructor(sejours?:Sejour[]) {
        if (sejours){
            this._sejours = sejours;
        }else {
            this._sejours = [];
            this._sejours.push(new Sejour("Paris", 500));
            this._sejours.push(new Sejour("Nantes", 250));
            this._sejours.push(new Sejour("Toulouse", 50));
        }
    }

    chercheSejourParNom(nom:string) {
        return this._sejours.filter(sejour => sejour.nom === nom);
    }
}

let sejourService = new SejourService();
console.log(sejourService.chercheSejourParNom("Paris"));