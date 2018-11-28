let favoriteCityId ="Rome";
console.log(favoriteCityId);

 favoriteCityId ="Paris";
console.log(favoriteCityId);

const citiesId = [ "paris, nyc, rome, rio-de-janeiro"];
console.log(citiesId);

 //citiesId = [];
 //console.log(citiesId);

 // tableau vide retourne  citiesId = [];

 citiesId.push("tokyo"); 

console.log(citiesId);

function getWeather (citiesId){

    let city = citiesId;
    let temperature = 20;
    return { city: `${city}`, temperature: `${temperature}` } 
}

console.log(getWeather("Paris"));


// affectation destructurée

const weather = { 
    city: 'Paris', 
    temperature: 20 
} 

const { 
    city: cit, 
    temperature: tep

} = weather; 


console.log(cit); 
console.log(tep) 



//Rest operator 

const [parisId, nycId, ...othersCitiesId] = citiesId; 

console.log(parisId, "\n" + nycId, "\n" + othersCitiesId.length); 

 
//classe 

class Trip {
constructor (id, name, imageUrl){

    this.id = "paris";
    this.name = "paris";
    this.imageUrl = "img/paris.jpg";
    this.price = 100;
}

toString(){
    return [this.id +" "+ this.name+" "+this.imageUrl+" "+ this.price];
}
get price(){
    return this._price;
}
set price(newPrice){
    this._price = newPrice;

}

static  getDefaultTrip(){


    return {id : "rio de janeiro" , name : "rio de janeiro" ,imageUrl :"img/rio-de-janeiro.jpg" };

}
}

let Paristrip = new Trip('paris','paris','img/paris.jpg')

console.log(Paristrip);
console.log(Paristrip.name);

console.log(Paristrip.toString());

const defaultTrip = Trip.getDefaultTrip(); 

 
console.log(defaultTrip); 
console.log(defaultTrip.toString());


//heritage

class FreeTrip extends Trip{

    constructor(id, name, imageUrl) { 

        super(id, name, imageUrl) 
        
        this.id ="nantes";
        this.name = "nantes";
        this.imageUrl = "img/nantes.jpg";
        this.price = 0; 

        

    } 
    toString(){
        return [this.id +" "+ this.name+" "+this.imageUrl+" "+ this.price];
    }
} 

const freeTrip = new FreeTrip("nantes", "Nantes", "img/nantes.jpg") 

console.log(freeTrip); 
console.log(freeTrip.toString());

 
// Promise , set 

class TripService {

    constructor() {
        // TODO Set of 3 trips
        

        // new Trip('paris', 'Paris', 'img/paris.jpg')

        let trip1 = new Trip('paris','paris','img/paris.jpg');

        // new Trip('nantes', 'Nantes', 'img/nantes.jpg')

        let trip2 = new Trip("nantes", "nantes", "img/nantes.jpg") 

        // new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg')

      let trip3 = new Trip("rio de janeiro", "rio de janeiro", "img/rio-de-janeiro.jpg") 
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

    constructor() {

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

