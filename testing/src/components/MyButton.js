import React, {useState} from "react";

function Mybutton() {
    const [clicks, onClick ] = useState(0);
    return (
        <p> 
            <button type ="button" onClick={() => onClick(clicks+1) }>Add 1</button>
            <p> Clicks: {clicks}</p>
        </p>
    )
};

export default Mybutton;