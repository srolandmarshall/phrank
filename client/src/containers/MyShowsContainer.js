import React, { Component } from 'react'
import ShowInput from '../components/ShowInput'
import MyShowsList from '../components/myShowsList'
import { connect } from 'react-redux'

import { clearShows, fetchShows, fetchUserShows } from '../actions/showActions'
import { fetchUserReviews } from '../actions/reviewActions'


class MyShowsContainer extends Component {

  componentDidMount(){
    this.props.clearShows()
    console.log("componentDidMount Show Container")
    const uid = this.props.user.userId
    if (uid !== -1) {
      console.log("fetching shows");
      this.props.fetchShows(uid)
      console.log("fetching reviews");
      this.props.fetchUserReviews(uid)
      this.props.fetchUserShows(this.props.user.userId)
    }
  }

  componentDidUpdate(prevProps){
    const uid = this.props.user.userId
    if (this.props.user.userId !== prevProps.user.userId){
      console.log("fetching shows");
      this.props.fetchShows(uid)
      console.log("fetching reviews");
      this.props.fetchUserReviews(uid)
      this.props.fetchUserShows(this.props.user.userId)
    }
  }

  render() {
    return (
      <div>
        <ShowInput user={this.props.user} addShow={this.props.addShow} fetchAndAddShow={this.props.fetchAndAddShow} />
        <MyShowsList />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    shows: state.shows,
    user: state.users,
    reviews: state.reviews
  }
}

const mapDispatchToProps = (dispatch) => ({
  clearShows: () => dispatch(clearShows()),
  fetchUserReviews: (userId) => dispatch(fetchUserReviews(userId)),
  fetchShows: userId => dispatch(fetchShows(userId)),
  fetchUserShows: (userId) => dispatch(fetchUserShows(userId))
})

export default connect(mapStateToProps,mapDispatchToProps)(MyShowsContainer);
