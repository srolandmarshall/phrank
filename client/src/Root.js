import React from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './App'
import MyShows from './components/myShows'
import User from './components/User'
import SignUpContainer from './containers/SignUpContainer'
import ShowContainer from './containers/ShowContainer'
import SignInContainer from './containers/SignInContainer'
import Newest from './containers/Newest'
import {fetchShow, fetchShows, removeShow} from './actions/showActions'
import {registerUser, loginUser, getCurrentUser} from './actions/userActions'
import {fetchUserReviews, createReview} from './actions/reviewActions'
import NavBar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'

class Root extends React.Component {

  constructor(props){
    super(props)
    props.getCurrentUser()
  }

  render() {
    return (
        <Router>
          <NavBar />
          <Route exact path="/" render={() => <App />}/>
          <Route path="/users/:id" component={User} />
          <Route path="/sign_in" render={()=> <SignInContainer loginUser={this.props.loginUser} />}/>
          <Route path="/sign_up" render={()=> <SignUpContainer registerUser={this.props.registerUser} />}/>
          <Route path="/myshows" render={() => <MyShows createReview={this.props.createReview} fetchUserReviews={this.props.fetchUserReviews} getCurrentUser={this.props.getCurrentUser} user={this.props.user} shows={this.props.shows} addShow={this.props.addShow} deleteShow={this.props.deleteShow} fetchShow={this.props.fetchShow} fetchShows={this.props.fetchShows} removeShow={this.props.removeShow}/>} />
          <Route path="/newest" render={() => <Newest />}/>
          <Route path="/shows" render={() => <ShowContainer createReview={this.props.createReview} fetchUserReviews={this.props.fetchUserReviews} getCurrentUser={this.props.getCurrentUser} user={this.props.user} shows={this.props.shows} addShow={this.props.addShow} deleteShow={this.props.deleteShow} fetchShow={this.props.fetchShow} fetchShows={this.props.fetchShows} removeShow={this.props.removeShow}/>} />
        </Router>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    shows: state.shows,
    user: state.users,
    reviews: state.reviews
  }
}

const mapDispatchToProps = dispatch => ({
  addShow: name => dispatch({ type: "ADD_SHOW", name }),
  deleteShow: id => dispatch({ type: "DELETE_SHOW", id}),
  fetchShow: (showDate, user) => dispatch(fetchShow(showDate, user)),
  fetchShows: userId => dispatch(fetchShows(userId)),
  removeShow: (showId, user) => dispatch(removeShow(showId, user)),
  registerUser: (email, password) => dispatch(registerUser(email, password)),
  loginUser: (email, password) => dispatch(loginUser(email, password)),
  getCurrentUser: () => dispatch(getCurrentUser()),
  fetchUserReviews: (userId) => dispatch(fetchUserReviews(userId)),
  createReview: (user, show, review) => dispatch(createReview(user, show, review))
})

export default connect(mapStateToProps, mapDispatchToProps)(Root)
