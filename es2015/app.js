let favoriteCityId = "rome"
console.log(favoriteCityId)

favoriteCityId = "paris"
console.log(favoriteCityId)

const citiesId = ["paris", "nyc", "rome", "rio-de-janeiro"]
console.log(citiesId)

//citiesId=[]

citiesId.push("tokyo")
console.log(citiesId)

let getWeather = function (cityId) {
    let city = cityId.toUpperCase()
    let temperature = 20
    return { city, temperature }
}

const weather = getWeather(favoriteCityId)
console.log(weather)

const { city, temperature } = weather
console.log(city, temperature)

const [parisId, nycId, ...othersCitiesId] = citiesId
console.log(parisId, nycId, othersCitiesId.length)

class Trip {
    constructor(id, name, imageUrl) {
        this.id = id
        this.name = name
        this.imageUrl = imageUrl
    }
    get price() { return this._price }
    set price(price) { this._price = price }

    static getDefaultTrip() { return new Trip("rio-de-janeiro", "Rio de Janeiro", "img/rio-de-janeiro.jpg") }
}

let parisTrip = new Trip("paris", "Paris", "img/paris.jpg")
console.log(parisTrip, parisTrip.name)

Trip.prototype.toString = function () { return this.id + " " + this.name + " " + this.imageUrl + " " + this._price }
console.log(parisTrip.toString())

parisTrip.price = 100
console.log(parisTrip.toString())

const defaultTrip = Trip.getDefaultTrip()
console.log(defaultTrip)

class FreeTrip extends Trip {
    constructor(id, name, imageUrl) {
        super(id, name, imageUrl)
        this._price = 0
    }
    toString() { return "Free" + super.toString() }
}

const freeTrip = new FreeTrip("nantes", "Nantes", "img/nantes.jpg")
console.log(freeTrip.toString())

class TripService {
    constructor() {
        this.setOfTrips = new Set([new Trip('paris', 'Paris', 'img/paris.jpg'),
        new Trip('nantes', 'Nantes', 'img/nantes.jpg'),
        new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg')])
    }
    findByName(tripName) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let found = null
                this.setOfTrips.forEach(t => { if (t.name == tripName) found = t })
                if (found != null) {
                    resolve(found)
                } else {
                    reject(`No trip with name ${tripName}`);
                }
            }, 2000)
        });
    }
}

class PriceService {
    constructor() {
        this.priceMap = new Map()
        this.priceMap.set("paris", 100)
        this.priceMap.set("rio-de-janeiro", 800)
    }
    findPriceByTripId(tripId) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (this.priceMap.has(tripId)) {
                    resolve(priceMap.get(priceMap))
                } else {
                    reject(`No price found for id ${tripId}`);
                }
            }, 2000)
        });
    }
}

let tripService = new TripService()
let priceService = new PriceService()
tripService.findByName("Paris").then(res => console.log(res)).catch(error => console.log(error))
tripService.findByName("Toulouse").then(res => console.log(res)).catch(error => console.log(error))

tripService.findByName("Rio de Janeiro").then(priceService.findPriceByTripId(res => console.log(res)).catch(error => console.log(error))).catch(error => console.log(error))
