import React, {useState, useEffect} from 'react';
import axios from 'axios'
import "./App.css";
import PhotoGrid from './Components/PhotoGrid';
import PhotoCard from './Components/PhotoCard';



function App() {
  const [img, setImg] = useState("")
  const [date, setDate] = useState('');
  
useEffect(() => {
  axios
    .get(`https://api.nasa.gov/planetary/apod?api_key=2nDspnADIdxirlPW3je6OprW76gScOwSTAjzYakX&date=${date}`)
    .then((response) => {
      setImg(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
}, [date]);

const eventHandler = (event) => {
  setDate(event.target.value)
}
return (
    <div className="App">
      <h1>NASA Astronomy Photo Of The Day</h1>
    <div className="calendar">
      <p>View other dates for more photos!</p>
       <input type='date' onChange={eventHandler} placeholder="yyyy-mm-dd"></input>
    </div>
    <PhotoCard
        key={img.id}
        title={img.title}
        date={img.date}
        explanation={img.explanation}
        copyright={img.copyright}
        imgUrl={img.url}
      />
    </div>
  );
}

export default App;
