import React, { useState, useEffect, Fragment } from "react";
import Slider from "../../components/common/slider";
import Portfolio1 from "../../components/portfolio";
import axios from "axios";

function Portfolio() {
  const [sliderData, setsliderData] = useState([]);

  // useEffect(() => {
  //   fetchComment();
  // }, []);

  // async function fetchComment() {
  //   const result = await axios.get("/api/portfolio/banner");
  //   setsliderData(result.data);
  // }

  useEffect(() => {
    function fetchData() {
      axios.get("/api/portfolio/banner").then(async (res) => {
        setsliderData(res.data);
      });
    }
    fetchData();
  }, []);


  return (
    <Fragment>
      <Slider sliderData={sliderData} />     
      <Portfolio1 index={'P1'} />
    </Fragment>
  );
}

export default Portfolio;
