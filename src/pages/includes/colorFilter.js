import React, { useState, Fragment } from "react";

function ColorFilter(props) {
  const [isOpen, setisOpen] = useState(false);

  const colorFilterChange = (e) => {
    props.selectedColor(e.target.id);
  }

  return (
    <Fragment>
      <div className="skin-switcher" style={{ left: `${isOpen ? '' : '0'}` }}>
        <a style={{ left: `${!isOpen ? '' : '158px'}` }} className={`color-option-box${!isOpen ? ' in-out' : ''}`} onClick={() => setisOpen(!isOpen)}>
          <i className="fa fa-cog fa-spin"></i>
        </a>
        {isOpen && (
          <Fragment>
            <div className="option-box-title">
              <h3>Select Color</h3>
            </div>
            <ul>
              <li className="colors">
                <span className="color" id="color-1" onClick={(e) => colorFilterChange(e)}></span>
              </li>
              <li className="colors">
                <span className="color" id="color-2" onClick={(e) => colorFilterChange(e)}></span>
              </li>
              <li className="colors">
                <span className="color" id="color-3" onClick={(e) => colorFilterChange(e)}></span>
              </li>
              <li className="colors">
                <span className="color" id="color-4" onClick={(e) => colorFilterChange(e)}></span>
              </li>
              <li className="colors">
                <span className="color" id="color-5" onClick={(e) => colorFilterChange(e)}></span>
              </li>
              <li className="colors">
                <span className="color" id="color-6" onClick={(e) => colorFilterChange(e)}></span>
              </li>
            </ul>
          </Fragment>
        )}
      </div>
    </Fragment>
  );
}

export default ColorFilter;
