import fetch from 'isomorphic-fetch';

export const fetchShow = (showDate) => {
   return (dispatch) => {
     dispatch({type:"LOADING"});
     const url = 'http://localhost:3001/api/shows/?showdate='+showDate
     console.log(url);
     return fetch(url)
       .then(response=>response.json())
       .then(data=>data.map(show => dispatch({type:"ADD_SHOW", payload: show})))
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
