import React, {Component} from 'react';
import Person from './Person/Person';

class Persons extends Component{
  state={};  
  static getDerivedStateFromProps(props, state){
      console.log('[Persons] getDerivedStateFromProps...');
      return state;
    }

    shouldComponentUpdate(nextProps,nextState){
      console.log('[Persons] shouldComponentUpdate... ');
      return true;
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
      console.log('[Perosns] getSnapshotBeforeUpdate... ');
      return {message: 'Snapshot before update'}
    }

    componentDidUpdate(prevProps,prevState,snapshot){
      console.log(`[Persons] componentDidUpdate: ${snapshot.message}...`)

    }

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




    
    
