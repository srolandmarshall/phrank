import React, { Component } from 'react'
// import { connect } from 'react-redux'
import ShowInput from '../components/ShowInput'
import Shows from '../components/Shows'

class ShowsContainer extends Component {

  render() {
    return (
      <div>
        <h3>My Shows</h3>
        <Shows deleteShow={this.props.deleteShow} shows={this.props.shows.shows}/>
        <ShowInput fetchShow={this.props.fetchShow}/>
      </div>
    )
  }
}
export default ShowsContainer;
