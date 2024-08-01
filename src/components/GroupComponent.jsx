import { useMemo } from "react";
import PropTypes from "prop-types";
import "./GroupComponent.css";

const GroupComponent = ({
  className = "",
  memberStatusOne,
  sumanSaurav,
  founderAndCEO,
  propMinWidth,
}) => {
  const groupDivStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className={`rectangle-group ${className}`} style={groupDivStyle}>
      <div className="frame-child15" />
      <div className="frame-child16" />
      <div className="ellipse-div" />
      <div className="frame-child17" />
      <img className="ellipse-icon" alt="" src="/ellipse-430@2x.png" />
      <div className="suman-saurav">Suman Saurav</div>
      <div className="founder-and-ceo">Founder and CEO</div>
      <div className="hello-lorem-ipsum">
        Hello, Lorem ipsum lorem ipsum lorem ipsum lorem ipsum
      </div>
      <div className="frame-child18" />
      <div className="card-content-one-wrapper">
        <div className="card-content-one">
          <div className="member-avatars-one" />
          <div className="member-info-one">
            <div className="designation-icons-one" />
            <img
              className="member-status-one"
              loading="lazy"
              alt=""
              src={memberStatusOne}
            />
          </div>
        </div>
      </div>
      <div className="member-details-one">
        <div className="member-details-one-child" />
        <div className="member-names-one">
          <div className="member-positions-one">
            <div className="suman-saurav-wrapper">
              <div className="suman-saurav1">{sumanSaurav}</div>
            </div>
            <div className="founder-and-ceo1">{founderAndCEO}</div>
          </div>
        </div>
        <div className="hello-lorem-ipsum1">
          Hello, Lorem ipsum lorem ipsum lorem ipsum lorem ipsum
        </div>
      </div>
    </div>
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,
  memberStatusOne: PropTypes.string,
  sumanSaurav: PropTypes.string,
  founderAndCEO: PropTypes.string,

  /** Style props */
  propMinWidth: PropTypes.any,
};

export default GroupComponent;
