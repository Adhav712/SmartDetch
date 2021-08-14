import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css'
import SmartbrainlogoReworked1 from './SmartbrainlogoReworked1.png'


const Logo = () => {
    return(
        <div>
         <Tilt className="Tilt" options={{ max : 35,speed: 300 }} style={{ height: 185, width: 200}} >
          <div className="Tilt-inner"><img className = 'images' alt ='' src = {SmartbrainlogoReworked1}></img> </div>
         </Tilt>
        </div>
    )
}


export default Logo; 