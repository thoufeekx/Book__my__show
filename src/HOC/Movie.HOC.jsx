import React from "react";
import {Route} from "react-router-dom";


//layout import
import MovieLayout from "../layouts/Movie.layout";

const MovieHOC = ({ component: Component, ...rest }) => {
    /*return(
     <div></div>


    ); */

    return (
        
    <>
    
    <Route {...rest} 
    component={(props) => (
    <MovieLayout>
        <Component {...props}/>
    </MovieLayout> 
    
    )}  />
    
    </>
    );
};

export default MovieHOC;