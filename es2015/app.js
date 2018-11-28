//let
let favoriteCityId = "rome";
console.log(favoriteCityId);
favoriteCityId = "paris";
console.log(favoriteCityId);

//-----------------------------------------------------------------------------------
//const
const citiesId = ["paris", "nyc", "rome", "rio-de-janeiro"];
console.log(citiesId);
//citiesId = []; On ne peut pas modifier citiesId 
citiesId.push("tokyo");
console.log(citiesId);

//-----------------------------------------------------------------------------------
//Création d'objet
function getWeather(cityId) {
    let city = cityId;
    let temperature = 20;
    return { city: `${city}`, temperature: `${temperature}` }

}
console.log(getWeather("Paris"));

//-----------------------------------------------------------------------------------
//Affectation destructurée
const weather = {
    city: 'Paris',
    temperature: 20
}
const {
    city: c,
    temperature: t
} = weather;
console.log(c);
console.log(t)

//-----------------------------------------------------------------------------------
//Rest operator
const [parisId, nycId, ...othersCitiesId] = citiesId;
console.log(parisId, "\n" + nycId, "\n" + othersCitiesId.length);

//-----------------------------------------------------------------------------------
//classe
class Trip {
    constructor(id, name, imageUrl) {
        this.id = id;
        this.name = name;
        this.imageUrl = imageUrl;
    }

    toString() {
        return "Trip [" + this.id + ", " + this.name + ", " + this.imageUrl + ", " + this._price + "]";
    }

    get price() {
        return this._price;
    }

    set price(newPrice) {
        this._price = newPrice;
    }

    static getDefaultTrip() {
        return new Trip("rio-de-janeiro", "Rio de Janeiro", "img/rio-de-janeiro.jsp");
    }
}

let parisTrip = new Trip("paris", "Paris", "img/paris.jps");
console.log(parisTrip);
console.log(parisTrip.name);
console.log(parisTrip.toString());

parisTrip.price = 100;
console.log(parisTrip.toString());

const defaultTrip = Trip.getDefaultTrip();
console.log(defaultTrip.toString());

//-----------------------------------------------------------------------------------
//Heritage
class FreeTrip extends Trip {
    constructor(id, name, imageUrl) {
        super(id, name, imageUrl)
        this.price = 0;
    }
}

const freeTrip = new FreeTrip("nantes", "Nantes", "img/nantes.jpg")

console.log(freeTrip.toString());

//-----------------------------------------------------------------------------------
//Promise, Set, Map, Arrow Function
class TripService {

    constructor() {
        // TODO Set of 3 trips
        //
        // new Trip('paris', 'Paris', 'img/paris.jpg')
        // new Trip('nantes', 'Nantes', 'img/nantes.jpg')
        // new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg')
        new Set(new Trip('paris', 'Paris', 'img/paris.jpg'),
            new Trip('nantes', 'Nantes', 'img/nantes.jpg'),
            new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg'))

    }

    findByName(tripName) {

        return new Promise((resolve, reject) => {

            setTimeout(() => {
                // ici l'exécution du code est asynchrone

                // TODO utiliser resolve et reject en fonction du résultat de la recherche
                if (err) {
                    reject("No trip with name " + tripName)
                } else {
                    resolve(tripName)
                }
            }, 2000)
        });
    }
}

class PriceService {

    constructor() {
        // TODO Map of 2 trips
        // 'paris' --> price = 100
        // 'rio-de-janeiro' --> price = 800)
        // no price for 'nantes'

        new Map((cle = 'paris', price = 100), (cle = 'rio-de-janeiro', price = 800))
    }

    findPriceByTripId(tripId) {

        return new Promise((resolve, reject) => {

            setTimeout(() => {
                // ici l'exécution du code est asynchrone

                // TODO utiliser resolve et reject en fonction du résultat de la recherche
                if (err) {
                    reject("No price found for id " + tripId)
                } else {
                    resolve(tripId)
                }

            }, 2000)
        });
    }
}

let tripService = new TripService();
let priceService = new PriceService();

console.log(tripService.findByName("Paris"));
