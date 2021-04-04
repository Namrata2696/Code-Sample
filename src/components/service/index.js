import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";

function Service1(props) {
  const [service1Data, setservice1Data] = useState([]);

  useEffect(() => {
    async function fetchData() {
      // Service1
      await axios.get("/api/service").then(async (res) => {
        await setservice1Data(res.data);
      });
    }
    fetchData();
  }, []);

  return (
    <Fragment>
      {/* <!-- Start Service Sec --> */}
      <section style={{backgroundColor: 'unset'}} className={`service_sec ${props.index === 'S2' ? 'service_style_2' : `service_sec_${props.index}` }`}>
        <Container>
          <h2 className="global_title">Our Services</h2>
       
          <Row className='space-lg-3'>
            {service1Data &&
              service1Data.map((item, index) => {
                return (
                  <Col lg={props.index === 'S2' ? 6 : 4} md={props.index === 'S2' ? 6 : 4} key={index}>
                    <div className={`service_block service_block_${index + 1}`}>  
                      <figure></figure>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                      <div className='more_right'>
                      <a  href={item.moreLink}  className="move_link">
                        <span><i className="fa fa-arrow-right"></i></span>
                      </a>
                      </div>
                    </div>
                  </Col>
                );
              })}
          </Row>
      
        </Container>
      </section>
      {/* <!-- End Service Sec --> */}
    </Fragment>
  );
}

export default Service1;
