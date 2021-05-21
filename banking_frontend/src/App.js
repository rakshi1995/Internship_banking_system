import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Pages/Home";
import list from "./Components/Pages/list.js";
import transfer from "./Components/Pages/transfer.js";
import "./Components/App.css";
import TransactionHistory from './Components/Pages/TransactionHistory';
 
function App() {
return (
  <div className='App'>
     <Router>
        <Navbar/> 
        
         <Switch>
          <Route path="/" exact component={Home} />
          
          <Route path="/list" exact component={list} />
          <Route path="/transfer" exact component={transfer} />
          <Route path="/transaction-history" exact component={TransactionHistory} />
        </Switch>
      </Router>
  
    </div>
  );
}

export default App;