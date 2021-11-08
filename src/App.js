import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import SinglePost from "./components/SinglePost";
import Post from "./components/Post";
import Project from "./components/Project";
// import NavBar from "./components/NavBar";
import NavBar2 from "./components/Nav/Navbar";
import "./typography.scss";
import "./App.scss";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <NavBar2 />
        <Switch>
          <Route component={Home} path="/" exact />
          <Route component={About} path="/about" />
          <Route component={SinglePost} path="/post/:slug" />
          <Route component={Post} path="/post" />
          <Route component={Project} path="/project" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
