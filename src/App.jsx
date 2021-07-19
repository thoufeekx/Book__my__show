import { Route } from "react-router-dom";

//import ho
import MovieHOC from "./HOC/Movie.HOC";

import DefaultHOC from "./HOC/Default.HOC";

//import homepage
import HomePage from "./Pages/Home.page";


//css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Movie from "./Pages/Movie.page";
//mport movie



function App() {
 /* return ( <div className="App">
    
   
   </div>
  );
  */

return (
  <>
 <DefaultHOC path="/" exact component={HomePage}/>
 <MovieHOC path="/movie/:id" export component={Movie}/>
  </>
  );
}
  
export default App;
