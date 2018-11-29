class Sejour {
    constructor(private _nom:string, private _prix:number) {
    }
    public toString():string{
        return `${this._nom} - ${this._prix}`
    }
    public get nom():string {
        return this._nom
    }
    
    public get prix():number {
        return this._prix
    }

}

class SejourService {

    private _sejours:Sejour[]=[]

    constructor(){
        this._sejours.push(new Sejour('Montpellier', 80))
        this._sejours.push(new Sejour('Paris', 1200))
    }

    public _findSejourbyName(nom:string):Sejour|undefined {
        let ceSejour/*implicitement Sejour|undefined */ = this._sejours.find(unSejour => nom === unSejour.nom)
        return ceSejour
    }

}

let sejourService:SejourService = new SejourService()
let sejourTrouve = sejourService._findSejourbyName('Montpellier')
console.log(sejourTrouve);
