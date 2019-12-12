import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap'
import { connect } from 'react-redux'

import {fetchShows} from '../actions/showActions'
import {fetchUserData} from '../actions/userActions'
import {fetchReviews} from '../actions/reviewActions'
import ShowsList from './ShowsList'

class User extends Component {

  constructor(props){
    super(props)
    const {match} = this.props
    const userId = match.params.id
    this.props.fetchUserData(userId)
    this.props.fetchShows(userId)
    this.props.fetchReviews("http://localhost:3001/api/users/"+userId+"/reviews")
  }

  render() {
    const {user} = this.props
    return (<Container>
      <Row><h1>{`${user.email}'s Shows`} </h1></Row>
      <ShowsList />
    </Container>)
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchShows: userId => dispatch(fetchShows(userId)),
  fetchUserData: userId => dispatch(fetchUserData(userId)),
  fetchReviews: url => dispatch(fetchReviews(url))
})

const mapStateToProps = (state, ownProps) => {
  return {
    shows: state.shows.shows,
    reviews: state.reviews.reviews,
    user: state.users.profileUser
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(User)
