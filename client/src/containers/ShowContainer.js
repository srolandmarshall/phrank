import React, { Component } from 'react'
import { connect } from 'react-redux'
import ShowInput from '../components/Shows/ShowInput'
import Shows from '../components/Shows/Shows'

class ShowsContainer extends Component {

  render() {
    return (
      <div>
        <ShowInput />
        <Shows Shows={this.props.Shows} deleteShow={this.props.deleteShow}/>
      </div>
    )
  }
}

// const mapStateToProps = state => ({
//     Shows: state.Shows
// });

// const mapDispatchToProps = dispatch => ({
//   addShow: name => dispatch({ type: "ADD_Show", name }),
//   deleteShow: id => dispatch({ type: "DELETE_Show", id})
// })

export default connect(ShowsContainer)
