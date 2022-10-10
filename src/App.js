import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import Navbar from "./Components/Navbar";
import {useAuthContext} from "./hooks/useAuthContext";


function App() {
    const { authIsReady } = useAuthContext()
  return (

    <div className="App">
        {authIsReady && (
        <BrowserRouter>
            <Navbar/>
          <Switch>
            <Route exact  path={'/'} component={Home}/>
            <Route path={'/login'} component={Login}/>
            <Route path={'/signup'} component={SignUp}/>
          </Switch>
        </BrowserRouter>
        )}
    </div>
  );
}

export default App;
