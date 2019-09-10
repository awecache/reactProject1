import React, {Component} from 'react';
import classes from './Person.module.css';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';
import PropTypes from 'prop-types';


class Person extends Component{

    render(){
        console.log('[Person]renders...');  
        return (
            <Aux>

                <p onClick={this.props.click}>
                    I'm {this.props.name} and I am {this.props.age} years old! 
                </p>

                <input onChange={this.props.changeName} 
                value={this.props.name}/>
               
            </Aux>
        );
    }
     
}

Person.propTypes={
    name: PropTypes.func,
    age: PropTypes.number,
    changeName: PropTypes.func,
    
}

export default withClass(Person, classes.Person);


