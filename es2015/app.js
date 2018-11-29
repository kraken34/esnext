//let
let favoriteCityId = "rome";
console.log(favoriteCityId);
favoriteCityId = "paris"
console.log(favoriteCityId);

//const
const citiesId = ["paris", "nyc", "rome", "rio-de-janeiro"];
console.log(citiesId);
//TypeError: Assignment to constant variable.
//citiesId = [];
citiesId.push("tokyo")
console.log(citiesId);

//Création d'objet
function getWeather(cityId) {
    let city = cityId.toUpperCase();
    let temperature = 20;

    return { city, temperature }
}
const weather = getWeather(favoriteCityId);
console.log(weather);

//Affectation destructurée
const { city, temperature } = getWeather(favoriteCityId);
console.log(city);
console.log(temperature);

//Rest operator
const [ parisId, nycId , ...othersCitiesId ] = citiesId;
console.log(parisId);
console.log(nycId);
console.log(othersCitiesId.length);

//Classe
class Trip {

    constructor(id, name, imageUrl) {
        this.id = id;
        this.name = name;
        this.imageUrl = imageUrl;
    }

    get price() {
        return this._price;
    }

    set price(price) {
        this._price = price
    }

    toString() {
        return `Trip [${this.id}, ${this.name}, ${this.imageUrl}, ${this._price}]`
    }

    static getDefaultTrip() {
        return new Trip("rio-de-janeiro", "Rio de Jaineiro", "img/rio-de-janeiro.jpg");
    }
}
let parisTrip = new Trip("paris", "Paris", "img/paris.jpg");
console.log(parisTrip);
console.log(parisTrip.name);
console.log(parisTrip.toString());

//Set price with setter
parisTrip.price = 100;
console.log(parisTrip.toString());

//Static method
const defaultTrip = Trip.getDefaultTrip();
console.log(defaultTrip.toString());

//Héritage
class FreeTrip extends Trip {
    constructor(id, name, imageUrl) {
        super(id,name,imageUrl);
        this._price = 0;
    }

    toString()
    {
        return "Free".concat(super.toString());
    }
}
const freeTrip = new FreeTrip("nantes","Nantes","img/nantes.jpg");
console.log(freeTrip.toString());

//Promise, Set, Map, Arrow Function
class TripService {

    constructor() {
        this.trips = new Set();
        this.trips.add(new Trip('paris', 'Paris', 'img/paris.jpg'));
        this.trips.add(new Trip('nantes', 'Nantes', 'img/nantes.jpg'));
        this.trips.add(new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg'));
    }

    findByName(tripName) {

        return new Promise((resolve, reject) => {

            setTimeout( () => {
                let tripsTab = Array.from(this.trips);
                //this.trips.forEach(t => tripsTab.push(t))
                 
                if(tripsTab.some(t => t.name == tripName)) {
                    resolve(tripsTab.find(t => t.name == tripName)); // en cas de succès
                } else {
                    reject("No trip with name "+tripName); // en cas d'erreur
                }

            }, 2000);
        });
    }
}

class PriceService {

    constructor() {
        this.trips = new Map();
        this.trips.set("paris", 100);
        this.trips.set("rio-de-janeiro", 800);
    }

    findPriceByTripId(tripId) {

       return new Promise((resolve, reject) => {

                    setTimeout( () => {
                        if(this.trips.has(tripId)) {
                            resolve(this.trips.get(tripId)); // en cas de succès
                        } else {
                            reject("No price found for id "+tripId); // en cas d'erreur
                        }

                    }, 2000)
               });
    }
}

let tripService = new TripService();
tripService.findByName("Paris")
    .then(t => {console.log(t.toString());});

tripService.findByName("Toulouse")
    .then(t => {console.log(t.toString());})
    .catch(msgErr=>console.log(`No Match ! (${msgErr})`));

let priceService = new PriceService();
tripService.findByName("Rio de Janeiro")
    .then(t => {priceService.findPriceByTripId(t.id)
    .then(price => {console.log(`Price ${price} found for ${t.id}`);});
});

tripService.findByName("Nantes").then(t => {
    priceService.findPriceByTripId(t.id)
    .then(price => {console.log(`Price ${price} found for ${t.id}`);})
    .catch(msgErr=>console.log(`No Match ! (${msgErr})`));
});

