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
        let tripi = new Set()
            tripi.add(new Trip('paris', 'Paris', 'img/paris.jpg'))
            tripi.add(new Trip('nantes', 'Nantes', 'img/nantes.jpg'))
            tripi.add(new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg'))
    }

    findByName(tripName) {

         return new Promise((resolve, reject) => {

             setTimeout( () => {
                 // ici l'exécution du code est asynchrone
                    if (tripName == Trip.name || tripName != null) {
                        resolve(tripName)
                    }
                    else {
                        reject("No trip with name :" + tripName)
                    }
             }, 2000)
        });
    }
}

class PriceService {

    constructor() {
        //Map of 2 trips
        const mappi = new Map()
        mappi.set("paris", 100)
        mappi.set("rio-de-janeiro", 800)
    }

    findPriceByTripId(tripId) {

       return new Promise((resolve, reject) => {

                    setTimeout( () => {
                        // ici l'exécution du code est asynchrone
                            if (tripId == mappi.id { 
                                resolve()
                            }
                            else {
                                reject()

                            }                        // TODO utiliser resolve et reject en fonction du résultat de la recherche

                    }, 2000)
               });
    }
}
