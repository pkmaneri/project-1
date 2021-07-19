import React from "react"
import { HashRouter,Route,Link } from "react-router-dom"
// import function/className from "./fileName"
import UserList from "./components/User";
import Dashboard from "./components/Home"
import ItemList from "./components/Items";
import MyProduct from "./components/Product";
import Employee from "./components/Employee";
import Billing from "./components/Billing";
import StateOne from "./components/State1";
import stateTwo from "./components/State2";
import Praveen from "./components/state3";
function App() {
  return (
    <HashRouter>
      <ul id="topNav">
        <li><Link to="/">Home</Link> </li>
        <li ><Link to="/myuser">Users</Link> </li>
        <li ><Link to="/myitem">Items</Link> </li>
        <li ><Link to="/myproduct">Product</Link> </li>
        <li ><Link to="/myemp">Employee</Link> </li>
        <li ><Link to="/mybill">Billing</Link> </li>
        <li ><Link to="/mystate">State</Link> </li>
        <li ><Link to="/mystatetwo">StateTwo</Link> </li>
        <li ><Link to="/mystatepraveen">Praveen</Link> </li>


      </ul>
      <Route exact path="/" component={Dashboard}/>
      <Route exact path="/myuser" component={UserList}/>
      <Route exact path="/myitem" component={ItemList}/>
      <Route exact path="/myproduct" component={MyProduct}/>
      <Route exact path="/myemp" component={Employee}/>
      <Route exact path="/mybill" component={Billing}/>
      <Route exact path="/mystate" component={StateOne}/>
      <Route exact path="/mystatetwo" component={stateTwo}/>
      <Route exact path="/mystatepraveen" component={Praveen}/>




    </HashRouter>
  );
}

export default App;

