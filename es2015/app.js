/////let/////
let favoriteCityId = "rome";
console.log(favoriteCityId);
favoriteCityId = "paris";
console.log(favoriteCityId);

/////const/////
const citiesID =["paris", "nyc", "rome", "rio-de-janeiro"];
console.log(citiesID);
//citiesID =[];
// console.log(citiesID);  TypeError: Assignment to constant variable.
citiesID.push("tokyo");
console.log(citiesID);

/////Création d'objet/////

function getWheather(cityId){
    let city = cityId.toUpperCase();
    let temperature = 20;
    
    return {city, temperature};
    
    
}
const weather = getWheather(favoriteCityId);
console.log(weather);

/////Affectation destructurée/////
const {city,temperature} =  getWheather(favoriteCityId);
console.log(city)
console.log(temperature)

/////Rest operator/////
const [parisId,nycId, ...otherCitiesId] = citiesID;
console.log(parisId);
console.log(nycId);
console.log(otherCitiesId.length);

/////Classe/////
class Trip{
    constructor(id,name,imageUrl){
        this.id = id;
        this.name = name;
        this.imageUrl = imageUrl;
    }

    getPrice(){
return this._getPrice;
    }

    setPrice(newPrice){
        this._price = price;
    }

    static getDefaultTrip() {
        return new Trip("rio-de-janeiro","Rio de Janeiro","img/rio-de-janeiro.jpg");
    }

    toString(){
        return "Trip["+this.id+","+this.name+","+this.imageUrl+", "+this._price+"]";
    }
}
let parisTrip = new Trip("paris","Paris","img/paris.jpg");
parisTrip._price =100;
const defaultTrip = Trip.getDefaultTrip();
console.log(parisTrip);
console.log(parisTrip.name)
console.log(parisTrip.toString())
console.log(defaultTrip.toString())

/////Héritage/////
class FreeTrip extends Trip{
    constructor(id,name,imageUrl){
        super(id,name,imageUrl);
        this._price =0;
    }

    toString(){
        return "Free".concat(super.toString());
    }
}
const freeTrip = new FreeTrip("nantes","Nantes","img/nantes.jpg");
console.log(freeTrip.toString());

/////Promise, Set, Map, Arrow Function/////

class TripService {

    constructor() {
        // TODO Set of 3 trips
        //
        this.trips = new Set();

         this.trips.add(new Trip('paris', 'Paris', 'img/paris.jpg'))
         this.trips.add(new Trip('nantes', 'Nantes', 'img/nantes.jpg'))
         this.trips.add(new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg'))
    
    
    }

    findByName(tripName) {

         return new Promise((resolve, reject) => {

             setTimeout( () => {

                let tripsTab =[];
                this.trips.forEach(t=>tripsTab.push(t));
                 // ici l'exécution du code est asynchrone
                let tripTrouve =  tripsTab.find(s=>s.name== tripName)
                 if(tripTrouve) {
                    resolve(tripTrouve); // en cas d'erreur
                
                } else {
                    reject("no trip found "+ tripName); // en cas de succès
                }
                 // TODO utiliser resolve et reject en fonction du résultat de la recherche 
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
        this.prices = new Map();
        this.prices.set("paris",100);
        this.prices.set("rio-de-janeiro",800);

    }

    findPriceByTripId(tripId) {

       return new Promise((resolve, reject) => {

                    setTimeout( () => {
                        
                         // ici l'exécution du code est asynchrone

                         if(this.prices.has(tripId)) {
                            resolve(this.prices.get(tripId)); // en cas d'erreur
                        
                        } else {
                            reject("no trip found "+ tripId); // en cas de succès
                        }

                    }, 2000)
               });
    }
}
let test = new TripService();
test.findByName("Paris").then(t=>{
    console.log(t.toString());
})
let test2 = new PriceService();
test2.findPriceByTripId("paris").then(p=>{
    console.log("price found : "+p);})

test.findByName("Nantes").then(t => {
    test2.findPriceByTripId(t.id).then(p=>{
        console.log(p);
    });
});