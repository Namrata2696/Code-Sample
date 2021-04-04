import React, { useState, useEffect, Fragment } from "react";
import Slider from "../../components/common/slider";
import BlogData from "../../components/blog";
import axios from "axios";

function Team() {
  const [sliderData, setsliderData] = useState([]);

  useEffect(() => {
    fetchComment();
  }, []);

  function fetchComment() {
    const result = axios.get("/api/blog/banner").then((res) => {
      setsliderData(res.data);
    });
  }

  return (
    <Fragment>
      <Slider sliderData={sliderData} />
      <BlogData index="B1" />
    </Fragment>
  );
}

export default Team;
