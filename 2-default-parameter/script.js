// function printMessage(message) {
    // i want to check if there is no message
    // i want to assign text to this message
    // i want to console log the message
//     if(!message){
//         message = "No value is here";
//     }
//     console.log(message);
// }

// printMessage();

// default value for the property argument

function printMessage(message = "No value is here") {
    console.log(message)

}
// printmessage();
printMessage("Hello Magnus how are you ?");

// example 3

function getSum(numA = 0, NumB = 10) {
    return numA + NumB;
}

const totalSum = getSum(4, 4);

console.log("totalSum: "+ totalSum);

const totalSum2 = getSum();
console.log(totalSum2)
