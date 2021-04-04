import React, { useState, useEffect, Fragment } from "react";
import "../../assets/css/layout_4.css";
import Slider from "../../components/common/slider";
import About from "../../components/about";
import Service1 from "../../components/service";
import Skills from "../../components/skills";
import Work from "../../components/work";
import Portfolio from "../../components/portfolio";
import Count from "../../components/count";
import Team from "../../components/team";
import Packages from "../../components/packages";
import Testimonial from "../../components/testimonial";
import Blog from "../../components/blog";
import Instagram from "../../components/common/instagram";
import GetInTouch from "../../components/getInTouch";
import axios from "axios";

function Home4() {
  const [sliderData, setsliderData] = useState([]);

  useEffect(() => {
     function fetchData() {
      // slider
      axios.get("/api/sliders4").then( (res) => {
         setsliderData(res.data);
      });
    }
    fetchData();
  }, []);

  return (
    <Fragment>
      <Slider sliderData={sliderData} index="4" />
      <About index="4" />
      <Skills index="4" />
      <Service1 index="4" />
      
      <Portfolio index="4" />
      <Count index="4" />
      <Team index="4" />
      <Packages index="4" />
      <Testimonial index="4" />
      <Work index="4" />
      <Blog index="4" />
      <Instagram index="4" />
      <GetInTouch index="4" />
    </Fragment>
  );
}

export default Home4;
