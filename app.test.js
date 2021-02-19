// import the function sum from the app.js file
const { sum } = require('./app.js');


// start your first test
test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("One euro should be 1.2 dollars", function () {
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')
    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)
    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2;
    // this is the comparison for the unit test
    expect(expected).toBe(dollars);
})

test("One dollar should be 106.58 yens", function () {
const { fromDollarToYen } = require('./app.js')
const yens = fromDollarToYen(10)
const expected = 10 * 106.58;
expect(expected).toBe(yens);
})

test("One yen should be 0.00625 pound", function () {
const { fromYenToPound } = require('./app.js')
const pounds = fromYenToPound(10)
const expected = 1 * 0.0625;
expect(expected).toBe(pounds);
})
