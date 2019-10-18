import React, { Component } from 'react'
import ShowInput from '../components/ShowInput'
import MyShowsList from '../components/myShowsList'
import { connect } from 'react-redux'

class ShowContainer extends Component {

  componentDidMount(){

    this.setState({
      shows: {
        shows: []
      },
      reviews: {
        reviews: []
      }
    })

    // console.log("componentDidMount Show Container")
    // const uid = this.props.user.userId
    // if (uid !== -1) {
    //   this.props.fetchShows(uid)
    //   this.props.fetchUserReviews(uid)
    // }
    // else {
    //   this.setState({
    //     shows: {
    //       shows: []
    //     },
    //     reviews: {
    //       reviews: []
    //     }
    //   })
    // }
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

export default connect(mapStateToProps)(ShowContainer);
