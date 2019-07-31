import React, { Component } from 'react';
import { connect } from 'react-redux';
import ShowContainer from './containers/ShowContainer'
import './App.css'

class App extends Component {
  componentDidMount(){
  }

  render() {
    return(
      <div className="App">
        <h1>Phrank!</h1>
        <h2>The application for tracking, ranking, and listening to your phavorite Phish shows.</h2>
      <ShowContainer shows={this.props.shows} fetchShow={this.props.fetchShow}/>
    </div>)
  };
}

const mapStateToProps = (state) => {
  return {shows: state.shows}
}

const mapDispatchToProps = (dispatch) => ({
  addshow: name => dispatch({ type: "ADD_SHOW", name }),
  // deleteshow: id => dispatch({ type: "DELETE_SHOW", id}),
  fetchShow: showDate => dispatch({ type:"FETCH_SHOW", showDate})
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
