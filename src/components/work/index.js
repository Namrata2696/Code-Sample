import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import "react-circular-progressbar/dist/styles.css";

function Work(props) {

  return (
    <Fragment>
      <section className={`work_sec ${props.index ? `work_sec_${props.index}` : ''}`}>
        <Container className="work_sec_container">
          <h2 className="global_title white">Work With Us?</h2>
          <p>
            “Lorem ipsum dolor consectetur adipiscing elit. Vestibulum sit amet
            nisi a augue consectetur viverra. Proin, a iaculis lectus
            consectetur of sit amet.”
          </p>
          <a  href="#/" onClick={ev => {ev.preventDefault();}} className="buy_btn radial-out">
            Get Started
          </a>
        </Container>
      </section>
    </Fragment>
  );
}

export default Work;
