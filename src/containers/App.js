import React, { Component } from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';

//import Radium, {StyleRoot} from 'radium';

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
    let styleBtnClass='';
    const classesName=[];

    if(this.state.showPersons){
      persons= <Persons persons={this.state.persons}
      deleteClickHandler={this.deletePersonHandler}
      changeNameHandler={this.changeNameHandler} />;
        
      styleBtnClass=classes.Red;
    }

    if(this.state.persons.length<3){
      classesName.push(classes.red);
    }
    if(this.state.persons.length<2){
      classesName.push(classes.bold);
    }

    return (
      <div className={classes.App}>
        <h1>Hi, I'm a React App </h1>
        <p className={classesName.join(' ')} >This is really working!</p>
        <button className={styleBtnClass} onClick={this.toggleHandler}>Toggle </button> 
        {persons}
      </div>
      
    );
  }
}

export default App;


