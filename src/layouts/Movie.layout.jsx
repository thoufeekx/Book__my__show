import React, {useEffect, useContext} from 'react';


import {useParams } from "react-router-dom";
import MovieNavbar from '../components/Navbar/movieNavbar.component';

import {MovieContext} from "../context/movie.context"

//import navbar
//import Navbar from "../components/Navbar/navbar.component";


const MovieLayout = (props) => {

        const {id} = useParams();

    return (
        <div>
             <MovieNavbar/>
       
        {props.children}
        </div>
    )
}

export default MovieLayout;