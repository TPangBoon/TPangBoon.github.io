import React from 'react';
import { Colors } from '../../theme/Colors/Colors';
import '../../theme/Typography/Typography.css';



const cardStyle = {
    backgroundColor: Colors.white,
    color: Colors.primary,
    width:"15%",
    textAlign:"left",
    lineHeight:"50px",
};
const textStyle = {
    fontSize:"16px",
    lineHeight:"20px",
    margin:"10px"

};
const HeadStyle = {
    fontSize:"24px",
    lineHeight:"20px",
    margin:"10px"
};



function CardNoMUI(props) {
    return (
        <>
            <div style={cardStyle}>
                <img alt="" src={props.Image} />
                <h5 style={HeadStyle}> {props.Title} </h5>
                <p style={textStyle} >  {props.paragraph} </p>
                <a href="#!">See more</a>
            </div>
        </>
    );
}
export default CardNoMUI;