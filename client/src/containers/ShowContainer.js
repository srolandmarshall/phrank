import React, { Component } from 'react'
import ShowInput from '../components/ShowInput'
import { connect } from 'react-redux'
import Select from 'react-select'

import { getTours } from '../actions/showActions'

class ShowContainer extends Component {

  componentDidMount(){

    this.setState({
      shows: {
        shows: []
      },
      reviews: {
        reviews: []
      },
      tours: this.props.getTours()

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
    const listTours = this.props.shows.tours
    const options = listTours.map(tour => {
      return {value: tour, label: tour}
    })



    return (
      <div>
        <Select title="By Tour" options={options}>
        </Select>
        <h3 align={"center"}>or</h3>
        <ShowInput user={this.props.user} addUserShow={this.props.addUserShow} fetchShow={this.props.fetchShow} />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    shows: state.shows,
    user: state.users,
    reviews: state.reviews,
    tours: state.tours
  }
}

const mapDispatchToProps = (dispatch) => ({
  getTours: () => dispatch(getTours())
})

export default connect(mapStateToProps, mapDispatchToProps)(ShowContainer);
