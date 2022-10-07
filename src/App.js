
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";


function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path={'/'} component={Home}/>
            <Route path={'/login'} component={Login}/>
            <Route path={'/sign-up'} component={SignUp}/>
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
