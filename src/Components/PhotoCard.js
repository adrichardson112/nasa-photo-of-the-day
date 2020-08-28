import React from "react";
import styled from "styled-components";

const PhotoCard = ({ props } => {
    return (
        <Col md="3" lg="3">
            <Card style={StyleS.card}>
                <CardBody>
                    <CardTitle>Photo Title: {props.title}/CardTitle></CardTitle>
                    <CardText>{props.explanation}</CardText>
                    <CardText>{props.props.release-date</CardText>
                    <Button style={styles.button} color ="primary">Watch!ad</Button>
                </CardBody>
            </Card>
        </Col>
    )
})


function PhotoCard (props) {
    return (
        <div className="photoCard">
            <h2>{props.title}</h2>
            <ImgContainer>
                <SpaceImg src={props.url} alt={props.title}></SpaceImg>
            </ImgContainer>
            <div className="written">
            <p>Date: {props.date}</p>
            <p>{props.explanation}</p>
        </div>
    </div>
    );
};

export default PhotoCard;