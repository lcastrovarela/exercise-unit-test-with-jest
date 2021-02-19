// this is my function that sums two numbers
const sum = (a, b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7, 3))

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
// module.exports = { sum };

const fromEuroToDollar = (euros) => {
    let montoedollar = euros * 1.2;
    return montoedollar;
}
console.log(fromEuroToDollar(3.5));


const fromDollarToYen = (monedadollar) => {
    let montodyen = monedadollar * 106.58;
    return montodyen;
}
console.log(fromDollarToYen(10));

const fromYenToPound = (monedayen) => {
    let montoypound = monedayen * 0.00625;
    return montoypound;
}
console.log(fromYenToPound(160.01));


module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };
