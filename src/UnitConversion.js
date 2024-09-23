import React from "react";

export default function UnitConversion(props) { 
     return (
            <div className="unitConversion">
                <span className="temperature">{Math.round(props.celsius)} </span>
                <span className="unit"> °C                 
                </span>
            </div>
        );
    } 