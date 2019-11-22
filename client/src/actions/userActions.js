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
        email: email,
        password: password
      }
    );
    return fetch(url, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': "application/json",
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    }).then(response=>response.json())
    .then(data=>dispatch({type:"SET_USER", payload: data}))
    .catch(error=>console.log(error))
  }
}

export const fetchUserData = (id) => {
  return (dispatch) => {
    dispatch({type:"LOADING"});
    const url = 'http://localhost:3001/api/users/'+id
    return fetch(url, {
      method: 'GET',
      headers: {
        'Accept': "application/json",
        'Content-Type': 'application/json'
        },
      credentials: 'include'
      })
    .then(response=>response.json())
    .then(data=>dispatch({type:"SET_USER_PROFILE", payload: data}))
      .catch(error=>console.log(error))
  }
}

export const getCurrentUser = () => {
  return (dispatch) => {
    dispatch({type:"LOADING"});
    const url = 'http://localhost:3001/current_user'
    return fetch(url, {
      method: 'GET',
      headers: {
        'Accept': "application/json",
        'Content-Type': 'application/json'
        },
      credentials: 'include'
      })
    .then(response=>response.json())
    .then(data=>dispatch({type:"SET_USER", payload: data}))
      .catch(error=>console.log(error))
  }
}
