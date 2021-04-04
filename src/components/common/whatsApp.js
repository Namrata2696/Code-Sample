import React, { useEffect, Fragment } from "react";
import Profile4 from "../../assets/images/whatsapp/profile_04.jpg";
import Profile3 from "../../assets/images/whatsapp/profile_03.jpg";
import Profile2 from "../../assets/images/whatsapp/profile_02.jpg";
import Profile1 from "../../assets/images/whatsapp/profile_01.jpg";


function Whatsapp(props) {
  // const [show, setshow] = useState(false);

  useEffect(() => {
    async function fetchData() {
      //here
    }
    fetchData();
  },[]);

  const reDirecttoWhasapp = () => {
    window.open('https://web.whatsapp.com/send?phone=919527252275', '_blank')
  };

  return (
    <Fragment>
      {/* <!-- Whatsapp --> */}
      <div className="wc-style wc-right-bottom">
        {/* <!-- Start Floating Panel Container --> */}
        <div className="wc-panel" style={{ display: "none" }}>
          {/* show ? "" : "none" */}
          {/* <!-- Panel Header --> */}
          <div className="wc-header">
            <strong>Need Help?</strong>
            <p>Chat with us on WhatsApp</p>
          </div>
          {/* <!-- Panel Content --> */}
          <div className="wc-body">
            <ul>
              {/* <!-- Start Single Contact List --> */}
              <li>
                <a href="#/" onClick={ev => {ev.preventDefault();}}
                  className="wc-list"
                  data-number="918866774266"
                  data-message="Please help me! I have got wrong product - ORDER ID is : #654321485"
                >
                  <div className="d-flex bd-highlight">
                    {/* <!-- Profile Picture --> */}
                    <div className="wc-img-cont">
                      <img
                        src={Profile1}
                        className="wc-user-img"
                        alt=""
                      />
                      <span className="wc-status-icon"></span>
                    </div>
                    {/* <!-- Display Name & Last Seen --> */}
                    <div className="wc-user-info">
                      <span>John Doe</span>
                      <p>John left 7 mins ago</p>
                    </div>
                    {/* <!-- Chat iCon --> */}
                    <div className="wc-chat-icon">
                      <i className="fa fa-whatsapp"></i>
                    </div>
                  </div>
                </a>
              </li>
              {/* <!--/ End Single Contact List --> */}
              {/* <!-- Start Single Contact List -/-> */}
              <li>
                <a href="#/" onClick={ev => {ev.preventDefault();}}
                  className="wc-list"
                  data-number="918866774266"
                  data-message="Please help me! I have got wrong product - ORDER ID is : #654321485"
                >
                  <div className="d-flex bd-highlight">
                    {/* <!-- Profile Picture --> */}
                    <div className="wc-img-cont">
                      <img
                        src={Profile2}
                        className="wc-user-img"
                        alt=""
                      />
                      <span className="wc-status-icon wc-online"></span>
                    </div>
                    {/* <!-- Display Name & Last Seen --> */}
                    <div className="wc-user-info">
                      <span>Yolduz Rafi</span>
                      <p>Yolduz is online</p>
                    </div>
                    {/* <!-- Chat iCon --> */}
                    <div className="wc-chat-icon">
                      <i className="fa fa-whatsapp"></i>
                    </div>
                  </div>
                </a>
              </li>
              {/* <!--/ End Single Contact List --> */}
              {/* <!-- Start Single Contact List --> */}
              <li>
                <a href="#/" onClick={ev => {ev.preventDefault();}}
                  className="wc-list"
                  data-number="918866774266"
                  data-message="Please help me! I have got wrong product - ORDER ID is : #654321485"
                >
                  <div className="d-flex bd-highlight">
                    {/* <!-- Profile Picture --> */}
                    <div className="wc-img-cont">
                      <img
                        src={Profile3}
                        className="wc-user-img"
                        alt=""
                      />
                      <span className="wc-status-icon wc-online"></span>
                    </div>
                    {/* <!-- Display Name & Last Seen --> */}
                    <div className="wc-user-info">
                      <span>Nargis Hawa</span>
                      <p>Nargis left 30 mins ago</p>
                    </div>
                    {/* <!-- Chat iCon --> */}
                    <div className="wc-chat-icon">
                      <i className="fa fa-whatsapp"></i>
                    </div>
                  </div>
                </a>
              </li>
              {/* <!--/ End Single Contact List --> */}
              {/* <!-- Start Single Contact List --> */}
              <li>
                <a href="#/" onClick={ev => {ev.preventDefault();}}
                  className="wc-list"
                  data-number="918866774266"
                  data-message="Please help me! I have got wrong product - ORDER ID is : #654321485"
                >
                  <div className="d-flex bd-highlight">
                    {/* <!-- Profile Picture --> */}
                    <div className="wc-img-cont">
                      <img
                        src={Profile4}
                        className="wc-user-img"
                        alt=""
                      />
                      <span className="wc-status-icon wc-online"></span>
                    </div>
                    {/* <!-- Display Name & Last Seen --> */}
                    <div className="wc-user-info">
                      <span>Khadija Mehr</span>
                      <p>Khadija left 50 mins ago</p>
                    </div>
                    {/* <!-- Chat iCon --> */}
                    <div className="wc-chat-icon">
                      <i className="fa fa-whatsapp"></i>
                    </div>
                  </div>
                </a>
              </li>
              {/* <!--/ End Single Contact List --> */}
            </ul>
          </div>
        </div>
        {/* <!--/ End Floating Panel Container --> */}
        {/* <!-- Start Right Floating Button--> */}
        <div className="wc-right-bottom" onClick={() => reDirecttoWhasapp()}>
          {/* setshow(!show) */}
          <div className="wc-box">
            <div className="wc-button rotateBackward">
              <i className="fa fa-whatsapp"></i>
            </div>
          </div>
        </div>
        {/* <!--/ End Right Floating Button--> */}
      </div>
      {/* <!-- Whatsapp end --> */}
    </Fragment>
  );
}

export default Whatsapp;
