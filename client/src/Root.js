import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'
import App from './App'
import AddShow from './AddShow'
import {fetchShow} from './actions/showActions'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Navbar bg="dark" variant="dark" sticky="top">
        <Nav className="mr-auto">
          <Link to="/">Home</Link>
          <Link to="/addshow">Add Show</Link>
          <Link to="/reviews">Reviews</Link>
        </Nav>
      </Navbar>
      <Route exact path="/" component={App}/>
      <Route path="/addshow" component={AddShow} />
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
