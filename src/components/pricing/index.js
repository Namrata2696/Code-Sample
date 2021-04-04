import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";

function Pricing(props) {
  const [pricingData, setpricingData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      await axios.get("/api/pricing").then(async (res) => {
        await setpricingData(res.data);
      });
    }
    fetchData();
  }, []);

  return (
    <section className={`package_sec ${props.index !== 1 && 'sec_pricing'} ${props.index === 3 && 'third_pricing' } ${props.index === 1 && 'package_inn'}`}>
      <Container>
        <h2 className="global_title pricing_title"><span>Monthly</span> Plan</h2>
        <div className="inner" style={{marginBottom: '50px'}}>
          <Row className={`${props.index === 1 ? "no-gutters" : ""}`}>
            {pricingData &&
              pricingData.map((item, index) => {
                return (
                  <Col lg={4} xs={4} sm={12} md={4} key={index}>
                    {props.index === 1 && (
                      <div
                        className={`${
                          index === 1 ? "package_block select" : "package_block"
                        }`}
                      >
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
                          <a 
                            href="#/" onClick={ev => {ev.preventDefault();}}
                            className="buy_btn radial-out"
                          >
                            Buy Now
                          </a>
                        </div>
                      </div>
                    )}
                    {props.index !== 1 && (
                      <div className={`${"package_block"}`}>
                        <div className="top_info">
                          <h3>{item.title}</h3>
                          <div className="price">
                            {" "}
                            {item.price} <small>{item.duration}</small>{" "}
                          </div>
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
                          <a 
                            href="#/" onClick={ev => {ev.preventDefault();}}
                            className="buy_btn radial-out"
                          >
                            Buy Now
                          </a>
                        </div>
                      </div>
                    )}
                  </Col>
                );
              })}
          </Row>
        </div>
 
        <h2 className="global_title pricing_title"><span>Yearly</span> Plan</h2>
        <div className="inner">
          <Row className={`${props.index === 1 ? "no-gutters" : ""}`}>
            {pricingData &&
              pricingData.map((item, index) => {
                return (
                  <Col lg={4} xs={4} sm={12} md={4} key={index}>
                    {props.index === 1 && (
                      <div
                        className={`${
                          index === 1 ? "package_block select" : "package_block"
                        }`}
                      >
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
                          <a 
                            href="#/" onClick={ev => {ev.preventDefault();}}
                            className="buy_btn radial-out"
                          >
                            Buy Now
                          </a>
                        </div>
                      </div>
                    )}
                    {props.index !== 1 && (
                      <div className={`${"package_block"}`}>
                        <div className="top_info">
                          <h3>{item.title}</h3>
                          <div className="price">
                            {" "}
                            {item.price} <small>{item.duration}</small>{" "}
                          </div>
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
                          <a 
                            href="#/" onClick={ev => {ev.preventDefault();}}
                            className="buy_btn radial-out"
                          >
                            Buy Now
                          </a>
                        </div>
                      </div>
                    )}
                  </Col>
                );
              })}
          </Row>
        </div>
   
 
      </Container>
    </section>
  );
}

export default Pricing;
