import React, { Component } from 'react';
import { Col } from 'react-bootstrap'

import Show from '../components/Show'
import ReviewsContainer from './ReviewsContainer'

class ShowContainer extends Component{

  render(){
    if (this.props.solo){
      return (
          <Col>
            <Show key={this.props.show.id} show={this.props.show} />
            <ReviewsContainer show={this.props.show}/>
          </Col>
      )}
    else{
      return (<Col sm={12} xl={4} md={4}>
        <Show key={this.props.show.id} show={this.props.show} />
        <ReviewsContainer show={this.props.show}/>
      </Col>
    )}
  }
}


export default ShowContainer;
