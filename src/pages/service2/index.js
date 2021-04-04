import React, { useState, useEffect, Fragment } from "react";
import Slider from "../../components/common/slider";
import Service from "../../components/service";
import axios from "axios";

function Service2() {
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
      <Service index={'S2'} />
    </Fragment>
  );
}

export default Service2;
