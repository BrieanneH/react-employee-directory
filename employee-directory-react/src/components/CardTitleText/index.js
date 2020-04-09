import React from "react";
import CardContext from "../..utils/CardContext";

function CardTitleText(){
    return <CardContext.Consumer>
        {({ title })} => 
        <h3>{title}</h3>

    </CardContext.Consumer>;
}
export default CardTitleText;