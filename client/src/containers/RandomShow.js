import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Col } from 'react-bootstrap'

import { fetchRandomShow, fetchShowFromPhishIn } from '../actions/showActions'
import { fetchReviews } from '../actions/reviewActions'
import ShowContainer from './ShowContainer'

var moment = require('moment');

class RandomShow extends Component {

  componentDidMount(){
    // const showId = match.params.id
    this.props.fetchRandomShow()
  }

  componentDidUpdate(prevProps){
    if (this.props.show !== prevProps.show){
      this.props.fetchReviews("http://localhost:3001/api/reviews/?show_id="+this.props.show.id)
      const showdate = moment(this.props.show.showdate).format('YYYY-MM-DD')
      this.props.fetchShowFromPhishIn(showdate);
    }
  }

  render() {
    const {show} = this.props;
    if (Object.entries(show).length > 0){
        return (
          <Col>
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
    reviews: state.reviews.reviews,
    phishin: state.shows.phishin
  }
}

const mapDispatchToProps = dispatch => ({
  fetchRandomShow: () => dispatch(fetchRandomShow()),
  fetchReviews: url => dispatch(fetchReviews(url)),
  fetchShowFromPhishIn: date => dispatch(fetchShowFromPhishIn(date))
})

export default connect(mapStateToProps,mapDispatchToProps)(RandomShow);
