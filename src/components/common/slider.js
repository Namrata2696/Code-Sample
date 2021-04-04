import React, { Fragment } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Loader from "./loader";

function Slider(props) {
  const options = {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    767: {
      items: 1,
    },
    992: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  };

  return (
    <Fragment>
      {props.sliderData.length === 0 && <Loader />}
      {props.sliderData.length > 0 && (
        <Fragment>
          {props.sliderData.length > 1 && (
            <section
              className={`slider_sec ${
                props.index ? `slider_sec_${props.index}` : ""
              }`}
            >
              <OwlCarousel
                className={`hero_slider ${
                  props.index ? `hero_slider_${props.index}` : ""
                }`}
                margin={0}
                loop={true}
                dots={props.index === "1" ? true : false}
                nav={true}
                smartSpeed={1000}
                autoplay={false}
                items={5}
                responsive={options}
              >
                {props.sliderData.map((item, index) => {
                  return (
                    <div className="item" key={index}>
                      <div
                        className={`home ${
                          props.index ? `home-slider-image-${props.index}` : ""
                        }`}
                      >
                        <div className="caption_info">
                          <div className="container">
                            <div
                              className={`inner ${
                                props.index === "3" ? "inner-text-left" : ""
                              }`}
                            >
                              {props.index === "2" && (
                                <h1>  
                                  <span className="type">{item.title}</span>
                                  <span
                                    className="typer"
                                    id="slide_text_1"
                                    data-words={item.highlightTitle}
                                    data-colors="white"
                                    data-delay="100"
                                    data-deletedelay="1000"
                                  ></span>
                                  <span
                                    className="cursor"
                                    data-owner="slide_text_1"
                                  ></span>
                                </h1>
                              )}
                              {(props.index === "1" || props.index === "4") && (
                                <h1 className="iq-tw-3 iq-font-light-blue iq-mt-40 iq-plr-90">
                                  <span>{item.highlightTitle}</span>{" "}
                                  {item.title}
                                </h1>
                              )}
                              {props.index === "3" && (
                                <h1>
                                  {item.title}
                                  <span>{item.highlightTitle}</span>
                                  {item.title1}
                                </h1>
                              )}
                              <span className="store-btn-set">
                                <a href="#/" onClick={ev => {ev.preventDefault();}}
                                  className="store_btn radial-out"
                                >
                                  <i className="fa fa-play"></i>
                                  {item.button1}{" "}
                                  <strong>{item.buttonSub1}</strong>
                                </a>
                                <a href="#/" onClick={ev => {ev.preventDefault();}}
                                  className="store_btn green radial-out"
                                >
                                  <i className="fa fa-apple"></i>
                                  {item.button1}{" "}
                                  <strong>{item.buttonSub2}</strong>
                                </a>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </OwlCarousel>
            </section>
          )}
          {props.sliderData.length === 1 && (
            <section className="inner_banner">
              <div className="container">
                <h1>
                  {props.sliderData[0].title}{" "}
                  <span>{props.sliderData[0].highlightTitle}</span>
                </h1>
                <ul className="breadcrum">
                  <li>
                    <a
                      onClick={(e) => e.preventDefault()}
                      href={props.sliderData[0].homeurl}
                    >
                      {props.sliderData[0].breadcrumbsHome}
                    </a>
                  </li>
                  <li>{props.sliderData[0].breadcrumbs}</li>
                </ul>
              </div>
            </section>
          )}
        </Fragment>
      )}
    </Fragment>
  );
}

export default Slider;
