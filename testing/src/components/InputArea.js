import React, {useState} from "react";

function InputArea(){
    const [name, setName] = useState(""); 
    return(
        <p>
            <input onChange={(e) => setName(e.target.value)}></input>
            <p>{name}</p>
        </p>
    )
};

export default InputArea;