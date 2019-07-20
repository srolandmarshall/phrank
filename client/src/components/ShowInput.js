import React, {Component} from 'react';
import DatePicker from 'react-date-picker'

class ShowInput extends Component {

  state = {
    date: new Date()
  }

  onChange = date => this.setState({date})

  handleSubmit(event) {
    event.preventDefault();
    console.log("Submitted");
    // TODO: Check for Show
    // TODO: Create error if no shows
    // TODO: Add Show Reducer Tie-in 
    this.setState({
      date: new Date()
    })
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
