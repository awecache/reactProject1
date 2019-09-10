import React,{ useEffect} from 'react';
import classes from './Cockpit.module.css';

const Cockpit = props =>{

    //useState can be use for getDerivedStateFromProps
    //[state, setState]=useState() takes in any value as argument usually an object
    //combine componentDidMount and componentDidUpdate in one effect
    
    ////only execute callback when the property in the array changes
    // useEffect(()=>{
    //   console.log('[cockpit] useEffect...');
    //   setTimeout(()=>{
    //     alert('Saved data to cloud!');
    //   },1000);
    // },[props.personsLength]);

    // // execute callback only at the beginning 
    // useEffect(()=>{
    //   console.log('[cockpit] 1st useEffect...');
    //   setTimeout(()=>{
    //     alert('Saved data to cloud!');
    //   },1000);
    // },[]);

    // execute callback only at the beginning and return when the component unmounts/ when useEffect runs for the last time
    useEffect(()=>{
      console.log('[cockpit] 1st useEffect...');
      // setTimeout(()=>{
      //   alert('Saved data to cloud!');
      // },1000);
      return ()=>{console.log('[Cockpit] cleanup work in 1st useEffect ....')}
    },[]);
    
     // not setting second argument, useEffect executes callback every time component <Cockpit> renders 
     useEffect(()=>{
      console.log('[cockpit] 2nd useEffect...');
      return ()=>{console.log('[Cockpit] cleanup work in 2nd useEffect....')}
    });

    let styleBtnClass='';
    const classesName=[];

    console.log('[Cockpit] renders...');

    if(props.personsLength<3){
      classesName.push(classes.red);
    }
    if(props.personsLength<2){
      classesName.push(classes.bold);
    }

    if(props.showPersons){
        styleBtnClass=classes.Red;     
    }
    //console.log('%%%%%'+ {...props}+'%%%%%%%%%%');
    return <div className={classes.Cockpit } >
        <h1>Hi, I'm a React App </h1>
        <p className={classesName.join(' ')} >This is really working!</p>
        <button className={styleBtnClass} 
        onClick={props.toggleHandler}> Toggle </button> 
    </div>
    
}

export default React.memo(Cockpit);