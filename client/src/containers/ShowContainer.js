import React, { Component } from 'react'
import ShowInput from '../components/ShowInput'
import Shows from '../components/Shows'

class ShowsContainer extends Component {

  componentDidMount(){
    if (this.props.user.userId !== -1) {
      console.log("fetch should fire")
      this.props.fetchShows(this.props.user.userId)
    }
    else {
      this.setState({
        shows: {
          shows: []
        }
      })
    }
  }

  render() {
    return (
      <div>
        <Shows user={this.props.user} deleteShow={this.props.deleteShow} shows={this.props.shows.shows} removeUserShow={this.props.removeUserShow} />
        <ShowInput user={this.props.user} addUserShow={this.props.addUserShow} fetchShow={this.props.fetchShow} />
      </div>
    )
  }
}
export default ShowsContainer;
