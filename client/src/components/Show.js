import React, {Component} from 'react';
import { Row, Col, Card} from 'react-bootstrap'
import parse from 'html-react-parser';
import { connect } from 'react-redux'
import AddShowSwitch from '../components/addShowSwitch'

class Show extends Component {


  render() {
    const {show} = this.props;
    return (
      <Card>
        <Card.Header as="h4">{show.showdate}</Card.Header>
        <Card.Body>
          <Row>
            <Col xl="auto">
              <Card.Title>{show.venue + ", " + show.location}</Card.Title>
            </Col>
            <Col align="right">
              <AddShowSwitch show={show} />
            </Col>
          </Row>
          <Card.Text>
            {parse(show.setlist)}
          </Card.Text>
        </Card.Body>
      </Card>
    )
  }

}

export default connect(null,null)(Show);
