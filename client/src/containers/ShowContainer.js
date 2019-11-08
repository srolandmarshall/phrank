import React, { Component } from 'react'
// import ShowInput from '../components/ShowInput'
import { connect } from 'react-redux'
import Select from 'react-select'
import ShowsList from '../components/ShowsList'

import { getTours, fetchShowsByTour, clearShows, fetchUserShows } from '../actions/showActions'

class ShowContainer extends Component {

  constructor(props){
    super(props)
    this.state = {
      shows: {
        shows: [],
        userShows: []
      },
      reviews: {
        reviews: []
      },
      tours: this.props.getTours()
    }
  }


  componentDidMount(){

    this.props.clearShows()
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
    if (this.props.user.userId !== prevProps.user.userId){
      this.props.fetchUserShows(this.props.user.userId)
    }
  }

  handleChange = selectedOption => {
    this.setState({selectedOption});
    console.log('Option: ', selectedOption);
    this.props.fetchShowsByTour(selectedOption.value)
  }

  render() {
    const tours = this.props.shows.tours
    const options = tours.map(tour => {
      return {value: tour.id, label: tour.name}
    })

    return (
      <div>
        <h3>By Tour</h3>
        <Select title="By Tour" options={options} onChange={this.handleChange}>
        </Select>
        <ShowsList shows={this.props.shows.shows} userShows={this.props.shows.userShows}/>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    shows: state.shows,
    user: state.users,
    reviews: state.reviews,
    tours: state.tours,
    userShows: state.userShows
  }
}

const mapDispatchToProps = (dispatch) => ({
  getTours: () => dispatch(getTours()),
  fetchShowsByTour: (tourId) => dispatch(fetchShowsByTour(tourId)),
  clearShows: () => dispatch(clearShows()),
  fetchUserShows: (userId) => dispatch(fetchUserShows(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(ShowContainer);
