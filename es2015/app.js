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
        return "Trip [" + this.id + ", " + this.name + ", " + this.imageUrl +", " + this.getprice() +"]"
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
    constructor(id, name, imageUrl, price=0) {
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
