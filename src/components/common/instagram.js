import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "react-circular-progressbar/dist/styles.css";
import { Container } from "react-bootstrap";
import "react-circular-progressbar/dist/styles.css";

function Instagram(props) {
  const [instagramData, setinstagramData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      // Instagram
      await axios.get("/api/instagram").then(async (res) => {
      
        await setinstagramData(res.data);
      });
    }
    fetchData();
  }, []);

  const options = {
    0: {
      items: 1,
      margin: 30,
      nav: false,
    },
    421: {
      items: 2,
      margin: 30,
      nav: false,
    },
    576: {
      items: 2,
      nav: false,
    },
    600: {
      items: 2,
      nav: false,
    },
    768: {
      items: 3,
      nav: false,
    },
    992: {
      items: 4,
      nav: false,
    },
    1000: {
      items: 4,
      nav: false,
    },
    1367: {
      items: 4,
      nav: false,
    },
  };

  return (
    <Fragment>
      <section className={`instagram_sec ${props.index ? `instagram_sec_${props.index}` : ''}`}>
        <Container>
          <h2 className="global_title">Instagram</h2>
          <div className="inner">
            <OwlCarousel
              className="insta_slider"
              margin={0}
              loop={true}
              dots={false}
              nav={true}
              smartSpeed={1000}
              autoplay={true}
              items={5}
              responsive={options}
            >
              {instagramData &&
                instagramData.map((item, index) => {
                  return (
                    <div className="item" key={index}>
                      <a  href={item.url}  className="insta_block">
                        <figure>
                          <img src={item.image} alt="instagram img" />
                        </figure>
                        <div className="caption_global">
                          <div className="cap_inn">
                            <div className="cap_info">
                              <p>{item.name}</p>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  );
                })}
            </OwlCarousel>
          </div>
        </Container>
      </section>
    </Fragment>
  );
}

export default Instagram;
