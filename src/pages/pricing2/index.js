import React, { useState, useEffect, Fragment } from "react";
import Slider from "../../components/common/slider";
import Pricing from "../../components/pricing";
import axios from "axios";

function Pricing2(props) {
  const [bannerData, setbannerData] = useState([]);


  useEffect(() => {
    async function fetchData() {
      await axios.get("/api/packages/banner").then(async (res) => {
        await setbannerData(res.data);
      });
    }
    fetchData();
  }, []);
  
  return (
    <Fragment>
      <Slider sliderData={bannerData} />
      <Pricing index={2} />
    </Fragment>
  );
}

export default Pricing2;
