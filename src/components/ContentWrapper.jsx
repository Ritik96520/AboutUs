import PropTypes from "prop-types";
import "./ContentWrapper.css";

const ContentWrapper = ({ className = "" }) => {
  return (
    <div className={`content-wrapper ${className}`}>
      <div className="content-wrapper-inner">
        <img className="frame-child1" alt="" src="/line-348.svg" />
      </div>
      <div className="image-grid">
        <img className="img-7988-icon" alt="" src="/img-7988@2x.png" />
        <div className="image-grid-row-one">
          <img className="img-7987-icon" alt="" src="/img-7987@2x.png" />
          <div className="line-group">
            <img className="frame-child2" alt="" src="/line-335.svg" />
            <img
              className="frame-child3"
              loading="lazy"
              alt=""
              src="/line-341.svg"
            />
            <img
              className="frame-child4"
              loading="lazy"
              alt=""
              src="/line-342.svg"
            />
            <img className="frame-child5" alt="" src="/line-340.svg" />
            <div className="line-div" />
            <img className="frame-child6" alt="" src="/line-345.svg" />
            <img className="frame-child7" alt="" src="/line-347.svg" />
            <img className="frame-child8" alt="" src="/line-346.svg" />
            <img
              className="frame-child9"
              loading="lazy"
              alt=""
              src="/line-338.svg"
            />
            <img className="frame-child10" alt="" src="/line-343.svg" />
            <img className="frame-icon" alt="" src="/frame-1171279985@2x.png" />
          </div>
          <img
            className="screenshot-2024-05-02-at-419"
            alt=""
            src="/screenshot-20240502-at-419-1@2x.png"
          />
          <div className="image-grid-row-one-child" />
          <img
            className="screenshot-2024-05-02-at-4191"
            loading="lazy"
            alt=""
            src="/screenshot-20240502-at-419-2@2x.png"
          />
          <img
            className="screenshot-2024-05-02-at-4192"
            alt=""
            src="/screenshot-20240502-at-419-3@2x.png"
          />
          <div className="image-grid-row-one-item" />
          <div className="image-grid-row-one-inner" />
          <img
            className="screenshot-2024-05-02-at-418"
            loading="lazy"
            alt=""
            src="/screenshot-20240502-at-418-1@2x.png"
          />
          <div className="rectangle-div" />
          <div className="image-grid-row-one-child1" />
          <input className="rectangle-input" type="text" />
        </div>
        <div className="i-earned-rs">
          I earned Rs. 50,000 last month because ..
        </div>
      </div>
    </div>
  );
};

ContentWrapper.propTypes = {
  className: PropTypes.string,
};

export default ContentWrapper;
