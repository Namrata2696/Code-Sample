import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Skills(props) {
  const [skillsData, setskillsData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      // Skills
      await axios.get("/api/skills").then(async (res) => {
        await setskillsData(res.data);
      });
    }
    fetchData();
  }, []);

  return (
    <Fragment>
      {/* <!-- Skill Sec --> */}
      <section style={{backgroundColor: '#f8f8f8'}} className={`skill_sec ${props.index ? `skill_sec_${props.index}` : ''}`} id="progress">
        <Container>
          <h2 className="global_title">Our Skills</h2>
          <div className="inner">
            <Row className="space-2">
              {skillsData &&
                skillsData.map((item, index) => {
                  return (
                    <Col lg={3} sm={6} key={index}>
                      <div className="skill_block">
                        <CircularProgressbar
                          minValue={0}
                          strokeWidth={10}
                          value={item.progress}
                          text={`${item.progress}%`}
                          counterClockwise={true}
                          className={`progress ${item.progressType} noselect`}
                        />
                        <h3>{item.type}</h3>
                        <p>{item.description}</p>
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

export default Skills;
