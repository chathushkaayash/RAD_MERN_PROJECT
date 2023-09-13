
import {Route, Routes} from "react-router-dom";
import { UserContextProvider } from "./context/UserContext";





const App = () => {
  return (
    
      <Routes>
        <Route exact path = "/" element= {<Home />} />
        
        
      </Routes>
      
      
   
  );
}

export default App;