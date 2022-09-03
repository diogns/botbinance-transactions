//Importing binance
const binance= require('../config/binance.js');
/* const axios= require('axios').default; */

//let test= await binance.prices();

const pair= class Pair {
    constructor(name, coins){
        this.name;
        this.coins
    }

    //Getters
    get name() {return this.name}
    get coins() {return this.coins}



}

module.exports= pair;


