import React from 'react';
import '/Cockpit.css';

const cockpit = (props) => {

  let classes = [];

  if (props.persons.length <= 2) {
    classes.push('red');
  }

  if (this.state.persons.length <= 1) {
    classes.push('bold');
    console.log(classes)
  }

  return (
    <div>
      <h1>Hi, I'm a react app</h1>
      <p className={classes.join(' ')}>Hi, I'm a react App!!!</p>
      <button
      style={style}
      onClick={this.togglePersonsHandler}>Switch name
      </button>
    </div>
  );
}

export default cockpit;
