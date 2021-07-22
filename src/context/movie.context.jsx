import React from "react";


export const MovieContext = React.createContext();
//provider gets u funtion or data

const MovieProvider = ({children}) => {

    const [movie, setMovie] = useState({

        id:0,
        original_title:"",
        overview:"",
        backdrop_path:"",
        poster_path:"",


    });

    return (<MovieContext.Provider  
    value={{movie, setMovie}}>
        {children}


    </MovieContext.Provider>
    );
};

export default MovieProvider;