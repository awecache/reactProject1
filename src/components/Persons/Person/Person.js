import React, {Component} from 'react';
import classes from './Person.module.css';
//import Radium from 'radium';

class Person extends Component{
    render(){
        console.log('[Person]renders...');  
        return (
            <div className={classes.Person} >
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old! </p>
                <input onChange={this.props.changeName} value={this.props.name}/>
                <p>{this.props.children} </p>
            </div>
        )
    }
     
    };

export default Person;