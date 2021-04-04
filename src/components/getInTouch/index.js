import React, { Fragment } from "react";
import { Col, Container, Row, Form } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";

function Contact(props) {
  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      Message: "",
    },
    validationSchema: Yup.object({
      first_name: Yup.string()
        .min(2, "Mininum 2 characters")
        .max(15, "Maximum 15 characters")
        .required("First Name Required!"),
      last_name: Yup.string()
        .min(2, "Mininum 2 characters")
        .max(15, "Maximum 15 characters")
        .required("Last Name Required!"),
      email: Yup.string()
        .email("Invalid email format")
        .required("Email Required!"),
      phone: Yup.number()
        .min(10, "Minimum 10 characters")
        .max(12, "Maximum 12 characters")
        .required("Phone Number Required!"),
      Message: Yup.string().min(10, "Minimum 10 characters"),
      // .required("Required!"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Fragment>
      {/* <!-- Form Info --> */}
      <section
        className={`form_info ${
          props.index === "C1" ? `form_inn` : `form_info_${props.index}`
        } `}
      >
        <Container>
          <h2 className="global_title">Contact Us</h2>
          {props.index !== "C1" && (
            <div className="inner">
              <Form onSubmit={formik.handleSubmit}>
                <Row>
                  <Col lg={6} md={6} sm={12} xl={6}>
                    <input
                      type="text"
                      name="first_name"
                      placeholder="First Name"
                      value={formik.values.first_name}
                      onChange={formik.handleChange}
                      className="form-control"
                    />
                    {formik.errors.first_name && formik.touched.first_name && (
                      <p className="error_msg_contact">
                        {formik.errors.first_name}
                      </p>
                    )}
                    <input
                      type="text"
                      name="last_name"
                      placeholder="Last Name"
                      value={formik.values.last_name}
                      onChange={formik.handleChange}
                      className="form-control"
                    />
                    {formik.errors.last_name && formik.touched.last_name && (
                      <p className="error_msg_contact">
                        {formik.errors.last_name}
                      </p>
                    )}
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      className="form-control"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                    />
                    {formik.errors.email && formik.touched.email && (
                      <p className="error_msg_contact">{formik.errors.email}</p>
                    )}
                  </Col>
                  <Col lg={6} md={6} sm={12} xl={6}>
                    <input
                      type="text"
                      name="phone"
                      className="form-control"
                      placeholder="Phone"
                      value={formik.values.phone}
                      onChange={formik.handleChange}
                    />
                    {formik.errors.phone && formik.touched.phone && (
                      <p className="error_msg_contact">{formik.errors.phone}</p>
                    )}

                    <textarea
                      type="password"
                      name="Message"
                      placeholder="Message"
                      className="form-control field"
                      value={formik.values.Message}
                      onChange={formik.handleChange}
                    />
                    {formik.errors.Message && formik.touched.Message && (
                      <p className="error_msg_contact">
                        {formik.errors.Message}
                      </p>
                    )}
                  </Col>
                  <div className="btn-block text-center">
                    <button
                      type="submit"
                      color="primary"
                      className="buy_btn radial-out"
                    >
                      Submit Now
                    </button>
                  </div>
                </Row>
              </Form>
            </div>
          )}
          {props.index === "C1" && (
            <Row>
              <Col lg={6} md={6} sm={12} xl={6} style={{marginTop: '15px'}}>
                <div className="inner">
                  <Form onSubmit={formik.handleSubmit}>
                   
                        <input
                          type="text"
                          name="first_name"
                          placeholder="First Name"
                          value={formik.values.first_name}
                          onChange={formik.handleChange}
                          className="form-control"
                        />
                        {formik.errors.first_name &&
                          formik.touched.first_name && (
                            <p className="error_msg_contact">
                              {formik.errors.first_name}
                            </p>
                          )}
                        <input
                          type="text"
                          name="last_name"
                          placeholder="Last Name"
                          value={formik.values.last_name}
                          onChange={formik.handleChange}
                          className="form-control"
                        />
                        {formik.errors.last_name &&
                          formik.touched.last_name && (
                            <p className="error_msg_contact">
                              {formik.errors.last_name}
                            </p>
                          )}
                        <input
                          type="email"
                          name="email"
                          placeholder="Email Address"
                          className="form-control"
                          value={formik.values.email}
                          onChange={formik.handleChange}
                        />
                        {formik.errors.email && formik.touched.email && (
                          <p className="error_msg_contact">
                            {formik.errors.email}
                          </p>
                        )}
                     
                        <input
                          type="text"
                          name="phone"
                          className="form-control"
                          placeholder="Phone"
                          value={formik.values.phone}
                          onChange={formik.handleChange}
                        />
                        {formik.errors.phone && formik.touched.phone && (
                          <p className="error_msg_contact">
                            {formik.errors.phone}
                          </p>
                        )}

                        <textarea
                          type="password"
                          name="Message"
                          placeholder="Message"
                          className="form-control field"
                          value={formik.values.Message}
                          onChange={formik.handleChange}
                        />
                        {formik.errors.Message && formik.touched.Message && (
                          <p className="error_msg_contact">
                            {formik.errors.Message}
                          </p>
                        )}
                      <div className="btn-block text-center">
                        <button
                          type="submit"
                          color="primary"
                          className="buy_btn radial-out contact_btn"
                        >
                          Submit Now
                        </button>
                      </div>
                  </Form>
                </div>
              </Col>
              <Col lg={6} md={6} sm={12} xl={6}>
                <div className="map_info">
                  <div className="cap_info">
                    <ul className="c_info">
                      <li>
                        <div className="detail">
                          <span className="icon">
                            <i className="fa fa-map-marker"></i>
                          </span>
                          <span className="text">
                            Address Line Comes Here 123 lorem lipsum line line1.
                          </span>
                        </div>
                      </li>
                      <li>
                        <div className="detail">
                          <span className="icon">
                            <i className="fa fa-phone"></i>
                          </span>
                          <span className="text">
                            <a href="tel:+9 123 456 789">+9 123 456 789</a>
                          </span>
                        </div>
                      </li>
                      <li>
                        <div className="detail">
                          <span className="icon">
                            <i className="fa fa-envelope"></i>
                          </span>
                          <span className="text">
                            <a href="mailto:Info@Company.com">
                              Info@Company.com
                            </a>
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28699444.24897392!2d-107.42255345123505!3d31.45222108910831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2sin!4v1568913461485!5m2!1sen!2sin"
                    width="100%"
                    height="550"
                    frameBorder="0"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    title="map"
                  ></iframe>
                </div>
              </Col>
            </Row>
          )}
        </Container>
      </section>
    </Fragment>
  );
}

export default Contact;
