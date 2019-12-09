import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Container, Row, Col, Button, Card} from 'react-bootstrap'

import { fetchShow } from '../actions/showActions'
import ShowContainer from '../containers/ShowContainer'

class ShowPage extends Component{

  constructor(props){
    super(props)
    const {match} = this.props
    const showId = match.params.id
    this.props.fetchShow(showId)
  }

  componentDidMount(){
    const {match} = this.props
    const showId = match.params.id
    this.props.fetchShow(showId)
  }

  render(){
    return (
      <Col>
        <h1>{this.props.show.location} - {this.props.show.showdate}</h1>
        <h2>Part of the {this.props.show.tour_name}</h2>
        <ShowContainer solo={true} show={this.props.show}/>
      </Col>
    )}
}

const mapStateToProps = (state, ownProps) => {
  return {
    show: state.shows.show.show,
    shows: state.shows
  }
}

const mapDispatchToProps = dispatch => ({
  fetchShow: (id) => dispatch(fetchShow(id))
})

export default connect(mapStateToProps,mapDispatchToProps)(ShowPage);
