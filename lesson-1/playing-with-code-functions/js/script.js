// // normal function expression

// const showPetName = function (name) {
//     console.log("the pet name is : " + name);
// }

// // fat Arrow function, function expression

// const showPetNameTwo = (name, age) => {
//     console.log("example 2: the pet name is: " + name + "the age is " + age);
// }

// showPetName("Rhino");
// showPetNameTwo("Lion ", "14");

// // concatenation

// const name = "Magnus"
// const age = "27"

// console.log("my name is" + " " + name + " my age is " + " " + age);
// console.log(`my name is ${name}  my age is ${age}`)

// // my name is Magnus my age is 30


// console.log("my age ", )


// // global scope 



// function showMeTheCityName () {
//     const cityName = "Oslo"; // function scope, local scope
//     console.log("The city name is: " + cityName);
// }

// showMeTheCityName();

// console.log(cityName);

// function isScania(){
//     if(cityName === "Oslo"){
//         console.log(cityName + " is scandinavia")
//     }
//     else {
//         console.log("not scandinavia")
//     }
// }

// isScania(cityName);


// block scope example
// {
//     const name = "Magnus";
//     const car = "volvo";
//     let someBuildingName = 23;
//     var someAge = 10;
//     console.log(name);
//     console.log(car);
// }
// console.log(name);
// console.log(someAge)
// console.log(someBuildingName);


// const myObject = {
//     number: 11,
//     myFunction: function() {
//         console.log(this.number)
//     }
// }

// myObject.myFunction();

const pet = "dog";

let isDangerous;  // Boolean

// if(pet === "dog") {
//     isDangerous = true;
// } else {
//     isDangerous = false;
// }

// condition ? true : false
isDangerous = pet === "dog" ? true :false;