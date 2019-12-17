// Créer une classe séjour

class Sejour{
    constructor(private _nom:string, private _prix:number) {
    }


    // Ajout des getter
    get nom():string {
        return this._nom
    }

    get prix():number {
        return this._prix
    }
}


class SejourService{

    constructor(private sejour:Sejour[] = []) {
        this.sejour.push(new Sejour('Paris', 20))
        this.sejour.push(new Sejour('Bordeaux', 35))
    }

    searchSejourByName(nom:string){
        return this.sejour.find(S => S.nom == nom)
    }
    
}

const sejourTrouve = new SejourService()
console.log(sejourTrouve.searchSejourByName('Paris'))