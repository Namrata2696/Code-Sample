import React, { useState, useEffect, Fragment } from "react";
import Slider from "../../components/common/slider";
import AboutUs from "../../components/about";
import axios from "axios";

function About() {
  const [sliderData, setsliderData] = useState([]);

  useEffect(() => {
    function fetchData() {
      // slider
      axios.get("/api/aboutus/banner").then( (res) => {
        setsliderData(res.data);
      });
    }
    fetchData();
  }, []);

  return (
    <Fragment>
      <Slider sliderData={sliderData} />
      <AboutUs index='A1' />
    </Fragment>
  );
}

export default About;
