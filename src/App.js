import React, {useState, useEffect} from "react";
import axios from "axios";
import "./App.css";

import Title from "./Components/Title";

const API_KEY = "2nDspnADIdxirlPW3je6OprW76gScOwSTAjzYakX";
const API_URL = "https://api.nasa.gov/planetary/apod?api_key="

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get(`${API_URL}${API_KEY}`)
      .then(({data}) => {
        setData(data);
    })
      .catch((err) => {
       console.log("err", err);
    });
  }, []);

  return (
    <div className="App">
      <h1>NASA APOD</h1>
      <Title title={data.title}/>
    </div>
  );
}

export default App;
