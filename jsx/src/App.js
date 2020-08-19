import React from 'react';
import './App.css';
import image2 from "./image2.png";
import "./style.css"
function App() {
  return (
    <div className="App">
    <div style={{border:'solid 1px black',maxwidth:'100px',}}>  
 
      <h1 className="title">Your name here</h1>  

              

        <img src={image2} /> 

          <img src="/imgpub.jpg" />  

</div>  

<video width="320" height="240" controls />  

  <source src='./src/videonat.mp4' type="video/mp4" /> 

    </div>
  );
}

export default App;
