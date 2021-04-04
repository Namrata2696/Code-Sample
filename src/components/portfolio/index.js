import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import Gallery from "react-grid-gallery";

function Portfolio(props) {
  const [photos, setphotos] = useState([]);
  const [pagephotos, setpagephotos] = useState([]);
  const [currentpage, setcurrentpage] = useState(1);
  const [totalpage, settotalpage] = useState(0);

  const NO_RECORDS = 8;

  useEffect(() => {
    async function fetchData() {
      // Portfolio
      let data = [];
      await axios.get("/api/portfolio").then(async (res) => {
        setphotos(res.data);
        res.data.map((item, index) => {
          if (index < NO_RECORDS) {
            data.push(item);
            // setcurrentpage(index);
          }
          return true;
        });
        var total = toString(res.data.length / NO_RECORDS);
        var len = total.indexOf(".");

        var totalpgs =
          len === -1
            ? parseInt(res.data.length / NO_RECORDS) + 1
            : res.data.length / NO_RECORDS;
        let pgs = [];
        for (var i = 1; i <= Number(totalpgs); i++) {
          pgs.push(i);
        }
        settotalpage(pgs);
        setpagephotos(data);
      });
    }
    fetchData();
  }, []);

  var images = pagephotos.map((i, index) => {
    i.customOverlay = (
      <div className="more_text" title="More Info" key={index}>
        {/* <p>More Info</p> */}
        <i className="fa fa-link"></i>
      </div>
    );
    return i;
  });

  const activePageClick = (page) => {
    setcurrentpage(page);
    var data = [];
    photos.map((item, index) => {
      if (index < (page * NO_RECORDS) && index >= ((page - 1) * NO_RECORDS)) {
        data.push(item);
      }
      return true;
    });
    console.log("all::", photos, data);
    setpagephotos(data);
  }

  const prevpage = () => {
    var page = (currentpage - 1);
    console.log("prev:", page);
    setcurrentpage(page);
    var data = [];
    photos.map((item, index) => {
      if (index < (page * NO_RECORDS) && index >= ((page - 1) * NO_RECORDS)) {
        data.push(item);
      }
      return true;
    });
    setpagephotos(data);
  }

  const nextpage = () => {
    var page = (currentpage + 1);
    setcurrentpage(page);
    var data = [];
    photos.map((item, index) => {
      if (index < (page * NO_RECORDS) && index >= ((page - 1) * NO_RECORDS)) {
        data.push(item);
      }
      return true;
    });
    setpagephotos(data);
  }

  const firstpage = () => {
    var page = 1;
    console.log("prev:", page);
    setcurrentpage(page);
    var data = [];
    photos.map((item, index) => {
      if (index < (page * NO_RECORDS) && index >= ((page - 1) * NO_RECORDS)) {
        data.push(item);
      }
      return true;
    });
    setpagephotos(data);
  }

  const lastpage = () => {
    var page = totalpage.length;
    setcurrentpage(page);
    var data = [];
    photos.map((item, index) => {
      if (index < (page * NO_RECORDS) && index >= ((page - 1) * NO_RECORDS)) {
        data.push(item);
      }
      return true;
    });
    setpagephotos(data);
  }

  return (
    <Fragment>
      {/* <!-- Portfolio Sec --> */}

      <section
        className={`portfolio_sec ${
          props.index ? `portfolio_sec_${props.index}` : ""
        }`}
      >
        <div className="container">
          <h2 className="global_title">Our Portfolio</h2>
          <div className="card-columns">
            {/*  className="card-columns"  */}
            <Gallery
              images={images}
              className="react-photo-gallery--gallery"
              backdropClosesModal={true}
              showLightboxThumbnails={true}
              enableImageSelection={false}
            />
            {/* </Card> */}
          </div>
          {props.index === 'P1' && 
          <div className="pagination_portfolio">
            {currentpage !== 1 && <button type="button" className={`subscribe_btn radial-out btn btn-primary`} onClick={() => firstpage()}><i className='fa fa-angle-double-left' ></i></button>}
            {currentpage !== 1 && <button type="button" className={`subscribe_btn radial-out btn btn-primary`} onClick={() => prevpage()}><i className='fa fa-angle-left' ></i></button>}
            {totalpage.length > 0 &&
              totalpage.map((item, index) => {
                return(
                  <button type="button" key={index} title={item} className={`${currentpage === item ? 'active' : ''} subscribe_btn radial-out btn btn-primary`} onClick={() => activePageClick(item)}>{item}</button>               
                )
              })}
              {currentpage !== totalpage.length && <button type="button" className={`subscribe_btn radial-out btn btn-primary`} onClick={() => nextpage()}><i className='fa fa-angle-right' ></i></button>}
              {currentpage !== totalpage.length && <button type="button" className={`subscribe_btn radial-out btn btn-primary`} onClick={() =>lastpage()}><i className='fa fa-angle-double-right' ></i></button>}
          </div>
}
        </div>
      </section>
    </Fragment>
  );
}

export default Portfolio;
