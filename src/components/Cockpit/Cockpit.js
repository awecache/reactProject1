import React from 'react';
import classes from './Cockpit.module.css';

const cockpit= props =>{
    
    let styleBtnClass='';
    const classesName=[];

    console.log('[Cockpit] renders...');

    if(props.persons.length<3){
      classesName.push(classes.red);
    }
    if(props.persons.length<2){
      classesName.push(classes.bold);
    }

    if(props.showPersons){
        styleBtnClass=classes.Red;     
      }

    return <div className={classes.Cockpit } >
        <h1>Hi, I'm a React App </h1>
        <p className={classesName.join(' ')} >This is really working!</p>
        <button className={styleBtnClass} 
        onClick={props.toggleHandler}> Toggle </button> 
    </div>
    
}

export default cockpit;