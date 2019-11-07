import React, { Component } from 'react';
import { Button } from 'react-bootstrap'


class addShowSwitch extends Component {

  render(){
    if (true) {
      return <Button variant="outline-info">Add Show</Button>
    } else {
      return <Button variant="danger">Remove Show</Button>
    }
  }

}

export default addShowSwitch;
