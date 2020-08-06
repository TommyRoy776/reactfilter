import React from "react";

function Card(props){
    console.log(props);
    return(
        <div>
            <h3>{props.id}</h3>
            <p>{props.text}</p>
        </div>

    )
}

export default Card;