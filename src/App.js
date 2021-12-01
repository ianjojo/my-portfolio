import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import SinglePost from "./components/SinglePost";
import Post from "./components/Post";
import Project from "./components/Project";

import NavBar2 from "./components/Nav/Navbar";
// import Newnav from "./components/newnav/newnav";
import Accordion from "./components/accordian/Accordian";
import "./typography.scss";
import "./App.scss";
import StickyNav from "./components/sticky/Accordian";
import SimpleNav from "./components/simplenav/Navbar";
function App() {
  return (
    <div className="container">
      {/* <BrowserRouter> */}
      {/* <StickyNav /> */}
      {/* <Accordion /> */}
      {/* <NavBar2 /> */}
      <SimpleNav />
      <Home />
      <Project />
      {/* <Newnav /> */}
      {/* <Switch>
          <Route component={Home} path="/" exact />
          <Route component={About} path="/about" />
          <Route component={SinglePost} path="/post/:slug" />
          <Route component={Post} path="/post" />
          <Route component={Project} path="/project" />
        </Switch> */}
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
