import React from "react";

function Col(props) {
    const size = props.size
    .split("")
    .map(sixe => "col-" + size)
    .join("");

    return < div className = {size} {...props} />;

}

export default Col;