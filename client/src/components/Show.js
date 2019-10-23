import React, {Component} from 'react';
import parse from 'html-react-parser';
import { connect } from 'react-redux'


class Show extends Component {



  render() {
    const {show} = this.props;
    return (
      <div className="show">
        <h4>{show.showdate}</h4>
        <h5>{show.venue + ", " + show.location}</h5>
        <div>{parse(show.setlist)}</div>
      </div>)
  }

}

export default connect(null,null)(Show);
