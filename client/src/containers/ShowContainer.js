import React, { Component } from 'react';
import { Col } from 'react-bootstrap'

import Show from '../components/Show'
import ReviewsContainer from './ReviewsContainer'

class ShowContainer extends Component{

  render(){
    if (this.props.solo){
      return (
          <Col>
            <h1>{this.props.show.location} - {this.props.show.showdate}</h1>
            <h2>Part of the {this.props.show.tour_name}</h2>
            <Show key={this.props.show.id} show={this.props.show} />
            <ReviewsContainer show={this.props.show}/>
          </Col>
      )}
    else{
      return (<Col sm={12} xl={4} md={4}>
        <h3>{this.props.show.location} - {this.props.show.showdate}</h3>
        <h4>Part of the {this.props.show.tour_name}</h4>
        <Show key={this.props.show.id} show={this.props.show} />
        <ReviewsContainer show={this.props.show}/>
      </Col>
    )}
  }
}


export default ShowContainer;
