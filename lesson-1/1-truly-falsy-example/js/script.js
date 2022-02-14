// *** List of falsy values ****
//
// false
// 0 - the number zero
// "", '' or - empty strings
// null
// undefined
// Nan - Not a Number

// Everything else is Truly


// If we are trying to check if a value exists (if it isn't null or undefined) for example,
// we can do this:

//TODO write example


// rather than having to check for both null and undefined like this:

//TODO write example



// That applies to all the falsy values,
// so we can check that a variable's value is not one of the falsy values
// by writing an if statement like this:





// Example 1 Play with truly and falsy values

// const text = ""; // falsy
// const text = 0; // falsy
// const text = false; // falsy
// const text = undefined; // falsy
// const text = null; // falsy

// const text = "Magnus"; // truly

// if (text) {
//     console.log("truly")
// }else {
//     console.log("falsy")
// }


// Example 2 Real life example

// some data from api

const carData = [
    {
        make: "tesla",
        isElectric: true
    },
    {
        make: "BMW",
        isElectric: false
    }
]

// carData.forEach(function (car) {
//     console.log(car);
//     if(car.isElectric){
//         console.log("car make is" + car.make + "and it is electric");
//     }
    carData.forEach(function (car) {
        console.log(car);
        if(!car.isElectric){
            console.log("car make is " + car.make + " and it is electric");
        }
});