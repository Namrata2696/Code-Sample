import React, { useState, useEffect, Fragment } from "react";
import Slider from "../../components/common/slider";
import Service from "../../components/service";
import axios from "axios";

function Service1() {
  const [sliderData, setsliderData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      // slider
      await axios.get("/api/service/banner").then(async (res) => {
        await setsliderData(res.data);
      });
    }
    fetchData();
  }, []);

  return (
    <Fragment>
      <Slider sliderData={sliderData} />     
      <Service />
    </Fragment>
  );
}

export default Service1;
