import React, {Component} from 'react';
import Person from './Person/Person';

class Persons extends Component{
  render(){
    console.log('[Persons] renders...')
    return this.props.persons.map((person,index)=>{
      return <Person 
        name={person.name} 
        age={person.age} 
        key={person.id} 
        click={this.props.deleteClickHandler.bind(this,index)}
        changeName={(event)=>this.props.changeNameHandler(person.id,event)}   
    />});};
}

export default Persons;




    
    
