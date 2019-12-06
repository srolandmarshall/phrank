import React, { Component } from 'react';
import { Container, Row, Col, Button, Card} from 'react-bootstrap'
import AddShowSwitch from '../components/addShowSwitch'
import Show from '../components/Show'
import ReviewsContainer from './ReviewsContainer'


class ShowContainer extends Component{
  render(){
    return (
        <Col sm={12} xl={4} md={4}>
          <Show key={this.props.show.id} show={this.props.show} />
          <ReviewsContainer show={this.props.show}/>
          <AddShowSwitch show={this.props.show} />
        </Col>
    )}
}

export default ShowContainer
