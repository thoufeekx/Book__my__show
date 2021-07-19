import React from 'react'



//import navbar
import Navbar from "../components/Navbar/navbar.component";


const MovieLayout = (props) => {
    return (
        <div>
             <Navbar/>
       
        {props.children}
        </div>
    )
}

export default MovieLayout;