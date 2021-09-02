import { getJokes, getUsers } from "../data/DataManager.js";
import { joke } from "../data/jokesData.js";

getJokes() 
.then(apiJoke => {
    console.log("apiJoke", apiJoke)
    const jokeElement = document.querySelector(".jokeBody");
    jokeElement.innerHTML = joke(apiJoke)

})

//  const allUsers = getUsers().then(apiUsers => {
//      console.log("now we can console the users", apiUsers)
// })

// console.log("allUsers", allUsers);

// const contentElementJoke = document.querySelector("joke");

// getJokes().then(apiJoke => {
//     contentElementJoke.innerHTML += getJokes(apiJoke);
// })

/**
 * Main logic module for what should happen on initial page load for Giffygram
 */

/*
    This function performs one, specific task.

    1. Can you explain what that task is?
    2. Are you defining the function here or invoking it?
*/


const startGiffyGram = () => {
    const postElement = document.querySelector(".postList");
	postElement.innerHTML = "Hello Cohort 51"
}
// Are you defining the function here or invoking it?
startGiffyGram();

getUsers()
.then(data => {
    console.log("User Data", data)
})



