import fetch from 'isomorphic-fetch';

export const fetchAndAddShow = (showDate, user) => {
   return (dispatch) => {
     dispatch({type:"LOADING"});
     const url = 'http://localhost:3001/api/shows/?showdate='+showDate
     console.log(url);
     return fetch(url)
       .then(response=>response.json())
       .then(data=>data.map(show => dispatch(addShow(show.id, user))))
   }
  }

export const fetchShow = (id) => {
   return (dispatch) => {
     dispatch({type:"LOADING"});
     const url = 'http://localhost:3001/api/shows/'+id
     console.log(url);
     return fetch(url)
       .then(response=>response.json())
       .then(data=>dispatch({type:"USE_SHOW", payload: data.show}))
     .catch(error=>console.log(error))
   }
  }

  export const fetchRandomShow = () => {
     return (dispatch) => {
       dispatch({type:"LOADING"});
       const url = 'http://localhost:3001/api/shows/random'
       console.log(url);
       return fetch(url)
         .then(response=>response.json())
         .then(data=>dispatch({type:"USE_SHOW", payload: data}))
       .catch(error=>console.log(error))
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
      .then(
        data => dispatch({type:"ADD_SHOWS", payload: data.shows})
          .then(dispatch({type:"USE_REVIEWS", payload: data.reviews}))
      )
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
       .then(data=>dispatch({type:"USE_SHOWS", payload: data}))
       .catch(error=>console.log(error))
   }
  }

  export const fetchUserShows = (userId) => {
     return (dispatch) => {
       dispatch({type:"LOADING"});
       const url = 'http://localhost:3001/api/users/'+userId+'/shows'
       console.log(url);
       return fetch(url)
         .then(response=>response.json())
         .then(data=>dispatch({type:"USE_USER_SHOWS", payload: data}))
         .catch(error=>({type:"USE_USER_SHOWS", payload: error}))
       }
     }


export const addShow = (showId, user) => {
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
    .then(data=>dispatch({type:"ADD_SHOW_TO_USER", payload: data}))
  }
}

export const removeShow = (showId, user) => {
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
    .then(data=>dispatch({type:"ADD_USER_SHOW", payload: data}))
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
    .then(data=>dispatch({type:"DELETE_USER_SHOW", payload: data}))
  }
}

export const fetchNewestShows = () => {
   return (dispatch) => {
     dispatch({type:"LOADING"});
     const url = 'http://localhost:3001/api/shows/mostrecent'
     console.log(url);
     return fetch(url)
       .then(response=>response.json())
       .then(data=>dispatch({type:"USE_SHOWS", payload: data}))
       .catch(error=>console.log(error))
   }
  }

export const clearShows = () => {
  return (dispatch) => {
    dispatch({type:"CLEAR_SHOWS"})
    dispatch({type:"CLEAR_REVIEWS"})
    dispatch({type:"CLEAR_USER_SHOWS"})
  }
}
