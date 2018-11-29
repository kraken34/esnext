class Sejour {
    constructor(private _nom: string, private _prix: number) { }
    get nom(): string { return this._nom }
    get prix(): number { return this._prix }
}

class SejourService {
    private sejour: Sejour[] = [];
    constructor() {
        this.sejour.push(new Sejour("ici", 20))
        this.sejour.push(new Sejour("là", 20_000))
    }
    search(name: string): Sejour | undefined {
        let found = this.sejour.find(s => s.nom == name)
        return found
    }
}

let sej: SejourService = new SejourService()
console.log(sej.search("ici"))