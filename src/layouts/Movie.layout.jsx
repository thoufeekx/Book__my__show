import React from 'react'
import MovieNavbar from '../components/Navbar/movieNavbar.component';



//import navbar
//import Navbar from "../components/Navbar/navbar.component";


const MovieLayout = (props) => {
    return (
        <div>
             <MovieNavbar/>
       
        {props.children}
        </div>
    )
}

export default MovieLayout;