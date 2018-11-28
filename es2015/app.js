// Créer une variable 'favoriteCityId'
let favoriteCityId = 'rome'
console.log(favoriteCityId)

favoriteCityId = 'paris'
console.log(favoriteCityId)

const citiesId = ["paris", "nyc", "rome", "rio-de-janeiro"]
console.log(citiesId)

/** Code pas pris car déjà défini
 * 
 * const citiesId = []
 * console.log(citiesId)
 */

 console.log(citiesId.push("tokyo"))
 console.log(citiesId)


 // Création d'objet
function getWeather(cityId) {
     let city = cityId.toUpperCase()
     let temperature = 20
     return {city, temperature};
}

const weather = getWeather(favoriteCityId)
console.log(weather)



// Affectation destructurée
const {city, temperature} = weather;
console.log(city, temperature)



// Rest operator => Créer à partir du tableau 3 constantes
const [parisId, nycId, ...othersCitiesId] = citiesId
console.log(parisId, nycId, othersCitiesId.length)



// créer une classe
class Trip {
    constructor(id, name, imageUrl) {
        this.id = id;
        this.name = name;
        this.imageUrl = imageUrl;
    }

    toString() {
        return this.id + ' / ' + this.name + ' / ' + this.imageUrl + ' / ' + this._price
    }


    // Ajout des getter/setter pour le prix
    get price() {
        return this._price
    }
    set price(newPrice) {
        this._price = newPrice
    }

    // Ajout d'une méthode statique
    static getDefaultTrip() {
        return new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg')
    }
}

let parisTrip = new Trip('paris', 'Paris', 'img/paris.jpg')
parisTrip.price = '100'
console.log(parisTrip, parisTrip.name)
console.log(parisTrip.toString())


// Créer une constante qui récupère le résultat de l'exécution de la méthode getDefaultTrip()
const defaultTrip = Trip.getDefaultTrip()
console.log(defaultTrip.toString())


// Héritage
class FreeTrip extends Trip {
    constructor(id, name, imageUrl) {
        super(id, name, imageUrl)
        this._price = 0;
    }
}

const freeTrip = new FreeTrip('nantes', 'Nantes', 'img/nantes.jpg')
console.log(freeTrip.toString())


// Redéfinir la méthode toString()
console.log('Free' + Trip.toString())



// Promise; Set, Map, Arrow Function
class TripService{
    constructor() {
        // TODO     => Set of 3 trips
        this.trips = new Set([new Trip('paris', 'Paris', 'img/paris.jpg'), new Trip('nantes', 'Nantes', 'img/nantes.jpg'), new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg')])
    }

    findByName(tripName) {
        return new Promise((resolve, reject) => {
            setTimeout( () => {
                // ici l'exécution du code est asynchrone

                // TODO     => utiliser resolve et reject en fonction du résultat de la recherche
                
                if(err) {
                    reject(err)
                } else {
                    resolve(id)
                }
            }, 2000)
        })
    }
}

class PriceService {
    constructor(identifiant, prix) {
        this.identifiant = identifiant
        this.prix = prix
        // TODO     => Map of 2 trips
        // 'paris' --> price = 100
        // 'rio-de-janeiro' --> price = 800
        // no price for 'nantes'
        this.priceService = new Map([['paris', 100], ['rio-de-janeiro', 800]])
        console.log(priceService)
    }

    findPriceByTripId(tripId) {
        return new Promise((resolve, reject) => {
            setTimeout( () => {
                // ici l'exécution du code est asynchrone
                // TODO     => utiliser resolve et reject en fonction du résultat de la recherche
            }, 2000)
        })
    }
}

