import React from 'react';

const char = (props) => {
  return <div className="Character" onClick={props.clicked}>{props.letter}</div>
}

export default char;
