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
        
        this.setTrip = new Set()

        // new Trip('paris', 'Paris', 'img/paris.jpg')
        // new Trip('nantes', 'Nantes', 'img/nantes.jpg')
        // new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg')

        this.setTrip.add(new Trip('paris', 'Paris', 'img/paris.jpg'));

        this.setTrip.add( new Trip('nantes', 'Nantes', 'img/nantes.jpg'));
  
        this.setTrip.add( new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg'));

    }

    // retourne un voyage ( objet trip)
    // correspond au nom (tripname) fournit 

    findByName(tripName) {

         return new Promise((resolve, reject) => {

             setTimeout( () => {

              
                 // ici l'exécution du code est asynchrone

      const tripTrouver = Array.from(this.setTrip)

         .find((unTrip) => unTrip.name === tripName)

                 // TODO utiliser resolve et reject en fonction du résultat de la recherche

                 if (tripTrouver) { 

             resolve(tripTrouver)

                 }
                 else {
                     reject (`no trip with name, ${tripName}`); // utiliser le resolve and reject 
                 }

             }, 2000)  // 2s plus tard 
        });
    }
}
   
   



class PriceService {

    constructor() {

        // TODO Map of 2 trips

       this.mapPrice=new Map()

        // 'paris' --> price = 100

        // 'rio-de-janeiro' --> price = 800)

        // no price for 'nantes
    
      this.mapPrice.set('paris', 100);

        this.mapPrice.set('rio-de-janeiro', 800);

        this.mapPrice.set('nantes',0)
    
       
    }



    
    findPriceByTripId(tripId) {

       return new Promise((resolve, reject) => {

                    setTimeout( () => {
                        // ici l'exécution du code est asynchrone
    
                        const priceTrouver =this.mapPrice.get(tripId);

                        // TODO utiliser resolve et reject en fonction du résultat de la recherche

                        if(priceTrouver){
                            resolve(priceTrouver)
                        }else {
                            reject ( `no price with id   ${tripId}`);
                        }

                    }, 2000)
               });
    
            }
        }
     

        const  tripService = new TripService();

        tripService.findByName('toulouse').then (tripTrouver => tripTrouver.id)

       // ici j'ai une promesse

    .then(tripTrouver => console.log('Super', tripTrouver))

        

       .catch(msgErr => console.log('Oops', msgErr))


        const priceService = new PriceService();

        priceService.findPriceByTripId('nantes')


      .then (priceTrouver => console.log('super', priceTrouver))

    .catch ( msgErr => console.log('Oops', msgErr))

       
   // priceService.findPriceByTripId('rio de janeiro').then (priceTrouver => console.log('price found', priceTrouver))
    