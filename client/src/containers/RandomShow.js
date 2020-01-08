import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Col } from 'react-bootstrap'

import { fetchRandomShow } from '../actions/showActions'
import { fetchReviews } from '../actions/reviewActions'
import ShowContainer from './ShowContainer'


class RandomShow extends Component {

  componentDidMount(){
    // const showId = match.params.id
    this.props.fetchRandomShow()
  }

  componentDidUpdate(prevProps){
    if (this.props.show !== prevProps.show){
      this.props.fetchReviews("http://localhost:3001/api/reviews/?show_id="+this.props.show.id)
    }
  }

  render() {
    const {show} = this.props;
    if (Object.entries(show).length > 0){
        return (
          <Col>
            <h1>{this.props.show.location} - {this.props.show.showdate}</h1>
            <h2>Part of the {this.props.show.tour_name}</h2>
            <ShowContainer solo={true} show={this.props.show}/>
          </Col>
        )}
    else {
      return "Loading..."
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    show: state.shows.show,
    user: state.users,
    reviews: state.reviews.reviews
  }
}

const mapDispatchToProps = dispatch => ({
  fetchRandomShow: () => dispatch(fetchRandomShow()),
  fetchReviews: url => dispatch(fetchReviews(url))
})

export default connect(mapStateToProps,mapDispatchToProps)(RandomShow);
