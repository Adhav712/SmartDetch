import React from 'react';
import './Signout.css';


const Signout = ({onRouteChange, isSignedIn}) => {
      
        if(isSignedIn){
        return(
            <nav style = {{display:'flex',justifyContent: 'flex-end'}} >
                <p onClick =  {() => onRouteChange('SignIn')} className='f3 link dim black underline pa3 pointer'> Sign Out</p>
            </nav>
        )    
        } else{
            return(
            <nav style = {{display:'flex',justifyContent: 'flex-end'}} >
                <p onClick =  {() => onRouteChange("SignIn")} className='f3 link dim black underline pa3 pointer'> Sign In</p>
                <p onClick =  {() => onRouteChange('Register')} className='f3 link dim black underline pa3 pointer'> Register</p>
            </nav>
                )
        }
        // else{
        //     return(
        //     <nav style = {{display:'flex',justifyContent: 'flex-end'}} >
        //         <p onClick =  {() => onRouteChange('Register')} className='f3 link dim black underline pa3 pointer'> Sign Out</p>
        //     </nav>
        // ) 
        // }
}


export default Signout; 