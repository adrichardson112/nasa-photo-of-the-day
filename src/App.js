import React, {useState, useEffect} from "react";
import axios from "axios";
import "./App.css";
import PhotoGrid from "./Components/PhotoGrid";


function App() {
  return (
    <div className="App">
      <h1>NASA Astronomy Photo Of The Day</h1>
      <PhotoGrid />
    </div>
  );
}

export default App;
