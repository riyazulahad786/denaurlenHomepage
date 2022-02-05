import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Homepage from './components/home/homepage';
//import Login from './components/login/login';

//import signup from "./components/Signup/signup";
//import signin from "./components/Signup/signin";
import signin from './components/Signup/signup';
import signup from './components/Signup/signin';




function App() {
  return (
    <>
      
     <Homepage/>
     
      
      
    </>
  );
}

export default App;


/*
 <Router>
        <Switch>
        
        <Route exact path="/" component={signin} />

          <Route exact path="/signup" component={signup} />
        </Switch>
      </Router>

      */