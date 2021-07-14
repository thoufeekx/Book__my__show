import { Route } from "react-router-dom";

//import hoc

import DefaultHOC from "./HOC/Default.HOC";

//import Temp
import temp from "./components/temp"

function App() {
 /* return ( <div className="App">
    
   
   </div>
  );
  */

return (
  <>
 <DefaultHOC path="/" exact component={temp}/>
  </>
  );
}
  
export default App;
