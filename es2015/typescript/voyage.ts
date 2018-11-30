class Sejour {

    constructor(private _nom: string, private _prix: number) {
    }

     get NomComplet(): string {
        return `nom + ${this._nom}`;
    }
    setNom() {
        return this._nom
    }

}

class SejourService {

    constructor(private sejour: Sejour[] = []) {

        this.sejour = [new Sejour("Nantes", 12), new Sejour("Paris", 20)]

    }



    findByName(nom: string): Sejour | undefined {

        return this.sejour.find(city => city.NomComplet === nom)

    }

}



let sejourService = new SejourService();


console.log(sejourService.findByName("Paris"))

