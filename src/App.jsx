//import { Route } from "react-router-dom";
import axios from "axios";

//import ho
import MovieHOC from "./HOC/Movie.HOC";

import DefaultHOC from "./HOC/Default.HOC";

//import homepage
import HomePage from "./Pages/Home.page";


//css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Movie from "./Pages/Movie.page";
//import plays from pages
import Plays from "./Pages/Plays.pages";
//mport movie

//axios default settings
axios.defaults.baseURL= "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;


function App() {
 /* return ( <div className="App">
    
   
   </div>
  );
  */

return (
  <>
 <DefaultHOC path="/" exact component={HomePage}/>
 <MovieHOC path="/movie/:id" export component={Movie}/>
 <DefaultHOC path="/plays" exact component={Plays}/>
  </>
  );
}
  
export default App;
