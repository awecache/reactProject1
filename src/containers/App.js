import React, { Component } from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';


class App extends Component {
  state={
    persons:[
      {id:'101', name:'Max',age:28},
      {id:'102', name:'John',age:25},
      {id:'103', name:'Emily',age:21}
    ],
    showPersons:false 
  }

  deletePersonHandler=(personIndex)=>{
    //const persons=this.state.persons.slice();
    const persons=[...this.state.persons];//new syntax
    persons.splice(personIndex,1);
    this.setState({persons:persons});
  }

  changeNameHandler=(id,event)=>{
    const persons=[...this.state.persons];
    const index=persons.findIndex(el=>el.id===id);
    persons[index].name=event.target.value;
    this.setState({persons:persons});
  }

  toggleHandler=()=>{
    this.setState({showPersons:!this.state.showPersons});
  }

  render() {   
    
    let persons=null;
    if(this.state.showPersons){
      persons= <Persons persons={this.state.persons}
      deleteClickHandler={this.deletePersonHandler}
      changeNameHandler={this.changeNameHandler} />;
        
      
    }

    return (
      <div className={classes.App}>
        <Cockpit persons={this.state.persons} 
        showPersons={this.state.showPersons} 
        toggleHandler={this.toggleHandler} />

        {persons}
      </div>
      
    );
  }
}

export default App;


