import React from 'react'
import ShowContainer from '../containers/ShowContainer'

const MyShows = (props) => {
  return (
    <div>
      <h3>My Shows</h3>
      <ShowContainer shows={props.shows} addShow={props.addShow} deleteShow={props.deleteShow} fetchShow={props.fetchShow} fetchShows={props.fetchShows}/>
    </div>
  )
}

export default MyShows
