import React, { useState, useEffect, Fragment } from "react";
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

function Home1() {
  const [sliderData, setsliderData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      // slider
      await axios.get("/api/sliders").then(async (res) => {
        await setsliderData(res.data);
      });
    }
    fetchData();
  }, []);

  return (
    <Fragment>
      <Slider sliderData={sliderData} index="1" />
      <About index="1" />
      
      <Skills />
      <Service1 />
      <Portfolio />
      <Count />
      <Team />
      <Packages />
      <Testimonial />
      <Work />
      <Blog />
      <Instagram />
      <GetInTouch />
    </Fragment>
  );
}

export default Home1;
