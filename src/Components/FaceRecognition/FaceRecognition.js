import React from 'react';
import './FaceRecognition.css' 

const FaceRecogniition = ({imageUrl}) => {
	return (
		<div className = 'center ma'>
		  <div className ="absolute mt2 face ">
	       <img alt ='something goes wrong' src = {imageUrl} width = '500px' height = 'auto'/>	
	     </div> 	
		</div>
	);
}

export default FaceRecogniition;