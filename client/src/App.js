import React, { Component } from 'react';
import { connect } from 'react-redux';
import ShowContainer from './containers/ShowContainer'
import {fetchShow} from './actions/showActions'
import './App.css'

class App extends Component {
  componentDidMount(){
  }

  render() {
    return(
      <div className="App">
        <h1>Phrank!</h1>
        <h2>The application for tracking, ranking, and listening to your phavorite Phish shows.</h2>
      <ShowContainer fetchShow={this.props.fetchShow}/>
    </div>)
  };
}

const mapStateToProps = (state) => {
  return {shows: state.shows}
}

export default connect(mapStateToProps, {fetchShow})(App);
