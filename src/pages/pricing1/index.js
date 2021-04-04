import React, { useState, useEffect, Fragment } from "react";
import Slider from "../../components/common/slider";
import Pricing from "../../components/pricing";
import axios from "axios";

function Pricing1() {
  const [bannerData, setbannerData] = useState([]);

  // useEffect(() => {
  //   async function fetchData() {
  //     await axios.get("/api/packages/banner").then(async (res) => {
  //       await setbannerData(res.data);
  //     });

  //   }
  //   fetchData();
  // }, []);
  
  
  useEffect(() => {
    fetchComment();
  }, []);

  function fetchComment() {
    const result = axios.get("/api/packages/banner").then((res) => {
      setbannerData(res.data);
    });
  }
  
  return (
    <Fragment>
      <Slider sliderData={bannerData} />
      <Pricing index={1} />
    </Fragment>
  );
}

export default Pricing1;
