import React, { useState, useEffect, Fragment } from "react";
import Slider from "../../components/common/slider";
import GetInTouch from "../../components/getInTouch";
import axios from "axios";

function Contact() {
  const [sliderData, setsliderData] = useState([]);

  useEffect(() => {
    fetchComment();
  }, [sliderData]);

  async function fetchComment() {
    const result = await axios.get("/api/contact/banner");
    setsliderData(result.data);
  }

//   useEffect(() => {
//     (async () => {
//         const result = await axios.get("/api/contact/banner");
//         setsliderData(result.data);
//     })();
// }, []);

  // useEffect(() => {
  //   async function fetchData() {
  //     // slider
  //     axios.get("/api/contact/banner").then((res) => {
  //       setsliderData(res.data);
  //     });
  //   }
  //   fetchData();
  // }, []);

  return (
    <Fragment>
      <Slider sliderData={sliderData} />     
      <GetInTouch index='C1' />
    </Fragment>
  );
}

export default Contact;
