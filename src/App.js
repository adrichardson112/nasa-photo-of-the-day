import React, {useState, useEffect} from "react";
import axios from "axios";
import "./App.css";

const API_KEY = "2nDspnADIdxirlPW3je6OprW76gScOwSTAjzYakX";
const API_URL = "https://api.nasa.gov/planetary/apod?api_key="

function App() {
  const [data, setData] = useState();


  return (
    <div className="App">
      <h1>NASA APOD</h1>
    </div>
  );
}

export default App;
