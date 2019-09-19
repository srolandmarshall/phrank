import React, { Component } from 'react'
import ShowInput from '../components/ShowInput'
import Shows from '../components/Shows'
import { connect } from 'react-redux'

class ShowsContainer extends Component {



  componentDidMount(){
    console.log("componentDidMount Show Container")
    if (this.props.user.userId !== -1) {
      this.props.fetchShows(this.props.user.userId)
    }
    else {
      this.setState({
        shows: {
          shows: []
        }
      })
    }
  }

  componentDidUpdate(prevProps){
    console.log(prevProps)
    if (this.props.user.userId !== prevProps.user.userId){
      this.props.fetchShows(this.props.user.userId)
    }
  }

  render() {
    return (
      <div>
        <Shows user={this.props.user} deleteShow={this.props.deleteShow} shows={this.props.shows.shows} removeUserShow={this.props.removeUserShow} />
        <ShowInput user={this.props.user} addUserShow={this.props.addUserShow} fetchShow={this.props.fetchShow} />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    shows: state.shows,
    user: state.users
  }
}

export default connect(mapStateToProps)(ShowsContainer);
