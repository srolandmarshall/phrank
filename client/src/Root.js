import React from 'react';
import { Provider, connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './App'
import NavBar from './NavBar'
import MyShows from './components/myShows'
import {fetchShow, fetchShows, addUserShow, removeUserShow} from './actions/showActions'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'


const Root = ({ store, shows, addShow, deleteShow, fetchShow, fetchShows, addUserShow, removeUserShow }) => (
  <Provider store={store}>
    <Router>
      <NavBar/>
      <Route exact path="/" render={() => <App />}/>
      <Route path="/shows" render={() => <MyShows shows={shows} addShow={addShow} deleteShow={deleteShow} fetchShow={fetchShow} fetchShows={fetchShows} addUserShow={addUserShow} removeUserShow={removeUserShow}/>} />
    </Router>
  </Provider>
)

const mapStateToProps = (state, ownProps) => {
  return {shows: state.shows}
}

const mapDispatchToProps = dispatch => ({
  addShow: name => dispatch({ type: "ADD_SHOW", name }),
  deleteShow: id => dispatch({ type: "DELETE_SHOW", id}),
  fetchShow: showDate => dispatch(fetchShow(showDate)),
  fetchShows: userId => dispatch(fetchShows(userId)),
  addUserShow: (showId, userId) => dispatch(addUserShow(showId, userId)),
  removeUserShow: (showId, userId) => dispatch(removeUserShow(showId, userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Root)
