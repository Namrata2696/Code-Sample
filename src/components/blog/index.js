import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Container, Row, Col } from "react-bootstrap";

function LatestBlog(props) {
  const [latestBlogData, setlatestBlogData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      // Blog
      await axios.get("/api/blog").then(async (res) => {
        await setlatestBlogData(res.data);
        // return true;
      });
    }
    fetchData();
  }, []);

  const options = {
    0: {
      items: 1,
      dots: true,
      nav: false,
    },
    576: {
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

  const textBlog = (item) => {
    var len = item.highlight.trim().length;
    var text = "";
    if (len > 85) {
      text = item.highlight.substr(0, 85);
    }
    return text;
  };

  return (
    <Fragment>
      <section
        className={`blog_sec blog_sec_owl ${
          props.index ? `blog_sec blog_sec_owl_${props.index}` : ""
        }`}
      >
        <Container>
          <h2 className="global_title">Latest Blog</h2>
          <div className="inner">
            {props.index !== "B1" && (
              <OwlCarousel
                className="owl-theme theme-arrow blog_slider"
                margin={0}
                loop={true}
                dots={false}
                nav={true}
                smartSpeed={1000}
                autoplay={false}
                items={3}
                // responsiveclassName={true}
                responsive={options}
              >
                {latestBlogData &&
                  latestBlogData.map((item, index) => {
                    // if (index < 4) {
                    return (
                      <div className="item" key={index}>
                        <div className="blog_info">
                          <figure className="blog_img">
                            <a href={item.blogLink}>
                              <img src={item.blogImage} alt="blog imag" />
                            </a>
                            <label>{item.date}</label>
                          </figure>
                          <div className="detail">
                            <h3>
                              <a href={item.blogLink}>{item.title}</a>
                            </h3>
                            <p className="text-length">{textBlog(item)} <a href={item.blogLink}>Read more</a></p>
                            {/* <div className="other_info">
                              <figure>
                                <img src={item.blogerImage} alt="" />
                              </figure>
                              <h4>{item.bloger}</h4>
                              <a href={item.blogLink}>
                                <span><i className="fa fa-arrow-right"></i></span>
                              </a>
                            </div> */}
                          </div>
                        </div>
                      </div>
                    );
                    // }
                  })}
              </OwlCarousel>
            )}
            {props.index === "B1" && (
              <Row>
                {latestBlogData &&
                  latestBlogData.map((item, index) => {
                    return (
                      <Col lg={4} sm={6} key={index}>
                        <div className="blog_info">
                          <figure className="blog_img">
                            <a href={item.blogLink}>
                              <img src={item.blogImage} alt="blog imag" />
                            </a>
                            <label>{item.date}</label>
                          </figure>
                          <div className="detail">
                            <h3>
                              <a href={item.blogLink}>{item.title}</a>
                            </h3>
                            <p className="text-length">{textBlog(item)} <a href={item.blogLink}>Read more</a></p>
                            {/* <div className="other_info">
                              <figure>
                                <img src={item.blogerImage} alt="" />
                              </figure>
                              <h4>{item.bloger}</h4>
                              <a href={item.blogLink}>
                                <span><i className="fa fa-arrow-right"></i></span>
                              </a>
                            </div> */}
                          </div>
                        </div>
                      </Col>
                    );
                  })}
              </Row>
            )}
          </div>
        </Container>
      </section>
    </Fragment>
  );
}

export default LatestBlog;
