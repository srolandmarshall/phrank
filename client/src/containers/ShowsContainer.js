import React, { Component } from 'react'
// import ShowInput from '../components/ShowInput'
import { Container } from 'react-bootstrap'
import { connect } from 'react-redux'
import Select from 'react-select'
import ShowsList from '../components/ShowsList'

import { getTours, fetchShowsByTour, clearShows, fetchUserShows } from '../actions/showActions'

class ShowsContainer extends Component {

  constructor(props){
    super(props)
    this.state = {
      tours: this.props.getTours()
    }
  }


  componentDidMount(){
    this.props.fetchUserShows(this.props.user.userId)
    this.props.clearShows()
  }

  componentDidUpdate(prevProps){
    if (this.props.user.userId !== prevProps.user.userId){
      this.props.fetchUserShows(this.props.user.userId)
    }
    if (this.props.reviews !== prevProps.reviews){
      console.log("reviews changed!")
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
      <Container>
        <h3>By Tour</h3>
        <Select title="By Tour" options={options} onChange={this.handleChange}>
        </Select>
        <ShowsList />
      </Container>
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

export default connect(mapStateToProps, mapDispatchToProps)(ShowsContainer);
