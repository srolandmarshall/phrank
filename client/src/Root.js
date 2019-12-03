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
import {registerUser, loginUser, getCurrentUser} from './actions/userActions'
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
          <Route path="/sign_in" render={()=> <SignInContainer />}/>
          <Route path="/sign_up" render={()=> <SignUpContainer />}/>
          <Route path="/myshows" render={() => <MyShows />}/>
          <Route path="/newest" render={() => <Newest />}/>
          <Route path="/shows" render={() => <ShowContainer />} />
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
  registerUser: (email, password) => dispatch(registerUser(email, password)),
  loginUser: (email, password) => dispatch(loginUser(email, password)),
  getCurrentUser: () => dispatch(getCurrentUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(Root)
