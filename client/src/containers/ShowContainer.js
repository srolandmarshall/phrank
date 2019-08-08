import React, { Component } from 'react'
import ShowInput from '../components/ShowInput'
import Shows from '../components/Shows'

class ShowsContainer extends Component {

  componentDidMount(){
    if (this.props.shows.shows.length === 0) {this.props.fetchShows(3)}
  }

  render() {
    return (
      <div>
        <Shows deleteShow={this.props.deleteShow} shows={this.props.shows.shows}/>
        <ShowInput addUserShow={this.props.addUserShow} fetchShow={this.props.fetchShow}/>
      </div>
    )
  }
}
export default ShowsContainer;
