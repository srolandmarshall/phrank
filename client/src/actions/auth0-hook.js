import fetch from 'isomorphic-fetch';

const createURL='http://localhost:3001/api/users/';

const userInfo = {
	"user":
  {
		"username":"user.username",
		"email":"user@email.done"
	}
}

export const postUser = () => {
  fetch(createURL, {
      method: 'POST',
      body: JSON.stringify(userInfo),
      headers: {
        "Content-Type": "application/json"
      },
    }).then(response=>response.json())
    .then(data=>console.log(data))
    .catch(error=>console.log(error))
}
