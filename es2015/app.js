
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
    static getDefaultTrip(){
        return new Trip('rio-de-janeiro','Rio de Janeiro','img/rio-de-janeiro.jpg')
    }

}
let parisTrip = new Trip('paris', 'Paris', 'img/paris.jpg');

console.log(parisTrip);
console.log(parisTrip.name);
parisTrip.price = 100;
console.log(parisTrip.toString())

const defaultTrip=Trip.getDefaultTrip();
console.log(defaultTrip.toString());

class FreeTrip extends Trip{
    constructor(id, name, imageUrl){
        super(id, name, imageUrl);
        this.price=0;
    }
    toString() {
        return 'Free'+super.toString();
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
        this.setTrip.add( new Trip('nantes', 'Nantes', 'img/nantes.jpg'));
        this.setTrip.add( new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg'));
    }

    findByName(tripName) {

         return new Promise((resolve, reject) => {

             setTimeout( () => {
                 // ici l'exécution du code est asynchrone
                 let tripByName;
                 this.setTrip.forEach(function myTryp(trip) {
                    if (trip.name==tripName) {
                        tripByName= trip;
                    }
                 })
                 

                 if (tripByName!=undefined) {
                     resolve(tripByName);
                 } else {
                     reject("Pas de voyage a ce nom")
                 }
                 // TODO utiliser resolve et reject en fonction du résultat de la recherche

             }, 2000)
        });
    }
}

class PriceService {

    constructor() {
        this.mapService=new Map()
        // TODO Map of 2 trips
        mapService.set('paris', 100);
        mapService.set('rio-de-janeiro', 800);
        // no price for 'nantes'
    }

    findPriceByTripId(tripId) {

       return new Promise((resolve, reject) => {

                    setTimeout( () => {
                        // ici l'exécution du code est asynchrone
                        var priceById=this.mapService.get(tripId);
                        if (priceById!=undefined) {
                            resolve(priceById);
                        } else {
                            reject("pas de prix pour ce voyage")
                        }
                        // TODO utiliser resolve et reject en fonction du résultat de la recherche

                    }, 2000)
               });
    }
}
const trypService = new TripService();
trypService.findByName('Paris').then(function (tripByName){console.log(tripByName).catch(function(error){
    console.log(error);   
})
});
// const priceService = new PriceService();
// priceService.findPriceByTripId()