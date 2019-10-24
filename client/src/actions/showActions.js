import fetch from 'isomorphic-fetch';

export const fetchShow = (showDate, user) => {
   return (dispatch) => {
     dispatch({type:"LOADING"});
     const url = 'http://localhost:3001/api/shows/?showdate='+showDate
     console.log(url);
     return fetch(url)
       .then(response=>response.json())
       .then(data=>data.map(show => dispatch(addUserShow(show.id, user))))
   }
  }

export const getTours = () => {
  return (dispatch) => {
    dispatch({type:"LOADING"});
    const url = 'http://localhost:3001/api/shows/tours'
    return fetch(url)
    .then(response=>response.json())
    .then(data=>dispatch({type:"ADD_TOURS", payload: data}))
    .catch(error=>console.log(error))
  }
}

export const fetchShowsByTour = (tourId) => {
  return (dispatch) => {
    dispatch({type:"LOADING"});
    const url = 'http://localhost:3001/api/shows?tour_id='+tourId
    console.log(url);
    return fetch(url)
      .then(response=>response.json())
      .then(data => dispatch({type:"ADD_SHOWS", payload: data}))
      .catch(error=>console.log(error))
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
       .catch(error=>console.log(error))
   }
  }

export const addUserShow = (showId, user) => {
  return (dispatch) => {
    dispatch({type:"SAVING"});
    const url = 'http://localhost:3001/api/users/'+user.userId+'/shows?show_id='+showId
    console.log(url);
    return fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': user.userToken
      }
    }).then(response=>response.json())
    .then(data=>dispatch({type:"ADD_SHOW", payload: data}))
  }
}

export const removeUserShow = (showId, user) => {
  return (dispatch) => {
    dispatch({type:"DELETING"});
    const url = 'http://localhost:3001/api/users/'+user.userId+'/shows/'+showId
    console.log(url);
    return fetch(url, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': user.userToken
      }
    }).then(response=>response.json())
    .then(data=>dispatch({type:"DELETE_SHOW", payload: data}))
  }
}

export const clearShows = () => {
  return (dispatch) => {
    dispatch({type:"CLEAR_SHOWS"})
  }
}
