import React, {PureComponent} from 'react';
import Person from './Person/Person';

class Persons extends PureComponent{
  state={};  
  static getDerivedStateFromProps(props, state){
      console.log('[Persons] getDerivedStateFromProps...');
      return state;
    }

    // //use PureComponent to check all props before updating
    // shouldComponentUpdate(nextProps,nextState){
    //   console.log('[Persons] shouldComponentUpdate... ');
    //   if(this.props.persons!==nextProps.persons || 
    //     this.props.deleteClickHandler!==nextProps.deleteClickHandler || 
    //     this.props.changeNameHandler!==nextProps.changeNameHandler){
    //     return true;
    //   } else{
    //     return false;
    //   }   
    // }

    getSnapshotBeforeUpdate(prevProps,prevState){
      console.log('[Perosns] getSnapshotBeforeUpdate... ');
      return {message: 'Snapshot before update'}
    }

    componentDidUpdate(prevProps,prevState,snapshot){
      console.log(`[Persons] componentDidUpdate: ${snapshot.message}...`)

    }

    //typically for clean up work 
    componentWillUnmount(){
      console.log('[Persons] componentWillUnmount...'); 
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
        // isAuthenticated={this.props.isAuthenticated}   
    />});};
}

export default Persons;




    
    
