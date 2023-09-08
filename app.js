// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollars) {
    let valueInYen = valueInDollars * 106.58;
    return valueInYen;
}

const fromYenToPound = function(valueInYen) {
    let valueInPounds = valueInYen * 0.006254;
    return valueInPounds;
}


// just a console log for ourselves.
console.log(sum(7,3))
console.log(fromYenToPound(1000))
// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};