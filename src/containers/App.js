import React, { Component } from 'react';
import classes from './App.module.css';
import Person from '../components/Persons/Person/Person';

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

  
  // swichNameHandler=(newName)=>{
  //   //this.state.persons[0].name='William';
  //   this.setState({
  //     persons:[
  //       {name:newName,age:28},
  //       {name:'John',age:25},
  //       {name:'Emily',age:21}
  //     ]
  //   })
  // }

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

  // // event is the parameter of the wrapper function around eventHandler. event parameter is set to apple this the following code
  // changeNameHandler= apple=>{
  //     const newState=this.state;//not recommended to mutate the original state data directly
  //     newState.persons[1]['name']=apple.target.value;
  //     //this.state.persons[0].name='William';
  //     this.setState(newState)
    //this.setState(
      // {
      //   persons:[
      //     {name:'Max',age:28},
      //     {name:event.target.value,age:25},
      //     {name:'Emily',age:21}
      //   ]
        
      // }
    //)
  //}

  toggleHandler=()=>{
    this.setState({showPersons:!this.state.showPersons});

  }

  render() {
    // let style={
    // backgroundColor:'green',
    // color:'white',
    // font:'inherit',
    // border:'1px solid blue',
    // padding:'8px',
    // cursor:'pointer'
    // }

    let persons=null;
    let styleBtnClass='';

    if(this.state.showPersons){
      persons= (<div>
        {this.state.persons.map((person,index)=>{
          return(<Person 
            name={person.name} 
            age={person.age} 
            key={person.id} 
            click={this.deletePersonHandler.bind(this,index)}
            //changeName={this.changeNameHandler.bind(this,person.id)}   //using bind event arg is automatically added as the second arg 
            changeName={(event)=>this.changeNameHandler(person.id,event)}   //using error func need to enter event manually as arg
            />)
        })}
          {/* <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age} click={this.swichNameHandler.bind(this,'Sam')} changeName={this.changeNameHandler}/>
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age}> My Hobbies: Racing </Person> */}
      </div> );
      styleBtnClass=classes.Red
      // style.backgroundColor='red';
      // style[':hover']={
      //   backgroundColor:'pink',
      //   color: 'black'
      // }
    }

    const classesName=[];
    if(this.state.persons.length<3){
      classes.push(classes.red);
    }
    if(this.state.persons.length<2){
      classes.push(classes.bold);
    }

    return (
      
      <div className={classes.App}>
        <h1>Hi, I'm a React App </h1>
        <p className={classesName.join(' ')} >This is really working!</p>
        {/* <button style={style} onClick={this.swichNameHandler.bind(this,'William')}>Switch Name</button>   */}
        <button className={styleBtnClass} onClick={this.toggleHandler}>Toggle </button> 
        {persons}
          
      </div>
      
    );
  }
}

export default App;


//// react Hooks
// import React, { useState } from 'react';
// import './App.css';
// import Person from './Person/Person';

// let app= props =>{

//   const [personsState,setPersonsState]=useState(
//     {
//       persons:[
//         {name:'Max',age:28},
//         {name:'John',age:25},
//         {name:'Emily',age:21}
//       ]
//     }
//   )

//   const [otherState, setOtherState]=useState({
//     otherState:'some other states'

//   })

//   console.log(personsState, otherState)
  
//   const swichNameHandler=()=>{
//     //this.state.persons[0].name='William';
//     setPersonsState({
//       persons:[
//         {name:'William',age:28},
//         {name:'John',age:25},
//         {name:'Emily',age:21}
//       ]
//     })
//   }

  
    
//     return (
//       <div className="App">
//         <h1>Hi, I'm a React App </h1>
//         <p>This is really working!</p>
//         <button onClick={swichNameHandler}>Switch Name</button>
//         <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
//         <Person name={personsState.persons[1].name} age={personsState.persons[1].age}/>
//         <Person name={personsState.persons[2].name} age={personsState.persons[2].age}> My Hobbies: Racing </Person>
//       </div>
//     );
  
// }

// export default app;

