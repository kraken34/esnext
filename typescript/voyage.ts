class Sejour {
    constructor(private nom: string, private prix: number) {

    }

    get Nom(): string {
        return this.nom
    }
    set Nom(nom: string) {
        this.nom = nom;
    }
}

class SejourService {
    constructor(private sejour: Sejour[] = []) {
        this.sejour = [new Sejour("Nantes", 12), new Sejour("Montpellier", 20)]
    }

    findByName(nom: string): Sejour | undefined {
        return this.sejour.find(x => x.Nom === nom)
    }
}

let sejourService = new SejourService();
console.log(sejourService.findByName("Montpellier"))