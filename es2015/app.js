
let favoriteCityId = "rome";
console.log(favoriteCityId);
favoriteCityId = "paris";
console.log(favoriteCityId);

const citiesId = ["paris", "nyc", "rome", "rio-de-janeiro"];
console.log(citiesId);
// citiesId= [];
// console.log(citiesId);
citiesId.push("tokyo")
console.log(citiesId)

function getWeather(cityId) {
    let city = cityId.toUpperCase();
    let temperature = 20;
    return { city: city, temperature: temperature }
}

const weather = getWeather(favoriteCityId);
console.log(weather);
const { city, temperature } = weather;
console.log(city);
console.log(temperature);

const [parisId, nycId, ...othersCitiesId] = citiesId
console.log(parisId);
console.log(nycId);
console.log(othersCitiesId.length);

class Trip {
    constructor(id, name, imageUrl) {
        this.id = id;
        this.name = name;
        this.imageUrl = imageUrl;
    }
    toString() {
        return 'Trip [' + this.id + ', ' + this.name + ', ' + this.imageUrl + ', ' + this.price + ']';
    }
    get price() {
        return this._price;
    }
    set price(newPrice) {
        this._price = newPrice;
    }
    static getDefaultTrip() {
        return new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg')
    }

}
let parisTrip = new Trip('paris', 'Paris', 'img/paris.jpg');

console.log(parisTrip);
console.log(parisTrip.name);
parisTrip.price = 100;
console.log(parisTrip.toString())

const defaultTrip = Trip.getDefaultTrip();
console.log(defaultTrip.toString());

class FreeTrip extends Trip {
    constructor(id, name, imageUrl) {
        super(id, name, imageUrl);
        this.price = 0;
    }
    toString() {
        return 'Free' + super.toString();
    }
}

const freeTrip = new FreeTrip('nantes', 'Nantes', 'img/nantes.jpg');
console.log(freeTrip.toString());

class TripService {

    constructor() {
        this.setTrip = new Set()
        // TODO Set of 3 trips
        //
        this.setTrip.add(new Trip('paris', 'Paris', 'img/paris.jpg'));
        this.setTrip.add(new Trip('nantes', 'Nantes', 'img/nantes.jpg'));
        this.setTrip.add(new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg'));
    }

    findByName(tripName) {

        return new Promise((resolve, reject) => {

            setTimeout(() => {
                // ici l'exécution du code est asynchrone
                const triptoreturn = Array.from(this.setTrip).find((untrip) => untrip.name === tripName);

                if (triptoreturn) {
                    resolve(triptoreturn);
                } else {
                    reject(`No tryp with name ${tripName}`)
                }
                // TODO utiliser resolve et reject en fonction du résultat de la recherche

            }, 2000)
        });
    }
}

class PriceService {

    constructor() {
        this.mapService = new Map()
        // TODO Map of 2 trips
        this.mapService.set('paris', 100);
        this.mapService.set('rio-de-janeiro', 800);
        // no price for 'nantes'
    }

    findPriceByTripId(tripId) {

        return new Promise((resolve, reject) => {

            setTimeout(() => {
                // ici l'exécution du code est asynchrone
                var priceById = this.mapService.get(tripId);
                if (priceById != undefined) {
                    resolve(`Price found :${priceById}`);
                } else {
                    reject(`No price for trip id ${tripId}`);
                }
                // TODO utiliser resolve et reject en fonction du résultat de la recherche

            }, 2000)
        });
    }
}
const trypService = new TripService();
trypService.findByName('Paris').then(
    (tripByName) => console.log(tripByName))
    .catch((error) => console.log(error));
trypService.findByName('Toulouse').then(
    (tripByName) => console.log(tripByName))
    .catch((error) => console.log(error));
const priceService = new PriceService();
trypService.findByName('Rio de Janeiro')
    .then((tripByName) => tripByName.id)
    .then((idTrip)=>priceService.findPriceByTripId(idTrip))
    .then((price)=>console.log(price)) 
    .catch((error) => console.log(error));

    trypService.findByName('Nantes')
    .then((tripByName) => tripByName.id)
    .then((idTrip)=>priceService.findPriceByTripId(idTrip))
    .then((price)=>console.log(price)) 
    .catch((error) => console.log(error));    

// priceService.findPriceByTripId()