/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import ComponenteC from "./ComponenteC";

const ComponenteA = ({emoji,titulo}) => {
    return (
        <div className="container">
            <ComponenteC emoji={emoji}/>
            <div><p>{titulo}</p></div>
        </div>
    );
}

export default ComponenteA;