import React, { Component } from 'react'
// import { connect } from 'react-redux'
import ShowInput from '../components/ShowInput'
import Shows from '../components/Shows'

class ShowsContainer extends Component {

  render() {
    return (
      <div>
        <ShowInput fetchShow={this.props.fetchShow}/>
        <h3>Added Shows</h3>
        <Shows shows={this.props.shows}/>
      </div>
    )
  }
}
export default ShowsContainer;
