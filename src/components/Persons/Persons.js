import React from 'react';
import Person from './Person/Person';

const persons = (props) => (
props.person.map((person, index) => {
            return (
              <Person
                click={() => props.clicked(index)}
                changed={(event) => props.changed(event, person.id)}
                name={person.name}
                age={person.age}
                key={person.id}
              />
            );
          })
);

export default persons;