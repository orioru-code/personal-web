import React from "react";
import Admin from "./pages/Admin";
import SignIn from "./pages/Admin/SignIn";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import "./App.scss";

function App() {
  return (
    //Envolvemos la app en el sistema de rutas
    <div>
      <h1>Estamos en App.js</h1>
      <Admin></Admin>
      <SignIn></SignIn>
      <Home></Home>
      <Contact></Contact>
    </div>
  );
}

export default App;
{
  /*
function Home() {
  return <h2>Estamos en el componente home</h2>;
}

function Contact() {
  return <h2>Estamos en el componente contact</h2>;
}

function Users() {
  return <h2>Estamos en el componente users</h2>;
}

function Error404() {
  return <h2>Error 404</h2>;
}




  /*import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";} */
  /*<Router>
  <div className="app">
    <h1>Sistema de rutas básico</h1>

    <Link to="/">Home</Link>
    <br></br>
    <Link to="/contact">Contact</Link>
    <br></br>
    <Link to="/users">Users</Link>
    <br></br>
    {/*Switch envuelve el router para poder poner el error404*/
  /*
    <Switch>
      <Route path="/" exact component={Home}></Route>
      <Route path="/contact" exact component={Contact}></Route>
      <Route path="/users" exact component={Users}></Route>
      <Route component={Error404}></Route>
    </Switch>
  </div>
    </Router>*/
}
