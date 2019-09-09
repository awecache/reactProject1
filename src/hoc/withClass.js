import React from 'react';

//get a functional component and return a functional component
const withClass=(WrappedComponent, className)=>{
    return props=>(
        <div className={className} > 
            <WrappedComponent /> 
        </div>
    )
}
export default withClass;