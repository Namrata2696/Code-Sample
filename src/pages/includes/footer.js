import React, { useEffect, useState, Fragment } from "react";
import { Col, Container, Row, Button, Form } from "react-bootstrap";

function Footer(props) {
  const [ftrCustomClass, setftrCustomClass] = useState('');

  useEffect(() => {
    async function fetchData() {
	  var current = props.current && (props.current === 'layout2') ? 'footer_detail_2' : (props.current === 'layout3') ? 'footer_detail_3' : (props.current === 'layout4') ? 'footer_detail_4' : '' ;
	  setftrCustomClass (current);
    }
    fetchData();
  }, [props]);


  return (
  <Fragment>
      <footer>
			<section className={`footer_detail ${ftrCustomClass}`}>
				<Container>
					<div className="inner">
						<Row className="footer-space">
							<Col lg={3} sm={6}>
								<h3>Navigation</h3>
								<Row>
									<Col lg={6} sm={6} >
										<ul className="footer_link">
											<li><a  href="/">Home</a></li>
											<li><a  href="/about">About</a></li>
											<li><a  href="/service">Services</a></li>
											<li><a  href="/#skill">Skill</a></li>
											<li><a  href="/portfolio">Portfolio</a></li>
											<li><a  href="/team">Team</a></li>
										</ul>
									</Col>
									<Col lg={6} sm={6}>
										<ul className="footer_link">
											<li><a  href="/#">Testimonias</a></li>
											<li><a  href="/packages1">Pricing</a></li>
											<li><a  href="/blog">Blog</a></li>
											<li><a  href="/#instagram">instagram</a></li>
											<li><a  href="/contact">Contact</a></li>
										</ul>
									</Col>
								</Row>
							</Col>
							<Col lg={4} sm={6}>
								<h3>Contact Us</h3>
								<ul className="add_info">
									<li>
										<div className="detail">
											<span className="icon">
												<i className="fa fa-map-marker"></i>
											</span> 
											<span className="text">Address Line Comes Here 123 lorem lipsum line line1.</span>
										</div>
									</li>
									<li>
										<div className="detail">
											<span className="icon">
												<i className="fa fa-phone"></i>
											</span> 
											<span className="text">+9 123 456 789</span>
										</div>
									</li>
									<li>
										<div className="detail">
											<span className="icon">
												<i className="fa fa-envelope"></i>
											</span> 
											<span className="text"><a  href="mailto:Info@Company.com">
										Info@Company.com</a>
											</span>
										</div>
									</li>
								</ul>
							</Col>
							<Col lg={2} sm={6}>
								<h3>Follow Us</h3>
								<ul className="footer_social">
									<li><a  href="#/" onClick={ev => {ev.preventDefault();}}><i className="fa fa-facebook"></i> Facebook</a></li>
									<li><a  href="#/" onClick={ev => {ev.preventDefault();}}><i className="fa fa-twitter"></i> Twitter</a></li>
									<li><a  href="#/" onClick={ev => {ev.preventDefault();}}><i className="fa fa-linkedin"></i> Linkedin</a></li>
									<li><a  href="#/" onClick={ev => {ev.preventDefault();}}><i className="fa fa-google-plus"></i> Google+</a></li>
								</ul>
							</Col>
							<Col lg={3} sm={6}>
								<h3>Newsletter</h3>
								<Form.Group>
                <Form.Control type="email" placeholder="Enter Email Address" />
              </Form.Group>
								<Button className="subscribe_btn radial-out">Subscribe Now</Button>
							</Col>
						</Row>
						<div className="copyright">
							Copyright © 2019 <span>Company.</span> All rights reserved.            
						</div>
					</div>
					{/* <a  href="#/" onClick={ev => {ev.preventDefault();}} id="return-to-top"><span>&#8639;</span></a> */}
				</Container>
			</section>
		</footer>
 </Fragment>
  );
}

export default Footer;