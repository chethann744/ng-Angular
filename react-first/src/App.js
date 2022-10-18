// import logo from './logo.svg';
import './App.css';
import nature from './images/nature.jpg'

function App() {



  let myTitle = "Welcome to react js learning camp";



  return (

    <>

      <header>

        <img src={nature} alt="image not found" width="100%" height="200" ></img>

        {/* this is calling of function component of react js  */}

        <contact></contact>

      </header>

      <div className="thbs-text">

        <h2>{myTitle}</h2>

        <contact></contact>

      </div>

    </>

  );

}

export default App;
