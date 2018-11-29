let favoriteCityId = "rome"
console.log(favoriteCityId)
favoriteCityId = "paris"
console.log(favoriteCityId)
const citiesId = ["paris", "nyc", "rome", "rio-de-janeiro"]
console.log(citiesId)
citiesId.push("tokyo")
console.log(citiesId)

function getWeather(cityId, temperature = 20) {
    let city = cityId.toUpperCase()
    return {
        city,
        temperature
    }
}

const weather = getWeather(favoriteCityId);
console.log(weather)
let {
    city,
    temperature
} = weather
console.log(city, temperature)
let [parisId, nyId, ...othersCitiesId] = citiesId
console.log(parisId, nyId, othersCitiesId.length);

class Trip {
    constructor(id, name, imageUrl) {
        this.id = id
        this.name = name
        this.imageUrl = imageUrl
    }
    toString() {
        return "Trip [" + this.id + ", " + this.name + ", " + this.imageUrl + ", " + this.getprice() + "]"
    }
    getprice() {
        return this._price + "€"
    }
    setPrice(newPrice) {
        this._price = newPrice
    }

    static getDefaultTrip() {
        return new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg')
    }
}

let parisTrip = new Trip('paris', 'Paris', 'img/paris.jpg')
parisTrip.setPrice(100)
console.log(parisTrip.toString());

const defaultTrip = Trip.getDefaultTrip();
console.log(defaultTrip.toString());

class FreeTrip extends Trip {
    constructor(id, name, imageUrl, price = 0) {
        super(id, name, imageUrl)
        this.id = id
        this.name = name
        this.imageUrl = imageUrl
    }
    toString() {
        return "Free" + super.toString()
    }
}

const freeTrip = new FreeTrip('nantes', 'Nantes', 'img/nantes.jpg')
console.log(freeTrip.toString());


class TripService {

    constructor() {
        // TODO Set of 3 trips
        this.trips = new Set([new Trip('paris', 'Paris', 'img/paris.jpg'),
        new Trip('nantes', 'Nantes', 'img/nantes.jpg'),
        new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg')])
    }

    findByName(tripName) {

        return new Promise((resolve, reject) => {

            setTimeout(() => {
                // ici l'exécution du code est asynchrone
                const tripTrouve = Array.from(this.trips)
                .find((unTrip)=>unTrip.name === tripName)
                // TODO utiliser resolve et reject en fonction du résultat de la recherche
                if (tripTrouve) {
                    resolve(tripTrouve)
                } else {
                    reject(`No trip with name ${tripName}`)
                }

            }, 2000)
        });
    }
}

class PriceService {

    constructor() {

        this.service = new Map()
        this.service.set('paris', 100)
        this.service.set('rio-de-janeiro', 800)        
        // no price for 'nantes'
    }

    findPriceByTripId(tripId) {

        return new Promise((resolve, reject) => {

            setTimeout(() => {
                // ici l'exécution du code est asynchrone
                const tripTrouve = this.service.get(tripId)
                // TODO utiliser resolve et reject en fonction du résultat de la recherche
                if (tripTrouve != undefined) {
                    resolve(tripTrouve)
                } else {
                    reject(`No price found for id ${tripId}`)
                }
            }, 2000)
        });
    }
}

const tripService = new TripService()
tripService.findByName('Paris')
//ici j'ai une promesse
.then(tripTrouve=> tripTrouve.id)
.then(idTrip=>console.log('id', idTrip))
.catch(msgErr => console.log('Oops', msgErr))

const priceService = new PriceService()
priceService.findPriceByTripId('paris')
.then(tripTrouve=>tripTrouve)
.then(priceTrip=>console.log('price', priceTrip))
.catch(msgErr => console.log('Oops', msgErr))

tripService.findByName('Rio de Janeiro')
    .then(tripTrouve => priceService.findPriceByTripId(tripTrouve.id).then(prix => [prix, tripTrouve.name]))
    .then((tabPrixNom)=>console.log(`Price found for ${tabPrixNom[1]} : `, tabPrixNom[0]))
    .catch(msgErr=>console.log('Oops', msgErr))

tripService.findByName('Nantes')
    .then(tripTrouve => priceService.findPriceByTripId(tripTrouve.id).then(prix => [prix, tripTrouve.name]))
    .then((tabPrixNom)=>console.log(`Price found for ${tabPrixNom[1]} : `, tabPrixNom[0]))
    .catch(msgErr=>console.log('Oops', msgErr))