import React from "react";
import styled from 'styled-components';


const StyledCard = styled.div`

color: pink;
font-family: 'Kelly Slab', cursive;

.img-container img{
    width: 50%;
    margin: 4%;
    margin-bottom: 2%;
    border:4px blue solid;

}

.explanation{
    margin: 2%;
    margin-left: 20%;
    padding: 2%;
    width: 50%;
    font-size: 1rem;
    text-align: center;
    border: 2px black solid;

}

h2{
    font-size: 3rem;
    margin: 3%;
}

h3{
    font-size: 1rem;
}

`

const PhotoCard = ({ copyright, date, explanation, title, imgUrl }) => {
    return (
        <StyledCard className= 'card'>

            <div className='titleDate'>
                <h2 className='title'>{title}</h2>
                <h3 className='date'>{date}</h3>
                <div className='image-container'>
                <img className='image' alt= 'nasa photo' src={imgUrl}/>
            </div>
            <div className='info'>
                <p className='explanation'>{explanation}</p>
            <p className='copyright'>{copyright}</p>
            </div>
            </div>
        </StyledCard>
    );
};

export default PhotoCard 