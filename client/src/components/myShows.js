import React from 'react'
import ShowsContainer from '../containers/ShowsContainer'

class MyShows extends React.Component{

  render(){
  return (
    <div>
      <h3>My Shows</h3>
      <ShowsContainer fetchUserReviews={this.props.fetchUserReviews} getCurrentUser={this.props.getCurrentUser} user={this.props.user} shows={this.props.shows} addShow={this.props.addShow} deleteShow={this.props.deleteShow} fetchShow={this.props.fetchShow} fetchShows={this.props.fetchShows} addUserShow={this.props.addUserShow} removeUserShow={this.props.removeUserShow}/>
    </div>
  )}
}

export default MyShows
