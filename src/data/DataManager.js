
export const getJokes = () => {
    return fetch("https://icanhazdadjoke.com/", {
        headers: {
            Accept: "application/json"
        }
    })
        .then(response => response.json())

}
// logged in user and new user info
const loggedInUser = {
	id: 1,
	name: "Katie",
    datejoined: 38874893,
	email: "katielong112@gmail.com"
}

export const getLoggedInUser = () => {
	return loggedInUser;
}

export const getUsers = () => {
    return fetch("http://localhost:8088/users")
    .then(response => response.json())
}
// logged in user and new user end info