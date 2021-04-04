import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "react-circular-progressbar/dist/styles.css";
import { Container } from "react-bootstrap";
import "react-circular-progressbar/dist/styles.css";

function Testimonial(props) {
  const [testimonialData, settestimonialData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      // Testimonial
      await axios.get("/api/testimonial").then(async (res) => {
        await settestimonialData(res.data);
      });
    }
    fetchData();
  }, []);

  const options = {
		0: {
			items: 1,
			nav:false
		},
		600: {
			items: 1,
			nav:false
		},
		768: {
			items: 2,
			nav:false
		},
		992: {
			items: 2,
			nav:false
		},
		1000: {
			items:2,
			nav:false
		},
		1367: {
			items: 2,
			nav:false
		}
	};

  return (
    <Fragment>
      <section className={`testimonial_sec ${props.index ? `testimonial_sec_${props.index}` : ''}`}>
        <Container>
          <h2 className="global_title">Happy Customers</h2>
          <div className="inner">
            <OwlCarousel
              className="testimonial_slider"
              margin={20}
              loop={ true}
              dots={false}
              nav={true}
              smartSpeed={ 1000}
              autoplay={true}
              items={5}
              responsive={options}
            >
              {testimonialData &&
                testimonialData.map((item, index) => {
                  return (
                    <div className="item" key={index}>
                      <div className="testi_block">
                        <p> {item.description} </p>
                      </div>
                      <div className="other_info">
                        <figure>
                          <img
                            src={item.image}
                            alt="testimonial img"
                          />
                        </figure>
                        <div className="detail">
                          <h3>
                            {item.name} <small>{item.role}</small>
                          </h3>
                          <i></i>
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

export default Testimonial;
