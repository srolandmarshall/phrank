import React from 'react';

var moment = require('moment');

function ReviewDate(props) {
  return <p className="date">{moment(props.date).format('llll')}</p>
}

export default ReviewDate;
