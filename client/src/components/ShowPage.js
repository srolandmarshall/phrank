import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Col } from 'react-bootstrap'

import { fetchShow } from '../actions/showActions'
import { fetchReviews } from '../actions/reviewActions'
import ShowContainer from '../containers/ShowContainer'

class ShowPage extends Component{

  constructor(props){
    super(props)
    const {match} = this.props
    const showId = match.params.id
    this.props.fetchShow(showId)
    this.props.fetchReviews("http://localhost:3001/api/reviews/?show_id="+showId)
  }

  componentDidMount(){
    const {match} = this.props
    const showId = match.params.id
    this.props.fetchShow(showId)
    this.props.fetchReviews("http://localhost:3001/api/reviews/?show_id="+showId)
  }

  render(){
    return (
      <Col>
        <h1>{this.props.show.location} - {this.props.show.showdate}</h1>
        <h2>Part of the {this.props.show.tour_name}</h2>
        <ShowContainer solo={true} show={this.props.show}/>
      </Col>
    )}
}

const mapStateToProps = (state, ownProps) => {
  return {
    show: state.shows.show,
    shows: state.shows
  }
}

const mapDispatchToProps = dispatch => ({
  fetchShow: (id) => dispatch(fetchShow(id)),
  fetchReviews: url => dispatch(fetchReviews(url))
})

export default connect(mapStateToProps,mapDispatchToProps)(ShowPage);
