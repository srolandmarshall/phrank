import React, { Component } from 'react'
import ShowInput from '../components/ShowInput'
import MyShowsList from '../components/myShowsList'
import { connect } from 'react-redux'

import { clearShows } from '../actions/showActions'


class ShowsContainer extends Component {

  constructor(props){
    super(props)
    this.state = {
      shows: {
        shows: []
      },
      reviews: {
        reviews: []
      }
    }
  }

  componentDidMount(){
    this.props.clearShows()
    console.log("componentDidMount Show Container")
    const uid = this.props.user.userId
    if (uid !== -1) {
      console.log("fetching shows");
      this.props.fetchShows(uid)
      console.log("fetching reviews");
      this.props.fetchUserReviews(uid)
    }
  }

  componentDidUpdate(prevProps){
    const uid = this.props.user.userId
    if (this.props.user.userId !== prevProps.user.userId){
      console.log("fetching shows");
      this.props.fetchShows(uid)
      console.log("fetching reviews");
      this.props.fetchUserReviews(uid)
    }
  }

  render() {
    return (
      <div>
        <ShowInput user={this.props.user} addShow={this.props.addShow} fetchShow={this.props.fetchShow} />
        <MyShowsList reviews={this.props.reviews} user={this.props.user} deleteShow={this.props.deleteShow} shows={this.props.shows} removeShow={this.props.removeShow} />
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
  clearShows: () => dispatch(clearShows())
})

export default connect(mapStateToProps,mapDispatchToProps)(ShowsContainer);
