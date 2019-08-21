import fetch from 'isomorphic-fetch';
export const registerUser = (email, password) => {
  return (dispatch) => {
    dispatch({type:"SAVING"});
    const url = 'http://localhost:3001/api/users/'
    return fetch(url, {
      method: 'POST',
      body:
      JSON.stringify({
      	user:{
      		username:email,
      		email:email,
      		password: password
      	}
      }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(response=>response.json())
    .then(data=>dispatch({type:"SET_USER", payload: data}))
    .catch(error=>console.log(error))
  }
}

export const loginUser = (email, password) => {
  return (dispatch) => {
    dispatch({type:"LOADING"});
    const url = 'http://localhost:3001/login'
    const formData = JSON.stringify(
      { username: email,
        password: password,
        grant_type: 'password' }
    );
    return fetch(url, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': "application/json",
        'Content-Type': 'application/json'
      }
    }).then(response=>response.json())
    .then(data=>dispatch({type:"SET_USER", payload: data}))
    .catch(error=>console.log(error))
  }
}
