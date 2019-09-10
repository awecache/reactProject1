import React, {Component} from 'react';
import classes from './Person.module.css';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';

class Person extends Component{
    constructor(props){
        super(props);
        this.inputElementRef=React.createRef();
    }

    static contextType=AuthContext;

    componentDidMount(){
        this.inputElementRef.current.focus();
    }

    render(){
        console.log('[Person]renders...');  
        return (
            <Aux>
                
                {this.context.isAuthenticated ? <p> Logged in successfully! </p>: <p> Logged out successfully! </p>}
                

                <p onClick={this.props.click}>
                    I'm {this.props.name} and I am {this.props.age} years old! 
                </p>

                <input onChange={this.props.changeName} 
                value={this.props.name}
                ref={this.inputElementRef}
                // ref={inputElRef=> {this.inputElementRef=inputElRef} } 
                />
               
            </Aux>
        );
    }
     
}

Person.propTypes={
    name: PropTypes.string,
    age: PropTypes.number,
    changeName: PropTypes.func,
    
}

export default withClass(Person, classes.Person);


