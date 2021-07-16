import { Route } from "react-router-dom";

//import hoc

import DefaultHOC from "./HOC/Default.HOC";

//import homepage
import HomePage from "./Pages/Home.page";


//css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {
 /* return ( <div className="App">
    
   
   </div>
  );
  */

return (
  <>
 <DefaultHOC path="/" exact component={HomePage}/>
  </>
  );
}
  
export default App;
