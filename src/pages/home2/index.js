import React, { useState, useEffect, Fragment } from "react";
import "../../assets/css/layout_2.css";
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

function Home2() {
  const [sliderData, setsliderData] = useState([]);

  // useEffect(() => {
  //   async function fetchData() {
  //     // slider
  //     await axios.get("/api/sliders2").then(async (res) => {
  //       await setsliderData(res.data);
  //     });
  //   }
  //   fetchData();
  // }, []);

  
  useEffect(() => {
    fetchComment();
  }, []);

  function fetchComment() {
    const result = axios.get("/api/sliders2").then((res) => {
      setsliderData(res.data);
    });
  }

  return (
    <Fragment>
      <Slider sliderData={sliderData} index="2" />
      <About index="2" />
      <Skills index="2" />
      <Service1 index="2" />
      
      <Portfolio index="2" />
      <Count index="2" />
      <Team index="2" />
      <Packages index="2" />
      <Testimonial index="2" />
      <Work index="2" />
      <Blog index="2" />
      <Instagram index="2" />
      <GetInTouch index="2" />
    </Fragment>
  );
}

export default Home2;
