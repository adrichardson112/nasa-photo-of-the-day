import React, { useState, useEffect } from "react";
import PhotoCard from "./PhotoCard";
import axios from "axios";

const API_KEY = "2nDspnADIdxirlPW3je6OprW76gScOwSTAjzYakX";
const API_URL = "https://api.nasa.gov/planetary/apod?api_key="

function PhotoGrid() {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        axios.get(`${API_URL}${API_KEY}`)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(`An error occured: ${error}`);
            });
    }, []);

    return (
        <div className="photos">
            
        </div>
    )
}

export default PhotoGrid;