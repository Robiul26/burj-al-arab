import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Book from "./components/Book/Book";
import { createContext, useState } from "react";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
export const UserContext = createContext();
function App() {
  const [LoogedInUser, setLogedInUser] = useState({});
  return (
    <UserContext.Provider value={[LoogedInUser, setLogedInUser]}>
      <Router>
          <Header/>
        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/book' element={
            <PrivateRoute>
              <Book/>
            </PrivateRoute>          
          }/>
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
