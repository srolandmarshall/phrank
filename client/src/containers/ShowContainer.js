import React, { Component } from 'react'
import ShowInput from '../components/ShowInput'
import Shows from '../components/Shows'
import { connect } from 'react-redux'

class ShowsContainer extends Component {

  componentDidMount(){
    console.log("componentDidMount Show Container")
    const uid = this.props.user.userId
    if (uid !== -1) {
      this.props.fetchShows(uid)
      this.props.fetchUserReviews(uid)
    }
    else {
      this.setState({
        shows: {
          shows: []
        },
        reviews: {
          reviews: []
        }
      })
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
        <ShowInput user={this.props.user} addUserShow={this.props.addUserShow} fetchShow={this.props.fetchShow} />
        <Shows reviews={this.props.reviews} user={this.props.user} deleteShow={this.props.deleteShow} shows={this.props.shows.shows} removeUserShow={this.props.removeUserShow} />
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

export default connect(mapStateToProps)(ShowsContainer);
