import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { id: 'asdf', name: 'Max', age: 28 },
      { id: 'zxcv', name: 'Éric', age: 41 },
      { id: 'erty', name: 'Javier', age: 56 }
    ],
    otherState: 'Some other value',
    showPersons: false
  }

  nameChangeHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p => {
      return p.userId === id;
    })

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons})
  }

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons;
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {

    const style = {
      backgroundColor: 'green',
      font: 'inherit',
      color: 'white',
      border: '2px solid black',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
      <div>
      {this.state.persons.map((person, index) => {
        return <Person
          click={() => this.deletePersonHandler(index)}
          name={person.name}
          age={person.age}
          key={person.id}
          changed={event => this.nameChangeHandler(event, person.id)}
          />
      })

      }
      </div>
      )
      style.backgroundColor = 'red';
    }

    let classes = [];

    if (this.state.persons.length <= 2) {
      classes.push('red');
    }

    if (this.state.persons.length <= 1) {
      classes.push('bold');
      console.log(classes)
    }

    return (
      <div className="App">
        <h1>Hi, I'm a react app</h1>
        <p className={classes.join(' ')}>Hi, I'm a react App!!!</p>
        <button
        style={style}
        onClick={this.togglePersonsHandler}>Switch name</button>
        {persons}
      </div>
      // React.createElement('div', null, React.createElement( 'h1', {className: 'App'}, 'Hi, I\'m a react App!!!'))
    );
  }
}

export default App;

// <Person
//   name={this.state.persons[0].name}
//   age={this.state.persons[0].age} >My Hobbies: Raccing</Person>
// <Person
//   name={this.state.persons[1].name}
//   age={this.state.persons[1].age}
//   click={this.switchNameHandler.bind(this, 'Max!')}
//   changed={this.nameChangeHandler} />
// <Person
//   name={this.state.persons[2].name}
//   age={this.state.persons[2].age} />

