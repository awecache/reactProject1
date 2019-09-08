import React from 'react';
import Person from './Person/Person';

const persons=props=>{
    return props.persons.map((person,index)=>{
      return <Person 
        name={person.name} 
        age={person.age} 
        key={person.id} 
        click={props.deleteClickHandler.bind(this,index)}
        changeName={(event)=>props.changeNameHandler(person.id,event)}   
    />});};

export default persons;




    
    
