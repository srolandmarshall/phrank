import React from 'react';
import { Provider, connect } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'
import App from './App'
import AddShow from './AddShow'
import {fetchShow} from './actions/showActions'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'

const Root = ({ store, shows, addShow, deleteShow, fetchShow }) => (
  <Provider store={store}>
    <Router>
      <Navbar bg="dark" variant="dark" sticky="top">
        <Nav className="mr-auto">
          <Link className="topLink" to="/">Home</Link>
          <Link className="topLink" to="/addshow">Add Show</Link>
          <Link className="topLink" to="/reviews">Reviews</Link>
        </Nav>
      </Navbar>
      <Route exact path="/" render={() => <App />}/>
      <Route path="/addshow" render={() => <AddShow shows={shows} addShow={addShow} deleteShow={deleteShow} fetchShow={fetchShow} />} />
    </Router>
  </Provider>
)

const mapStateToProps = (state, ownProps) => {
  return {shows: state.shows}
}

const mapDispatchToProps = dispatch => ({
  addShow: name => dispatch({ type: "ADD_SHOW", name }),
  deleteShow: id => dispatch({ type: "DELETE_SHOW", id}),
  fetchShow: showDate => dispatch(fetchShow(showDate))
})

export default connect(mapStateToProps, mapDispatchToProps)(Root)
