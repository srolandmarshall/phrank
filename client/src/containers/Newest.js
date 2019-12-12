import React, { Component } from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import ShowsList from '../components/ShowsList'
import ReviewsContainer from './ReviewsContainer'
import { fetchNewestReviews } from '../actions/reviewActions'
import { fetchNewestShows } from '../actions/showActions'

class Newest extends Component {

  constructor(props){
    super()
    props.fetchNewestShows()
    props.fetchNewestReviews()
  }

  render(){
    return (<Container>
      <Row><h2>Recently Reviewed Shows</h2></Row>
      <ShowsList />
    </Container>)
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    shows: state.shows.shows,
    user: state.users,
    reviews: state.reviews
  }
}

const mapDispatchToProps = dispatch => ({
  fetchNewestShows: () => dispatch(fetchNewestShows()),
  fetchNewestReviews: () => dispatch(fetchNewestReviews())
})

export default connect (mapStateToProps, mapDispatchToProps)(Newest)
