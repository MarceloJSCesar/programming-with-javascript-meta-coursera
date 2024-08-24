// Functional Programming

var currencyOne = 232;
var currencyTwo = 0;
var conversionRate = 2.4;

function calculateConversionRate(currency, rate) {
    return currency * rate;
}

currencyOne = calculateConversionRate(currencyOne, conversionRate);

console.log(currencyOne);