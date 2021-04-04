import React, { useState, useEffect, Fragment } from "react";
import "../../assets/css/layout_3.css";
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

function Home3() {
  const [sliderData, setsliderData] = useState([]);

  useEffect(() => {
    function fetchData() {
      // slider
      axios.get("/api/sliders3").then(async (res) => {
      setsliderData(res.data);
      });
    }
    fetchData();
  }, []);

  return (
    <Fragment>
      <Slider sliderData={sliderData} index="3" />
      <About index="3" />
      <Skills index="3" />
      <Service1 index="3" />
      
      <Portfolio index="3" />
      <Count index="3" />
      <Team index="3" />
      <Packages index="3" />
      <Testimonial index="3" />
      <Work index="3" />
      <Blog index="3" />
      <Instagram index="3" />
      <GetInTouch index="3" />
    </Fragment>
  );
}

export default Home3;
