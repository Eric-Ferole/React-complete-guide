import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Aux from '../../../hoc/Aux'
import withClass from '../../../hoc/withClass';
import classes from './Person.css';

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef()
  }
  componentDidMount() {
    // this.inputElement.focus();
    this.inputElementRef.current. focus();
  }
  render() {
    console.log('[Person.js] rendering...');
    return (
      <Aux>
        {this.props.isAuth ?  <p>Autheticated!</p> : <p>Please log in</p>}
      <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
        <p>{this.props.children}</p>
        <input 
          key="i3"
          // ref={(inputEl)=>{this.inputElement = inputEl}}
          ref={this.inputElementRef}
          type="text" 
          onChange={this.props.changed}
          value={this.props.name} 
        />
      </Aux>
    );
  }
}

Person.PropTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
}

export default withClass(Person, classes.Person);
