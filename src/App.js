import React, {useState, useEffect} from "react";
import axios from "axios";
import "./App.css";
import PhotoGrid from "./Components/PhotoGrid";
import styled from "styled-components";


const BasicH1 = styled.h1`
color: Hotpink;
height: 10vh;
margin: 40vh 0;
`

function App() {
  return (
    <div className="App">
      <BasicH1>NASA Astronomy Photo Of The Day</BasicH1>
      <PhotoGrid />
    </div>
  );
}

export default App;
