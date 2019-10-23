import React, {Component} from 'react';
import { Container, Col } from 'react-bootstrap'
import DatePicker from 'react-date-picker'
import AddShowButton from './addShowButton'

var dateFormat = require('dateformat');

class ShowInput extends Component {

  constructor(props) {
    super(props);
    this.state = {
      date: new Date('July 5, 2019'),
    };
  };

  onChange = date => this.setState({date})

  handleSubmit(event) {
    event.preventDefault();

    // TODO: Create error if no shows
    // TODO: Add Show Reducer Tie-in

    this.setState({
      date: new Date()
    })
    const shortDate = dateFormat(this.state.date, "shortDate")
    console.log("Submitted "+shortDate);
    this.props.fetchShow(shortDate, this.props.user)
  }

  render() {
    return (
      <div>
        <Container>
            <Col align="center" xl={8}>
        <h3>Find Show by Date</h3>
        <form onSubmit={(event)=>this.handleSubmit(event)}>
          <div><DatePicker maxDate={new Date()} onChange={this.onChange} value={this.state.date}/> </div>
            <AddShowButton />
        </form>
        </Col>

        </Container>
      </div>)
  }

}

export default ShowInput;
