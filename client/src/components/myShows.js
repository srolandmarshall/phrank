import React from 'react'
import ShowContainer from '../containers/ShowContainer'

class MyShows extends React.Component{

  render(){
  return (
    <div>
      <h3>My Shows</h3>
      <ShowContainer getCurrentUser={this.props.getCurrentUser} user={this.props.user} shows={this.props.shows} addShow={this.props.addShow} deleteShow={this.props.deleteShow} fetchShow={this.props.fetchShow} fetchShows={this.props.fetchShows} addUserShow={this.props.addUserShow} removeUserShow={this.props.removeUserShow}/>
    </div>
  )}
}

export default MyShows
