import React from 'react';
import "./ImageLinkform.css"
import 'tachyons';

const ImageLinkForm = () => {
    return(
        <div>
          <p className = 'f3'>
              Username,you are ranked #num
          </p>
          <div className = 'center'>
           <div className =' form center pa4 br3 shadow-5'>
            <input type ="text" name='url' className = ' f4 pa2 w-80 center'></input>
            <button className = 'w-20 grow f4 link ph3 pv2 dib white'>Detch</button>
            </div> 
          </div>  
        </div>
    )
}


export default ImageLinkForm; 