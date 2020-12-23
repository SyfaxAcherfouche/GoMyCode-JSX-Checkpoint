import './App.css';
import React from 'react';
import myImage from "./imageInSrc.jpg"
function App() {
  return ( <div className="App">
            <Images />
            <Vidéo />
          </div>
  );
}

const Images = () => {
  const firstName = 'Syfax';
  const lastName = 'ACHERFOUCHE'

  return (<div style={{border:"solid 1px black", maxWidth:"100vw"}}>
            <h1 className="title red">{firstName + " " + lastName} </h1>
            <br></br>
            <img className="img" src={myImage} ></img>
            <br></br>
            <img className="img" src="/imageInPublic.jpg" ></img>
          </div>)
}
const Vidéo = () => {
  return ( <video width="320" height="240" controls>

  <source src="myVideo.mp4" type="video/mp4"></source>

</video>)
}
export default App;
