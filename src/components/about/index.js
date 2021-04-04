import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
import ReactHtmlParser from 'react-html-parser';
import aboutImg1 from "../../assets/images/about/about_img.png";
import aboutImg2 from "../../assets/images/about/about_img_4.png";

function About(props) {
  const [aboutData, setaboutData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      // about
      await axios.get("/api/aboutus").then(async (res) => {
        await setaboutData(res.data);
      });
    }
    fetchData();
  }, []);

  return (
    <Fragment>
      {/* <!-- Start About  Sec --> */}
      <section className={`about_sec ${props.index ? `about_sec_${props.index}` : ''}`}>
        <Container>
          <Row>
          <Col lg={6} md={12} xs={12}>
              <div className="detail">
                <h2 className="global_title left">{aboutData.aboutTitle}</h2>
                <h3>{aboutData.aboutHeadline}</h3>
                {ReactHtmlParser(aboutData.aboutText)}
                <a href="#/" onClick={ev => {ev.preventDefault();}} className="join_btn buy_btn radial-out"
                >
                  Join us now
                </a>
              </div>
            </Col>
            <Col lg={6} md={12} xs={12}>
              <div className="about-img">
                <img src={`${(props.index === '2' || props.index === '4') ? aboutImg2 : aboutImg1}`} alt="about img" />
                <div className="back-img"></div>
              </div>
            </Col>
           
          </Row>
        </Container>
      </section>
      {/* <!-- End About Sec --> */}
    </Fragment>
  );
}

export default About;
