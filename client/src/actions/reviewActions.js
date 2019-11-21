// {
// 	"review":
// 	{
// 		"content":"This is a test review. This is a test review. This is a test review. This is a test review.",
// 		"user_id":"1",
// 		"show_id":"1909",
// 		"rating":"4.5"
// 	}
// }

import fetch from 'isomorphic-fetch';

export const createReview = (user, show, review) => {
  return (dispatch) => {
    dispatch({type:"SAVING"});
    const url = 'http://localhost:3001/api/reviews'
    const formData = JSON.stringify(
      {
        review: {
          content: review.content,
          user_id: user.userId,
          show_id: show.id,
          rating: review.rating
        }
      }
    );
    return fetch(url, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': "application/json",
        'Content-Type': 'application/json',
        'Authorization': user.userToken
      },
      credentials: 'include'
    }).then(response=>response.json())
    .then(data=>dispatch({type:"ADD_REVIEW", payload: data}))
    .catch(error=>console.log(error))
  }
}

export const fetchReviews = (url) => {
  return (dispatch) => {
    dispatch({type:"LOADING"});
    return fetch(url, {
      method: 'GET',
      headers: {
        'Accept': "application/json",
        'Content-Type': 'application/json',
      },
      credentials: 'include'
  }).then(response=>response.json())
  .then(data=>dispatch({type:"USE_REVIEWS", payload:data}))
  .catch(error=>console.log(error))
  }
}

export const fetchUserReviews = (userId) => {
  return (dispatch) => {
    dispatch({type:"LOADING"});
    const url = 'http://localhost:3001/api/users/'+userId+'/reviews'
    return fetch(url, {
      method: 'GET',
      headers: {
        'Accept': "application/json",
        'Content-Type': 'application/json',
      },
      credentials: 'include'
    }).then(response=>response.json())
      .then(data=>dispatch({type:"USE_REVIEWS", payload: data}))
      .catch(error=>console.log(error))
  }
}

export const deleteReview = (review, user) => {
  return (dispatch) => {
    dispatch({type:"DELETING"});
    const url = 'http://localhost:3001/api/reviews/'+review.id
    return fetch(url, {
      method: 'DELETE',
      headers: {
        'Accept': "application/json",
        'Authorization': user.userToken
      }
    }).then(response=>response)
    .then(data=>dispatch({type:"DELETE_REVIEW", payload: review.id}))
  }
}

export const fetchNewestReviews = () => {
   return (dispatch) => {
     dispatch({type:"LOADING"});
     const url = 'http://localhost:3001/api/reviews/mostrecent'
     console.log(url);
     return fetch(url)
       .then(response=>response.json())
       .then(data=>dispatch({type:"USE_REVIEWS", payload: data}))
       .catch(error=>console.log(error))
   }
  }
