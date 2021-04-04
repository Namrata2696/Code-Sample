import React, { useState, useEffect, Fragment } from "react";
import "./assets/css/style.css";
import "./assets/css/responsive.css";
import "./assets/css/font-awesome.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./pages/includes/header";
import Footer from "./pages/includes/footer";
import WhatsApp from "./components/common/whatsApp";
import Pricing1 from "./pages/pricing1";
import Pricing2 from "./pages/pricing2";
import Pricing3 from "./pages/pricing3";
import ColorFilter from "./pages/includes/colorFilter";
import Home1 from "./pages/home1";
import Home2 from "./pages/home2";
import Home3 from "./pages/home3";
import Home4 from "./pages/home4";
import Service1 from "./pages/service1";
import Service2 from "./pages/service2";
import Portfolio from "./pages/portfolio";
import Contact from "./pages/contact";
import About from "./pages/about";
import Team from "./pages/team";
import Blog from "./pages/blog";
import ScrollToTop from "react-scroll-to-top";
import Loader from "./components/common/loader";
import { Switch, Route, HashRouter } from "react-router-dom"; //BrowserRouter as Router,

function App(props) {
  const [color, setcolor] = useState("color-1");
  const [loading, setloading] = useState(true);

  useEffect(() => {
    function fetchData() {
      setloading(false);
      // jquery
      var head = document.head;
      // color theme
      var link = document.createElement("link");
      link.type = "text/css";
      link.rel = "stylesheet";
      link.id = "colorFeature";
      link.href = `assets/css/${color}.css`;
      head.appendChild(link);    
    }
    fetchData();
  }, [color]);

  const selectedColor = (clr) => {
    var stylesheet = document.getElementById("colorFeature");
    stylesheet.parentNode.removeChild(stylesheet);

    var head = document.head;
    var link = document.createElement("link");
    link.type = "text/css";
    link.rel = "stylesheet";
    link.id = "colorFeature";
    link.href = `assets/css/${clr}.css`;
    head.appendChild(link);

    setcolor(clr);
  };

  var currentPath = window.location.pathname.split("/")[1];
  return (
    <Fragment>
      {loading === true && <Loader />}
      {loading === false && (
        <div className="App">
          <HashRouter>
            <ColorFilter selectedColor={selectedColor} />
            <Header />
            <Switch>
              <Route path="/" exact component={Home1} />
              <Route path="/pricing" exact component={Pricing1} />
              <Route path="/layout2" exact component={Home2} />
              <Route path="/layout3" exact component={Home3} />
              <Route path="/layout4" exact component={Home4} />
              <Route path="/service" exact component={Service1} />
              <Route path="/service2" exact component={Service2} />
              <Route path="/portfolio" exact component={Portfolio} />
              <Route path="/contact" exact component={Contact} />
              <Route path="/about" exact component={About} />
              <Route path="/team" exact component={Team} />
              <Route path="/blog" exact component={Blog} />
              <Route path="/pricing2" exact component={Pricing2} />
              <Route path="/pricing3" exact component={Pricing3} />
            </Switch>

            <Footer current={currentPath} />
            <ScrollToTop smooth={true} color="#fff" style={{fontSize: '15px'}} className="return-to-top" />
            <WhatsApp />
          </HashRouter>
        </div>
      )}
    </Fragment>
  );
}

export default App;
