import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "react-circular-progressbar/dist/styles.css";
import { Col, Container, Row } from "react-bootstrap";

function Team(props) {
  const [teamData, setteamData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      // Team
      await axios.get("/api/team").then(async (res) => {
        await setteamData(res.data);
      });
    }
    fetchData();
  }, []);

  const options = {
    0: {
      items: 1,
      margin: 28,
      dots: true,
      nav: false,
    },
    481: {
      items: 2,
      margin: 28,
      dots: true,
      nav: false,
    },
    576: {
      items: 2,
      dots: true,
      nav: false,
    },
    768: {
      items: 3,
      dots: true,
      nav: false,
    },
    992: {
      items: 3,
      dots: true,
      nav: false,
    },
    1000: {
      items: 3,
      dots: true,
      nav: false,
    },
    1200: {
      items: 4,
      dots: true,
      nav: false,
    },
    1367: {
      items: 4,
      dots: true,
      nav: false,
    },
  };

  return (
    <Fragment>
      {/* <!-- Team Sec --> */}
      <section
        className={`team_sec ${props.index ? `team_sec_${props.index}` : ""}`}
      >
        <Container>
          <h2
            className={`global_title ${
              props.index === "T1" && "pricing_title"
            }`}
          >
            <span>Creative</span> Team
          </h2>
          {props.index !== "T1" && (
            <div className="inner">
              <OwlCarousel
                className="team_slider"
                margin={0}
                loop={true}
                dots={false}
                nav={true}
                smartSpeed={1000}
                autoplay={false}
                items={5}
                responsive={options}
              >
                {teamData &&
                  teamData.map((item, index) => {
                    return (
                      <div className="item" key={index}>
                        <div className="team_block">
                          <figure>
                            <img src={item.image} alt="team img" />
                            <h3>
                              {item.name} <small>{item.position}</small>
                            </h3>
                          </figure>
                          <div className="caption_global">
                            <div className="cap_inn">
                              <div className="cap_info">
                                <h4>
                                  {item.name} <small>{item.position}</small>
                                </h4>
                                <p>{item.about}</p>
                                <ul className="team_social">
                                  <li>
                                    <a href={item.facebook}>
                                      <i className="fa fa-facebook"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a href={item.twitter}>
                                      <i className="fa fa-twitter"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a href={item.linkedin}>
                                      <i className="fa fa-linkedin"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a href={item.googlePlus}>
                                      <i className="fa fa-google-plus"></i>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </OwlCarousel>
            </div>
          )}
          {props.index === "T1" && (
            <Row className="team-space">
              {teamData &&
                teamData.map((item, index) => {
                  return (
                    <Col xl={3} lg={3} md={4} sm={6} key={index}>
                      <div className="team_block">
                        <figure>
                          <img src={item.image} alt="team img" />
                          <div>
                          <h3 className='team_position'>
                            {item.name} <small>{item.position}</small>
                          </h3>
                          <p>{item.about}</p>
                          <ul className="team_social">
                            <li>
                              <a href={item.facebook}>
                                <i className="fa fa-facebook"></i>
                              </a>
                            </li>
                            <li>
                              <a href={item.twitter}>
                                <i className="fa fa-twitter"></i>
                              </a>
                            </li>
                            <li>
                              <a href={item.linkedin}>
                                <i className="fa fa-linkedin"></i>
                              </a>
                            </li>
                            <li>
                              <a href={item.googlePlus}>
                                <i className="fa fa-google-plus"></i>
                              </a>
                            </li>
                          </ul>
                          </div>
                        </figure>
                        {/* <div className="caption_global">
                          <div className="cap_inn">
                            <div className="cap_info">
                              <h4>
                                {item.name} <small>{item.position}</small>
                              </h4>
                                </div>
                          </div>
                        </div> */}
                      </div>
                    </Col>
                  );
                })}
            </Row>
          )}
        </Container>
      </section>
    </Fragment>
  );
}

export default Team;
