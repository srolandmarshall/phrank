import React from 'react'
import ShowContainer from '../containers/ShowContainer'
import Cookies from 'js-cookie';

const MyShows = (props) => {
  return (
    <div>
      <h3>My Shows</h3>
      <h2>Cookie says {Cookies.get('id')}</h2>
      <ShowContainer user={props.user} shows={props.shows} addShow={props.addShow} deleteShow={props.deleteShow} fetchShow={props.fetchShow} fetchShows={props.fetchShows} addUserShow={props.addUserShow} removeUserShow={props.removeUserShow}/>
    </div>
  )
}

export default MyShows
