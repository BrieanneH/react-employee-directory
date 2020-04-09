import React from "react";
import CardContext from "../../utils/CardContext";
import CardTitle from "../CardTitle";
import "./style.css";

function Card(){
    return (
        <CardContext.Consumer>
        {({ image, handleBtnClick })} => (
            <div
                className="card"
                style={{
                    backgroundImage: image ? `url(${image})` : "none"
                }}
            >
                <CardTitle />
                {!image && < i className= "fa fa-spinner fa-spin" aria-hideen="true" />}
                <CardBtn style = {{}} onClick={handleBtnClick} data-value="back" />
                <CardBtn style = {{}} onClick={handleBtnClick} data-value="next" />
                </div>
            )}
    
            </CardContext.Consumer>
     );     
}
 export default Card;
