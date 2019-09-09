import React, { Component } from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';




class App extends Component {

  constructor(props){
    super(props);
    this.state={
      persons:[
        {id:'101', name:'Max',age:28},
        {id:'102', name:'John',age:25},
        {id:'103', name:'Emily',age:21}
      ],
      showPersons:false, 
      showCockpit:true
    };
    console.log('[App] constructor...');
  }
  
  static getDerivedStateFromProps(props,state){
    console.log('[App] getDerivedStateFromProps...');
    return state;
  }

  //important
  componentDidMount(){
    console.log('[App]componentDidMount...')
  }

  //important for performance
  shouldComponentUpdate(prevProps,prevState){
    console.log('[App] shouldComponentUpdate...')
    return true;

  }

  //important
  componentDidUpdate(){
    console.log('[App] componentDidUpdate...')
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

  togglePersonsHandler=()=>{
    this.setState({showPersons:!this.state.showPersons});
  }

  toggleCockpitHandler=()=>{
    this.setState({showCockpit:!this.state.showCockpit});
  }

  render() {   
    console.log('[App] renders...');
    let persons=null;
    if(this.state.showPersons){
      persons= <Persons persons={this.state.persons}
      deleteClickHandler={this.deletePersonHandler}
      changeNameHandler={this.changeNameHandler} />;
    }

    let cockpit =<Cockpit personsLength={this.state.persons.length} 
    showPersons={this.state.showPersons} 
    toggleHandler={this.togglePersonsHandler} />;

    if(this.state.showCockpit===false){
      cockpit=null;
    }

    return (
      <div className={classes.App}>
        
        <button onClick={this.toggleCockpitHandler} > Toggle Cockpit</button>

        {cockpit}

        {persons}
      </div>    
    );
  }
}

export default App;


