import fetch from 'isomorphic-fetch';

export const fetchShow = (showDate) => {
   return (dispatch) => {
     dispatch({type:"LOADING"});
     const url = 'http://localhost:3001/api/shows/?showdate='+showDate
     console.log(url);
     return fetch(url)
       .then(response=>response.json())
       .then(data=>data.map(show => dispatch(addUserShow(show.id, 3))))
   }
  }

export const fetchShows = (userId) => {
   return (dispatch) => {
     dispatch({type:"LOADING"});
     const url = 'http://localhost:3001/api/users/'+userId+'/shows'
     console.log(url);
     return fetch(url)
       .then(response=>response.json())
       .then(data=>data.map(show => dispatch({type:"ADD_SHOW", payload: show})))
   }
  }

export const addUserShow = (showId, userId) => {
  return (dispatch) => {
    dispatch({type:"SAVING"});
    const url = 'http://localhost:3001/api/users/'+userId+'/shows?show_id='+showId
    console.log(url);
    return fetch(url, {
      method: 'POST'
    }).then(response=>response.json())
    .then(data=>dispatch({type:"ADD_SHOW", payload: data}))
  }
}

export const removeUserShow = (showId, userId) => {
  return (dispatch) => {
    dispatch({type:"SAVING"});
    const url = 'http://localhost:3001/api/users/'+userId+'/shows/'+showId
    console.log(url);
    return fetch(url, {
      method: 'DELETE'
    }).then(response=>response.json())
    .then(data=>dispatch({type:"DELETE_SHOW", payload: data}))
  }
}
