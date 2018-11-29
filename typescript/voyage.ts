console.log("Voyage App");
class Sejour{
    constructor(private nom:string, private prix:number){

    }

    get Nom():string{
        return this.nom;
    }

    get Prix():number{
        return this.prix;  
    }
}

class SejourService {
    private _sejours:Sejour[]
    constructor(){
        this._sejours = [];
        this._sejours.push(new Sejour("Paris",100))
        this._sejours.push(new Sejour("Toulouse",200))
        this._sejours.push(new Sejour("Lyon",300))

    }

    findSejoursById(nom:string){
        return this._sejours.filter(sejour => sejour.Nom === nom);
    }
    
}

let sejourService = new SejourService();
console.log(sejourService.findSejoursById("Paris"));