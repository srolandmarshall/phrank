import React, {Component} from 'react';
import DatePicker from 'react-date-picker'

var dateFormat = require('dateformat');

class ShowInput extends Component {

  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  };

  onChange = date => this.setState({date})

  handleSubmit(event) {
    event.preventDefault();
    // TODO: Check for Show
    // TODO: Create error if no shows
    // TODO: Add Show Reducer Tie-in

    this.setState({
      date: new Date()
    })
    const shortDate = dateFormat(this.state.date, "shortDate")
    console.log("Submitted "+shortDate);
    console.log(this.props.fetchShow(shortDate));

  }

  render() {
    return (
      <div>
        <h3>Add show</h3>
        <form onSubmit={(event)=>this.handleSubmit(event)}>
          <DatePicker maxDate={new Date()} onChange={this.onChange} value={this.state.date}/>
          <input type="submit"/>
        </form>
      </div>)
  }

}

export default ShowInput;
