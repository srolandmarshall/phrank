import React from 'react'
import { Container } from 'react-bootstrap'
import MyShowsContainer from '../containers/MyShowsContainer'

class MyShows extends React.Component{

  render(){
  return (
    <Container>
      <h3>My Shows</h3>
      <MyShowsContainer />
    </Container>
  )}
}

export default MyShows
