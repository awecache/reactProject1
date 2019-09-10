import React from 'react';

//get a functional component and return a functional component
const withClass=(WrappedComponent, className)=>{
    return props=>{
        //console.log('{...PROPS}')
        //console.log({...props});// spread out the contents of props and create a clone of props
        //console.log('PROPS')
        //console.log(props);// props
        //why does spread {...props } work in this case?
        return (
            <div className={className} > 
                <WrappedComponent {...props} /> 
            </div>
        )
    }
}
export default withClass;