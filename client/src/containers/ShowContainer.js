import React, { Component } from 'react'
// import { connect } from 'react-redux'
import ShowInput from '../components/ShowInput'
import Shows from '../components/Shows'

class ShowsContainer extends Component {

  render() {
    return (
      <div>
        <ShowInput />
        <h3>Added Shows</h3>
        <Shows />
      </div>
    )
  }
}
export default ShowsContainer;

// const mapStateToProps = state => ({
//     Shows: state.Shows
// });

// const mapDispatchToProps = dispatch => ({
//   addShow: name => dispatch({ type: "ADD_Show", name }),
//   deleteShow: id => dispatch({ type: "DELETE_Show", id})
// })

// export default connect(null)(ShowsContainer)
