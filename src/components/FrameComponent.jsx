import PropTypes from "prop-types";
import "./FrameComponent.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <section className={`impact-content-wrapper ${className}`}>
      <div className="impact-content">
        <h2 className="want-to-create-container">
          <span className="want-to-create-container1">
            <span>{`Want to create an Impact? `}</span>
            <span className="join-samriddh-kendra">{`Join Samriddh Kendra for building a Samriddh Bharat `}</span>
          </span>
        </h2>
        <div className="join-options">
          <div className="option-categories-parent">
            <div className="option-categories">
              <div className="option-cards">
                <div className="option-content">
                  <img
                    className="option-icons"
                    alt=""
                    src="/option-icons.svg"
                  />
                  <img
                    className="option-content-child"
                    loading="lazy"
                    alt=""
                    src="/vector-415.svg"
                  />
                  <img
                    className="option-dividers-icon"
                    loading="lazy"
                    alt=""
                    src="/vector-416.svg"
                  />
                </div>
              </div>
              <div className="option-details">
                <div className="option-details-child" />
                <img
                  className="benefit-highlight-icon"
                  loading="lazy"
                  alt=""
                  src="/rectangle-62384@2x.png"
                />
                <div className="benefit-description">
                  <div className="benefit-list">
                    <div className="benefit-items">
                      <div className="benefit-types">
                        <div className="as-employee">As Employee</div>
                      </div>
                      <div className="benefits">Benefits</div>
                    </div>
                    <button className="join-buttons">
                      <div className="join">Join</div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="option-categories1">
              <div className="option-categories-inner">
                <div className="vector-parent">
                  <img className="vector-icon" alt="" src="/option-icons.svg" />
                  <img
                    className="frame-child40"
                    loading="lazy"
                    alt=""
                    src="/vector-415.svg"
                  />
                  <img
                    className="frame-child41"
                    loading="lazy"
                    alt=""
                    src="/vector-416.svg"
                  />
                </div>
              </div>
              <div className="rectangle-parent3">
                <div className="frame-child42" />
                <img
                  className="rectangle-icon"
                  loading="lazy"
                  alt=""
                  src="/rectangle-62385@2x.png"
                />
                <div className="frame-wrapper5">
                  <div className="frame-parent3">
                    <div className="frame-wrapper6">
                      <div className="frame-parent4">
                        <div className="as-partner-wrapper">
                          <div className="as-partner">As Partner</div>
                        </div>
                        <div className="benefits1">Benefits</div>
                      </div>
                    </div>
                    <button className="join-wrapper">
                      <div className="join1">Join</div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
