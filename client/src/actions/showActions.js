import fetch from 'isomorphic-fetch';

export const fetchShow = (showDate) => {
 return (dispatch) => {
   dispatch({type:"LOADING_SHOW"});
   return fetch('http://localhost:3001/shows/?='+showDate)
     .then(response=>response.json())
     .then(data=>dispatch({type: "ADD_SHOW", payload: data}))
 }
}
