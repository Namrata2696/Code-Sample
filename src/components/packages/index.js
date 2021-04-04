import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "react-circular-progressbar/dist/styles.css";
import { Container } from "react-bootstrap";
import "react-circular-progressbar/dist/styles.css";

function Packages(props) {
  const [packagesData, setpackagesData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      // Packages
      await axios.get("/api/packages").then(async (res) => {
        await setpackagesData(res.data);
      });
    }
    fetchData();
  }, []);

  const options = {
    0: {
      items: 1,
      margin: 15,
      dots: true,
      nav: false,
    },
    481: {
      items: 2,
      dots: true,
      nav: false,
    },
    768: {
      items: 2,
      dots: true,
      nav: false,
    },
    992: {
      items: 3,
      dots: true,
      nav: false,
    },
    1200: {
      items: 3,
      dots: true,
      nav: false,
    },
    1367: {
      items: 3,
      dots: true,
      nav: false,
    },
  };

  return (
    <Fragment>
      {/* <!-- Package Sec --> */}
      <section className={`package_sec ${props.index ? `package_sec_${props.index}` : ''}`}>
        <Container>
          <h2 className="global_title white">Packages</h2>
          <div className="inner">
            <OwlCarousel
              className="package_slider"
              margin={0}
              loop={true}
              dots={false}
              nav={true}
              center={true}
              smartSpeed={1000}
              autoplay={false}
              items={5}
              responsive={options}
            >
              {packagesData &&
                packagesData.map((item, index) => {
                  return (
                    <div className="item" key={index}>
                      <div className="package_block">
                        <h3>{item.title}</h3>
                        <div className="price">
                          {" "}
                          {item.price} <small>{item.duration}</small>{" "}
                        </div>
                        <ul className="package_list">
                          {item.packageList &&
                            item.packageList.map((item1, index1) => {
                              return (
                                <li key={index1}>
                                  <i
                                    className={
                                      item1.check === true ? "fa fa-check" : ""
                                    }
                                    aria-hidden="true"
                                  ></i>
                                  {item1.title} <span>{item1.highlight}</span>
                                </li>
                              );
                            })}
                        </ul>
                        <div className="btn-block text-center">
                          <a  href={item.PurchaseUrl}  className="buy_btn radial-out">
                            Buy Now
                          </a>
                        </div>
                      </div>
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

export default Packages;
