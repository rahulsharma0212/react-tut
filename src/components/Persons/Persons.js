import React ,{Component}from 'react';
import Person from './Person/Person';


class Persons extends Component{
 /*  static getDerivedStateFromProps(props,state){
    console.log('[persons.js] getDerivedStateFromProps');
    return state;
  } */

  /* componentWillReceiveProps(props){ // depreceated
    console.log('[persons.js] componentWillReceiveProps')
  } */

  shouldComponentUpdate(nextProps,nextState){
    console.log('[persons.js] shouldComponentUpdate');
    return true; // it must return true or false
  }

  getSnapshotBeforeUpdate(prevProps,prevState){
    console.log('[persons.js] getSnapshotBeforeUpdate');
    return null;
  }
  componentDidMount(){
    console.log('[persons.js] componentDidMount');
  }

  componentDidUpdate(){
    console.log('[persons.js] componentDidUpdate');
  }

    componentWillUnmount(){
    console.log('[persons.js] componentWillUnmount');
  }

  render(){
console.log('[Persons.js] rendering...')
return this.props.person.map((person, index) => {
            return (
              <Person
                click={() => this.props.clicked(index)}
                changed={(event) => this.props.changed(event, person.id)}
                name={person.name}
                age={person.age}
                key={person.id}
              />
            );
          })}
};

export default Persons;