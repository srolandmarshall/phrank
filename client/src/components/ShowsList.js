import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap'
import { connect } from 'react-redux'

import ShowContainer  from '../containers/ShowContainer'

class ShowsList extends Component {

  render() {
    return(
      <Container>
        <Row>
          {this.props.shows.map(show =>
            <ShowContainer show={show} key={show.id}/>
          )}
        </Row>
      </Container>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    shows: state.shows.shows
  }
}

export default connect(mapStateToProps, null)(ShowsList);
