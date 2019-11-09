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
    this.props.addUserShow(this.props.show.id);
  }

  handleRemoveSubmit(event) {
    event.preventDefault();
    this.props.removeUserShow(this.props.show.id);
  }

  render(){
    const sid = this.props.show.id
    if (this.state.userShows.find(function(e) {return e.id === sid})) {
      return <Button variant="danger">Remove Show</Button>
    } else {
      return <Button variant="outline-info">Add Show</Button>
    }
  }

}

const mapDispatchToProps = dispatch => ({
  removeUserShow: (user, show, review) => dispatch(removeUserShow(user, show, review)),
})

const mapStateToProps = (state, ownProps) => {
  return {
    reviews: state.reviews,
    user: state.users,
    userShows: state.shows.userShows
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(addShowSwitch);
