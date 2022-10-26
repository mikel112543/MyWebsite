import React from 'react'
import {Card} from "react-bootstrap";
import './MyProjectCard.css';

//COLOR GRADIENTS

//"linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
//"linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
//"linear-gradient(to right, #009245 0%, #FCEE21 100%)"
// linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);

const MyProjectCard = ({title, description, href, bg, img}) => {
    return (
        <Card className={'card'} style={{background: bg}} onClick={(e) => {
            e.preventDefault();
            window.open(href, '_blank', 'noopener,noreferrer')
        }}>
            <Card.Img className={"card-image"} variant="top" src={img}/>
            <Card.Body>
                <Card.Title className={"card-title"}>{title}</Card.Title>
                <Card.Text className={"card-text"}>
                    {description}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default MyProjectCard