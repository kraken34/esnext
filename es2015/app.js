let favoriteCityId = "rome";
console.log(favoriteCityId);

favoriteCityId = "Paris";
console.log(favoriteCityId);

////////////// CONST ///////////////////

const citiesId = ["paris", "nyc", "rome", "rio-de-janeiro"]
console.log(citiesId);

// citiesId = [];

console.log(citiesId.push("tokyo"));
console.log(citiesId);

function getWeather(cityId) {
    let city = cityId.toUpperCase();
    let temperature = 20;
    return {city, temperature}
}

const weather = getWeather(favoriteCityId);
console.log(weather);


const {city, temperature} = weather;
console.log(city, temperature);

const [parisId, nycId, ...othersCitiesId] = citiesId;
console.log(parisId, nycId, othersCitiesId.length);

class Trip {
    constructor(id, name, imageUrl) {
        this.id = id;
        this.name = name;
        this.imageUrl = imageUrl;
    }

    toString() {
        return `${this.id} ${this.name} ${this.imageUrl} ${this._price}`;
    }

    get price() {
        return this._price
    }

    set price(newPrice) {
        this._price = newPrice
    }

    static getDefaultTrip() {
        return  new Trip("rio-de-janeiro", "Rio de Janeiro", "img/rio-de-janeiro.jpg");
    }

    
}

const defaultTrip = Trip.getDefaultTrip();
console.log(defaultTrip.toString());


let parisTrip = new Trip("paris", "Paris", "img/paris.jpg");
console.log(parisTrip, parisTrip.name);

console.log(parisTrip.toString());

parisTrip.price = "100";

console.log(parisTrip.toString());


class FreeTrip extends Trip {
    constructor(id, name, imageUrl) {
        super(id, name, imageUrl);
    }
}

const freeTrip = new FreeTrip("nantes", "Nantes", "img/nantes.jpg")
console.log(freeTrip.toString());

class TripService {

    constructor() {
        // TODO Set of 3 trips
        
        this.trips = new Set() 

        this.trips.add(new Trip('paris', 'Paris', 'img/paris.jpg'))
        this.trips.add(new Trip('nantes', 'Nantes', 'img/nantes.jpg'))
        this.trips.add(new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg'))
    }
    
    findByName(tripName) {

        return new Promise((resolve, reject) => {

            setTimeout( () => {
                // ici l'exécution du code est asynchrone

                // TODO utiliser resolve et reject en fonction du résultat de la recherche

            }, 2000)
       });
   }    
}  

class PriceService {

    constructor(identifiant, prix) {
        this.identifiant = identifiant
        this.prix = prix
        // TODO Map of 2 trips
        // 'paris' --> price = 100
        // 'rio-de-janeiro' --> price = 800)
        // no price for 'nantes'
    }

    findPriceByTripId(tripId) {

       return new Promise((resolve, reject) => {

                    setTimeout( () => {
                        // ici l'exécution du code est asynchrone

                        // TODO utiliser resolve et reject en fonction du résultat de la recherche

                    }, 2000)
               });
    }
}