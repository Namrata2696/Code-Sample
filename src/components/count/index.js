import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
import CountUp from "react-countup";

function Count(props) {
  const [countData, setcountData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      await axios.get("/api/count").then(async (res) => {
        await setcountData(res.data);
      });
    }
    fetchData();
  },[]);

  return (
    <Fragment>
      {/* <!-- Count Sec --> */}
      <section className={`count_sec ${props.index ? `count_sec_${props.index}` : ''}`} id="counter">
        <Container>
          <div className="inner">
            <Row>
              {countData &&
                countData.map((item, index) => {
                  return (
                    <Col lg={3} md={6} key={index}>
                      <div className="count_block">
                        <h3 className={item.active ? item.active : ''}>
                          <strong>
                            <CountUp
                              start={0}
                              end={item.dataCount}
                              suffix="+"
                              className="counter counter-value"
                            >
                              {/*                        
                              <span
                              className="counter counter-value"
                              data-count={item.dataCount}
                            > */}
                              {/* {item.start}
                              </span>+ */}
                            </CountUp>
                          </strong>
                          {item.name}
                        </h3>
                      </div>
                    </Col>
                  );
                })}
            </Row>
          </div>
        </Container>
      </section>
    </Fragment>
  );
}

export default Count;
