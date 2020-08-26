import React, {useState, useEffect} from "react";
import axios from "axios";
import "./App.css";

import PhotoGrid from "./Components/PhotoGrid";

const API_KEY = "2nDspnADIdxirlPW3je6OprW76gScOwSTAjzYakX";
const API_URL = "https://api.nasa.gov/planetary/apod?api_key="

function App() {
  return (
    <div className="App">
      <h1>NASA Astronomy Photo Of The Day</h1>
      <PhotoGrid />
    </div>
  );
}

export default App;
