import React from "react";
import Navbar from "./component/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./component/App.css";
import HeroSection from "./component/HeroSection";
import Home from "./component/home";
import Services from "./component/Pages/Services";
import SignUp from "./component/Pages/SignUp";
import Products from "./component/Pages/Products";

function App() {
    return (
      <>
        <Router>
          <Navbar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/services' component={Services} />
            <Route path='/products' component={Products} />
            <Route path='/sign-up' component={SignUp} />
          </Switch>
        </Router>
      </>
    );
  }
  
  export default App;
  