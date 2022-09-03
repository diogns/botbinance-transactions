/*Importing Binance API*/
const Binance= require('node-binance-api');
const binance= new Binance().options({
    apiKey : "3ml461MR9Xf0pUhfcuZtEHMOWnaAKgYoPFVaY1U59mWVbDDgTud0g0tiFU070q1W",
    secretKey : "m7STpDny1i4QqPw5oVKCWk83kWYeXPTWTBqpIl690m6ZYRGdyWtNccGjrBuW2ABo"
});



module.exports= binance;