import React, {Component} from 'react';
import parse from 'html-react-parser';
class Show extends Component {

  render() {
    const show = this.props.show;
    return (
      <div className="show">
        <h4>{show.showdate}</h4>
        <h4>{show.venue + ", " + show.location}</h4>
        <div>{parse(show.setlist)}</div>
        <button> X </button>
      </div>)
  }

}

export default Show;
