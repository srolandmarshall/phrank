import fetch from 'isomorphic-fetch';

export const fetchShow = (showDate) => {
 return (dispatch) => {
   dispatch({type:"LOADING_SHOW"});
   const url = 'http://localhost:3001/shows/?showdate='+showDate
   console.log(url);
   return fetch(url)
     .then(response=>response.json())
     .then(data=>dispatch({type:"ADD_SHOW", payload: data}))
 }
}
