import React from "react";
import styled from "styled-components";

const BlackH2 = styled.h2`
    padding: 40px 0 30px o;
`

const SpacedText = styled.div`
    text-align: left;
    width: 85%;
    margin: auto;
    padding: 20px 0 30px 0;
`

const ImgContainer = styled.img`
        width: 95%;
        height: auto;
        margin: auto;
`

const SpaceImg = styled.img`
        width: 95%;
`



function PhotoCard (props) {
    return (
        <div className="photoCard">
            <BlackH2>{props.title}</BlackH2>
            <ImgContainer>
                <SpaceImg src={props.url} alt={props.title}></SpaceImg>
            </ImgContainer>
            <SpacedText className="written">
            <p>Date: {props.date}</p>
            <p>{props.explanation}</p>
        </SpacedText>
    </div>
    );
};

export default PhotoCard;