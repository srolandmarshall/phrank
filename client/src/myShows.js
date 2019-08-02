import React from 'react'
import ShowContainer from './containers/ShowContainer'

const MyShows = (props) => {
  return (
    <div>
      <ShowContainer shows={props.shows} addShow={props.addShow} deleteShow={props.deleteShow} fetchShow={props.fetchShow} />
    </div>
  )
}

export default MyShows
