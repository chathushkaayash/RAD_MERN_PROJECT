
import {Route, Routes} from "react-router-dom";
import { UserContextProvider } from "./context/UserContext";





const App = () => {
  return (
    
      <Routes>
        <Route exact path = "/" element= {<Home />} />
        <Route exact path ="/login" element={<Login/>} />
        <Route exact path ="/register" element={<Register/>} />
        <Route exact path ="/write" element={<CreatePost/>} />
        <Route exact path ="/posts/post/:id" element={<PostDetails/>} />
        <Route exact path ="/edit/:id" element={<EditPost/>} />
        <Route exact path ="/profile/:id" element={<Profile/>} />
        
        
      </Routes>
      
      
   
  );
}

export default App;