//LET
let favoriteCityId = "rome";
console.log(favoriteCityId)
favoriteCityId = "Paris"
console.log(favoriteCityId)

//CONST
const citiesId = ["paris", "nyc", "rome", "rio-de-janeiro"]
console.log(citiesId)
// citiesId = [] TypeError: Assignment to constant variable. Impossible car Constante
citiesId.push("Tokyo")
console.log(citiesId)

//CREATION D'OBJET
function getWeather(citiesId) {
    let city = citiesId;
    let temperature = 20;
    return { city, temperature }
}
const weather = getWeather(favoriteCityId);
console.log(weather)

//Affectation destructurée
const { city } = weather //ici on passe par la constante
const { temperature } = getWeather() //ici par la methode
console.log(city)
console.log(temperature)

//Rest operator
const [parisId, nycId, ...othersCitiesId] = citiesId
console.log(parisId)
console.log(nycId)
console.log(othersCitiesId.length)

//Classe
class Trip {
    constructor(id, name, imageUrl) {
        this.id = id;
        this.name = name;
        this.imageUrl = imageUrl;
    }
    toString() {
        return "Trip [" + this.id + ", " + this.name + ", " + this.imageUrl + ", " + this._price + "]"
    }
    get price(){
        return this._price
    }
    set price(newPrice) {
        this._price= newPrice
    }
    static getDefaultTrip() {
        return  new Trip("rio-de-janeiro", "Rio de Janeiro", "img/rio-de-janeiro.jpg") 
    }
}
let parisTrip = new Trip("paris", "Paris", "img/paris.jpg") 
console.log(parisTrip)
console.log(parisTrip.name) 
parisTrip._price = 100
console.log(parisTrip.toString())
const defaultTrip = Trip.getDefaultTrip()
console.log(defaultTrip.toString())

//Héritage
class FreeTrip extends Trip {
    constructor(id, name, imageUrl) {
        super(id, name, imageUrl);
        this._price=0;
    }
    toString() {
        return "Free" + super.toString()
    }
}
const freeTrip = new FreeTrip("nantes", "Nantes", "img/nantes.jpg")
console.log(freeTrip.toString())

//Promise, Set, Map, Arrow Function
class TripService {
    constructor() {
       // Set of 3 trips
         this.tripi = new Set()
            this.tripi.add(new Trip('paris', 'Paris', 'img/paris.jpg'))
            this.tripi.add(new Trip('nantes', 'Nantes', 'img/nantes.jpg'))
            this.tripi.add(new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg'))
    }

    // retourne un voyage (objet Trip) correspondant au nom (TripName) fourni
    findByName(tripName) {

         return new Promise((resolve, reject) => {
                setTimeout( () => {
                 //AVEC UN TABLEAU
                const tripTrouve = Array.from(this.tripi)
                    .find((unTrip) => unTrip.name === tripName) 

                    if (tripTrouve) {
                        resolve(tripTrouve)
                    }
                    else {
                        reject(`No trip with name :   ${tripName}`)
                    }
                }, 2000)
        });
    }
}

class PriceService {

    constructor() {
        //Map of 2 trips
         this.mappi = new Map()
        this.mappi.set("paris", 100)
        this.mappi.set("rio-de-janeiro", 800)
    }

    findPriceByTripId(tripId) {

       return new Promise((resolve, reject) => {
                    setTimeout( () => {
                        const tripPrix = this.mappi.get(tripId)
                            if (tripPrix) { 
                                resolve(tripPrix)
                            }
                            else {
                                reject(`No trip with Id :   ${tripId}`)
                            }                     
                    }, 2000)
               });
    }
}

//instance de PriceService et TripService
const priceService = new PriceService()
const tripService = new TripService()

//recherche par nom de voyage avec la valeur Paris
tripService.findByName('Paris')
//ici j'ai une promesse
    .then(tripTrouve => console.log('Trip found :', tripTrouve))

    /* Autre méthode : on peut chainer les "then"
    .then(tripTrouve => tripTrouve.id)
    .then(idTrip => console.log('id', idTrip))*/

    //ici c'est le cas d'erreur qu'on traite
    .catch(msgErr => console.log('Oops', msgErr))

tripService.findByName('Toulouse')
        .then(tripTrouve => tripTrouve.id)
        .then(idTrip => console.log('id', idTrip))
        .catch(msgErr => console.log('Oops', msgErr))


priceService.findPriceByTripId("paris")
//.then(prixTrouve => prixTrouve.id)
.then(idPrice => console.log('Price found:', idPrice))
.catch(msgErr => console.log('Oops', msgErr))




tripService.findByName('Rio de Janeiro')
.then(idP => {
    priceService.findPriceByTripId(idP.id)
        .then(prixNom => console.log('Price found:', prixNom)) })
.catch(msgErr => console.log('Oops', msgErr))

tripService.findByName('Nantes')
.then(idP => {
    priceService.findPriceByTripId(idP.id)
        .then(prixNom => console.log('Price found:', prixNom))
        .catch(msgErr => console.log('Oops No price and', msgErr))    })

