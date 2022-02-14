// API's API's
// As a Front end developer you will need to make request to those 
// API's in order to get data an use it in your web application

// code 200 api is working
// code 404 api not found
// code 500 backend of api is broken

// Example 1
// https://catfact.ninja/facts

const URL = "https://catfact.ninja/facts";

const factsContainer = document.querySelector(".cat-facts-container");

fetch(URL) // promise <response>
    .then((response) => response.json()) // Promise <any>
    .then((data) => {
        console.log(data);
        console.log(data.data);
        factsContainer.innerHTML = "";
        const myCatFactsArr = data.data;
        for(let i = 0; i < myCatFactsArr.length; i++){
            console.log(myCatFactsArr[i].fact);
            if(i === 4){
                break;
            }
            factsContainer.innerHTML += `<li>${myCatFactsArr[i].fact}</li>`
        }
    })
    .catch((error) => {
        console.log(error)
    })
// Example 2