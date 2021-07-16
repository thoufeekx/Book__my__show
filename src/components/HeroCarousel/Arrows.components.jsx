import React from "react";

export const NextArrow = (props) => {
  
    return(
        <>
                <div className={props.className} 
                style={{ ...props.style, backgroundColor: "blue"}} 
                onClick={props.onclick}/>
        </>
    );
};

export const PrevArrow = (props) => {

    return(
        <>
            <div className={props.className} 
                style={{ ...props.style, backgroundColor: "blue"}} 
                onClick={props.onclick}/>
        </>
    );
};