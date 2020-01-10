import React from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './App'
import MyShows from './components/myShows'
import LogOut from './components/LogOut'
import User from './components/User'
import ShowPage from './components/ShowPage'
import SignUpContainer from './containers/SignUpContainer'
import ShowsContainer from './containers/ShowsContainer'
import SignInContainer from './containers/SignInContainer'
import Random from './containers/RandomShow'
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
          <NavBar userId={this.props.user.userId}/>
          <Route exact path="/" render={() => <App />}/>
          <Route path="/users/:id" component={User} />
          <Route path="/shows/:id" component={ShowPage} />
          <Route path="/sign_in" render={()=> <SignInContainer />}/>
          <Route path="/sign_up" render={()=> <SignUpContainer />}/>
          <Route path="/myshows" render={() => <MyShows />}/>
          <Route path="/newest" render={() => <Newest />}/>
          <Route path="/random" render={() => <Random />} />
          <Route path="/logout" render={() => <LogOut />} />
          <Route exact path="/shows" render={() => <ShowsContainer />} />
          <p className="tos">This site voluntarily complies with the Phish fan web site and audio trading policy at <a href="https://www.phish.com/faq/web-guidelines&#8221">Phish.com</a></p>
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
