import React, { Component } from 'react';
import { connect } from 'react-redux';
import ShowContainer from './containers/ShowContainer'
import './App.css'

function App() {
  return (
    <div className="App">
      <h1>Phrank!</h1>
      <h2>The application for tracking, ranking, and listening to your phavorite Phish shows.</h2>
      <ShowContainer />
    </div>
  );
}

export default App;
