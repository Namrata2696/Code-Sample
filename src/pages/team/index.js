import React, { useState, useEffect, Fragment } from "react";
import Slider from "../../components/common/slider";
import TeamMember from "../../components/team";
import axios from "axios";

function Team() {
  const [sliderData, setsliderData] = useState([]);

  // useEffect(() => {
  useEffect(() => {
    fetchComment();
  }, []);

  
 function fetchComment() {
  const result = axios.get("/api/team/banner").then((res) => {
    setsliderData(res.data);
  });
  }

  // async function fetchData() {
  //   // slider
  //   axios.get("/api/team/banner").then((res) => {
  //     setsliderData(res.data);
  //   });
  // }
  // fetchData();
  // }, []);

  return (
    <Fragment>
      <Slider sliderData={sliderData} />
      <TeamMember index="T1" />
    </Fragment>
  );
}

export default Team;
