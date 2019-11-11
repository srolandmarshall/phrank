import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'

import { removeUserShow, addUserShow } from '../actions/showActions'


class addShowSwitch extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userShows: this.props.userShows,
      show: this.props.show
    }
  };

  handleAddSubmit(event) {
    event.preventDefault();
    console.log("Adding show..."+this.props.show.id)
    this.props.addUserShow(this.props.show.id, this.props.user);
  }

  handleRemoveSubmit(event) {
    event.preventDefault();
    this.props.removeUserShow(this.props.show.id, this.props.user);
  }

  componentDidUpdate(prevProps) {
    if (this.props.userShows !== prevProps.userShows){
      this.setState({
        userShows: this.props.userShows
      })
    }
  }

  render(){
    const sid = this.props.show.id
    if (this.state.userShows.find(function(e) {return e.id === sid})) {
      return <Button variant="danger" onClick={this.handleRemoveSubmit.bind(this)}>Remove Show</Button>
    } else {
      return <Button variant="outline-info" onClick={this.handleAddSubmit.bind(this)}>Add Show</Button>
    }
  }

}

const mapDispatchToProps = dispatch => ({
  removeUserShow: (show, user) => dispatch(removeUserShow(show, user)),
  addUserShow: (show, user) => dispatch(addUserShow(show, user))
})

const mapStateToProps = (state, ownProps) => {
  return {
    reviews: state.reviews,
    user: state.users,
    userShows: state.shows.userShows
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(addShowSwitch);
