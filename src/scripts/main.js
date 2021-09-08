
getUsers()
.then(data => {
    console.log("User Data", data)
})

import { getPosts, getUsers, usePostCollection } from "../data/DataManager.js"
import { PostList } from "./feed/PostList.js"
import { NavBar } from "./nav/NavBar.js"

const showPostList = () => {
	//Get a reference to the location on the DOM where the list will display
	const postElement = document.querySelector(".postList");
	getPosts().then((allPosts) => {
		postElement.innerHTML = PostList(allPosts);
	})
}
// footer
// applicationElement.addEventListener("change", event => {
// 	if (event.target.id === "yearSelection") {
// 	  const yearAsNumber = parseInt(event.target.value)
  
// 	  console.log(`User wants to see posts since ${yearAsNumber}`)
// 	}
//   })

// what year were the giffys made?
// applicationElement.addEventListener("change", event => {
// 	if (event.target.id === "yearSelection") {
// 	  const yearAsNumber = parseInt(event.target.value)
// 	  console.log(`User wants to see posts since ${yearAsNumber}`)
// 	  //invoke a filter function passing the year as an argument
// 	  showFilteredPosts(yearAsNumber);
// 	}
//   })

  const showFilteredPosts = (year) => {
	//get a copy of the post collection
	const epoch = Date.parse(`01/01/${year}`);
	//filter the data
	const filteredData = usePostCollection().filter(singlePost => {
	  if (singlePost.timestamp >= epoch) {
		return singlePost
	  }
	})
	const postElement = document.querySelector(".postList");
	postElement.innerHTML = PostList(filteredData);
  }
  
const showNavBar = () => {
    //Get a reference to the location on the DOM where the nav will display
    const navElement = document.querySelector("nav");
	navElement.innerHTML = NavBar();
}
const applicationElement = document.querySelector(".giffygram");

applicationElement.addEventListener("click", event => {
    console.log("what was clicked", event.target)
	if (event.target.id === "logout"){
		console.log("You clicked on logout")
	}
})
// eventListener for edit button being clicked
applicationElement.addEventListener("click", (event) => {
	
	if (event.target.id.startsWith("edit")){
		console.log("post clicked", event.target.id.split("--"))
		console.log("the id is", event.target.id.split("--")[1])
	}
})

applicationElement.addEventListener("change", event => {
    if (event.target.id === "yearSelection") {
      const yearAsNumber = parseInt(event.target.value)
      console.log(`User wants to see posts since ${yearAsNumber}`)
      //invoke a filter function passing the year as an argument
      showFilteredPosts(yearAsNumber);
    }
  })

  applicationElement.addEventListener("change", event => {
	if (event.target.id === "yearSelection") {
	  const yearAsNumber = parseInt(event.target.value)
	  console.log(`User wants to see posts since ${yearAsNumber}`)
	  //invoke a filter function passing the year as an argument
	  showFilteredPosts(yearAsNumber);
	}
  })

  applicationElement.addEventListener("change", event => {
	if (event.target.id === "yearSelection") {
	  const yearAsNumber = parseInt(event.target.value)
  
	  console.log(`User wants to see posts since ${yearAsNumber}`)
	}
  })

const startGiffyGram = () => {
	showPostList();
    showNavBar();
}

startGiffyGram();

