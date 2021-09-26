import React from 'react';
import './Card.css'

export const Card = ({title, subtitle, image}) => {
    return (
        <div className="ContainerCard"> 
            <div className="HeaderCard"> {title} </div>
            <div className="SubTitleHeader"> {subtitle} </div>
            <div className="BodyCard"> <img src={image} /> </div>
        </div>
    )

}