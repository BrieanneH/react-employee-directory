import React from "react";
import "../style.css";

function employeeSearch(props){
    return (
        <form className="search">
            <div className="search-group">
                <input className="searchBar" type="text" onChange={props.eSearch}/>
            </div>
        </form>

    )
}

export default employeeSearch;