let lg = console.log;

let favoriteCityId = "rome";

console.log(favoriteCityId);

favoriteCityId = "paris";

lg(favoriteCityId);

const citiesId = ["paris", "nyc", "rome", "rio-de-janeiro"];

lg(citiesId)

//citiesId = ["paris", "nyc", "rome", "rio-de-janeiro", "Milan"];

citiesId.push("tokyo");

lg(citiesId)

function getWeather(cityId) {
    let city = cityId.toUpperCase();
    let temperature = 20;
    return { city, temperature };
}

const weather = getWeather(favoriteCityId);

lg(weather);

let { city, temperature } = weather;

lg(city);
lg(temperature);

[parisId, nycId, ...othersCitiesId] = citiesId;

lg(parisId);
lg(nycId);
lg(othersCitiesId.length);

class Trip {
    constructor(id, name, imageUrl) {
        this.id = id;
        this.name = name;
        this.imageUrl = imageUrl
    }

    toString() {
        return "Trip [" + this.id + ", "
            + this.name + ", "
            + this.imageUrl + ", "
            + this._price + "]";
    }


    static getDefaultTrip() {
        return new Trip("rio-de-janeiro", "Rio de Janeiro", "img/rio-de-janeiro.jpg");
    }

    set price(price) {
        this._price = price;
    }
    get price() {
        return this._price = price;
    }
}

let parisTrip = new Trip("paris", "Paris", "img/paris.jpg");
lg(parisTrip);
lg(parisTrip.name);

lg(parisTrip.toString());

parisTrip.price = 100;

lg(parisTrip.toString());

const defaultTrip = Trip.getDefaultTrip();

lg(defaultTrip.toString());

class FreeTrip extends Trip {
    constructor(id, name, imageUrl) {
        super(id, name, imageUrl);
        this.price = 0;
    }

    toString() {
        return "Free" + super.toString();
    }
}

const freeTrip = new FreeTrip("nantes", "Nantes", "img/nantes.jpg");
lg(freeTrip.toString());

//=======================================================
// Promise, Set, Map, Arrow Function :
//=======================================================
lg("\n\nPromise, Set, Map, Arrow Function :\n\n")

class TripService {

    constructor() {
        // TODO Set of 3 trips

        this.set2Trip = new Set();
        this.set2Trip
            .add(new Trip('paris', 'Paris', 'img/paris.jpg'))
            .add(new Trip('nantes', 'Nantes', 'img/nantes.jpg'))
            .add(new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg'));

    }

    findByName(tripName) {

        return new Promise((resolve, reject) => {

            setTimeout(() => {
                // ici l'exécution du code est asynchrone
                let result = [];

                this.set2Trip.forEach(element => { if (element.name === tripName) { result.push(element) } });

                if (result.length === 0) {
                    let err = `No trip with name ${tripName}`;
                    reject(err);
                } else {
                    resolve(result);
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
        this.map2Trip = new Map();
        this.map2Trip.set('paris', 150)
                     .set('rio-de-janeiro', 800);
    }

    findPriceByTripId(tripId) {

        return new Promise((resolve, reject) => {

            setTimeout(() => {
                // ici l'exécution du code est asynchrone

               
                //this.map2Trip.forEach(element => { if (element.name == tripName) { result.push(element) } });
                
                let result = this.map2Trip.get(tripId);

                if (result === undefined) {
                    let err = `No price found for id ${tripId}`;
                    reject(err);
                } else {
                    resolve(result);
                }


            }, 2000)
        });
    }
}

// Test des classes et Promesses :
//--------------------------------


const tripService = new TripService();
const priceService = new PriceService();

function rechercheTripParNom(name){
    tripService.findByName(name)
               .then(result => lg(`Trip found : ${result}`))
               .catch(err => lg(err));
}

rechercheTripParNom("Paris");
rechercheTripParNom("Montpellier");

function recherchePrixParNom(name){

    tripService.findByName(name)
               .then(result=>result.forEach(element=> priceService.findPriceByTripId(element.id)
                                                                  .then(result=>lg(`Price found : ${result} for ${name}`))))
               .catch(err => lg(err));
}

recherchePrixParNom("Paris");
recherchePrixParNom("Rio de Janeiro");
recherchePrixParNom("Thaïti");
