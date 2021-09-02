import { getUsers } from "./data/DataManager.js";

 const allUsers = getUsers().then(apiUsers => {
     console.log("now we can console the users", apiUsers)
})

console.log("allUsers", allUsers);



