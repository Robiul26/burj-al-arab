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
  const [LogedInUser, setLogedInUser] = useState({});
  return (
    <UserContext.Provider value={[LogedInUser, setLogedInUser]}>
      <Router>
          <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/book/:bedType' element={
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
