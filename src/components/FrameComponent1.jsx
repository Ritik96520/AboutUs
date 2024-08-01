import GroupComponent from "./GroupComponent";
import PropTypes from "prop-types";
import "./FrameComponent1.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <section className={`team-header-wrapper ${className}`}>
      <div className="team-header">
        <h2 className="the-team-behind">The Team Behind Samriddh Kendra</h2>
        <div className="team-members">
          <div className="member-cards-one-parent">
            <div className="member-cards-one">
              <GroupComponent
                memberStatusOne="/ellipse-430@2x.png"
                sumanSaurav="Suman Saurav"
                founderAndCEO="Founder and CEO"
              />
              <div className="rectangle-container">
                <div className="frame-child19" />
                <div className="frame-child20" />
                <div className="frame-child21" />
                <div className="frame-child22" />
                <img
                  className="frame-child23"
                  alt=""
                  src="/ellipse-430@2x.png"
                />
                <div className="suman-saurav2">Suman Saurav</div>
                <div className="founder-and-ceo2">Founder and CEO</div>
                <div className="hello-lorem-ipsum2">
                  Hello, Lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                </div>
                <div className="frame-child24" />
                <div className="frame-wrapper1">
                  <div className="ellipse-parent">
                    <div className="frame-child25" />
                    <div className="ellipse-group">
                      <div className="frame-child26" />
                      <img
                        className="frame-child27"
                        loading="lazy"
                        alt=""
                        src="/ellipse-436-1@2x.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="rectangle-parent1">
                  <div className="frame-child28" />
                  <div className="frame-wrapper2">
                    <div className="bipul-kumar-parent">
                      <div className="bipul-kumar">Bipul Kumar</div>
                      <div className="co-founder-wrapper">
                        <div className="co-founder">Co-founder</div>
                      </div>
                    </div>
                  </div>
                  <div className="hello-lorem-ipsum3">
                    Hello, Lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                  </div>
                </div>
              </div>
              <GroupComponent
                memberStatusOne="/ellipse-436-2@2x.png"
                sumanSaurav="Rajesh Mishra"
                founderAndCEO="CBO- Distribution Head"
                propMinWidth="20rem"
              />
            </div>
            <div className="member-cards-two-wrapper">
              <div className="member-cards-two">
                <GroupComponent
                  memberStatusOne="/ellipse-436-3@2x.png"
                  sumanSaurav="Yashwardhan Parwal"
                  founderAndCEO="Strategy and Product -head"
                  propMinWidth="17.375rem"
                />
                <div className="group-div">
                  <div className="frame-child29" />
                  <div className="frame-child30" />
                  <div className="frame-child31" />
                  <div className="frame-child32" />
                  <img
                    className="frame-child33"
                    alt=""
                    src="/ellipse-430@2x.png"
                  />
                  <div className="suman-saurav3">Suman Saurav</div>
                  <div className="founder-and-ceo3">Founder and CEO</div>
                  <div className="hello-lorem-ipsum4">
                    Hello, Lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                  </div>
                  <div className="frame-child34" />
                  <div className="frame-wrapper3">
                    <div className="ellipse-container">
                      <div className="frame-child35" />
                      <div className="ellipse-parent1">
                        <div className="frame-child36" />
                        <img
                          className="frame-child37"
                          loading="lazy"
                          alt=""
                          src="/ellipse-437@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                  <img
                    className="frame-child38"
                    alt=""
                    src="/ellipse-436-3@2x.png"
                  />
                  <div className="rectangle-parent2">
                    <div className="frame-child39" />
                    <div className="frame-wrapper4">
                      <div className="frame-parent2">
                        <div className="vishal-chopra-wrapper">
                          <div className="vishal-chopra">Vishal Chopra</div>
                        </div>
                        <div className="strategy-and-product">
                          Strategy and Product -head
                        </div>
                      </div>
                    </div>
                    <div className="hello-lorem-ipsum5">
                      Hello, Lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                    </div>
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

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
