class Sejour {
    constructor(private _nom :string, private _prix:number){
    }
    public get nom():string {
        return  this._nom;
    }
    public get prix():number {
        return this._prix;
    }
}


class SejourService {
    private _listSejour :Sejour[]=[];
    constructor(){
        this._listSejour.push(new Sejour("Japon",800));
        this._listSejour.push(new Sejour("France",500));
    }
    public sejourByName(name:string):Sejour|undefined{
        let sejour=this._listSejour.find(unSejour =>unSejour.nom===name);
        return sejour;
    }
  
}
const mesSejourService= new SejourService();
console.log(mesSejourService.sejourByName("Japon"))