import PropTypes from "prop-types";
import "./FrameComponent2.css";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <section className={`kendra-info-wrapper ${className}`}>
      <div className="kendra-info">
        <div className="kendra-title">
          <h2 className="why-did-we-container">
            <span>{`Why did we start `}</span>
            <span className="samriddh-kendra">Samriddh Kendra</span>
            <span> ?</span>
          </h2>
        </div>
        <div className="vision-mission-purpose">
          <div className="v-m-p-container">
            <div className="frame-group">
              <div className="frame-container">
                <div className="img-7987-parent">
                  <div className="img-7987" />
                  <div className="vision">{`VISION `}</div>
                  <div className="to-be-the">
                    To be the most trusted and loved insurance and benefits
                    provider in the world
                  </div>
                </div>
                <div className="img-7987-group">
                  <div className="img-79871" />
                  <div className="mission">MISSION</div>
                  <div className="to-ensure-10">
                    To ensure 10 million lives by 2025
                  </div>
                </div>
                <div className="img-7987-container">
                  <div className="img-79872" />
                  <div className="purpose">PURPOSE</div>
                  <div className="to-positively-impact">
                    To positively impact the health and financial wellbeing of
                    every human
                  </div>
                </div>
              </div>
              <h2 className="why-did-we-container1">
                <span>{`Why did we start `}</span>
                <span className="samriddh-kendra1">Samriddh Kendra</span>
                <span> ?</span>
              </h2>
            </div>
            <div className="circle-parent">
              <div className="circle" />
              <img
                className="screenshot-2024-06-26-at-613-icon"
                loading="lazy"
                alt=""
                src="/screenshot-20240626-at-61342-pmremovebgpreview-1@2x.png"
              />
            </div>
          </div>
          <div className="team-container-wrapper">
            <div className="team-container">
              <div className="team-container-child" />
              <div className="team-info">
                <div className="frame-div">
                  <div className="frame-wrapper">
                    <img
                      className="group-icon"
                      loading="lazy"
                      alt=""
                      src="/group-1171280061.svg"
                    />
                  </div>
                  <div className="founder-details">
                    <div className="founder-title-container-wrapper">
                      <div className="founder-title-container">
                        <div className="founder-one-name">{`2018 `}</div>
                      </div>
                    </div>
                    <div className="founded">
                      <ul className="founded1">
                        <li>Founded</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="experience-container-wrapper">
                <div className="experience-container">
                  <div className="experience-details">
                    <div className="line-parent1">
                      <div className="frame-child11" />
                      <img
                        className="frame-child12"
                        loading="lazy"
                        alt=""
                        src="/group-1171280062.svg"
                      />
                    </div>
                  </div>
                  <div className="company-title-parent">
                    <div className="company-title">
                      <div className="company-container">
                        <div className="company-name">{`2019-2022 `}</div>
                      </div>
                    </div>
                    <div className="worked-with-phonepe-container">
                      <ul className="worked-with-phonepe-bharatpe">
                        <li className="worked-with-phonepe">
                          Worked with phonepe, Bharatpe, Amazon pay, Airtel,
                          etc. for merchant and customer acquisition in bihar,
                          Jharkhand, West Bengal, Orissa, Uttar Pradesh and NESA
                        </li>
                        <li>On Boarded 21L merchants</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pivot-container-parent">
                <div className="pivot-container">
                  <div className="pivot-details">
                    <div className="pivot-details-inner">
                      <div className="frame-parent1">
                        <img
                          className="frame-child13"
                          loading="lazy"
                          alt=""
                          src="/group-1171280063.svg"
                        />
                        <div className="pivot-placeholder">
                          <div className="div">2023</div>
                        </div>
                      </div>
                    </div>
                    <div className="polygon-parent">
                      <img
                        className="polygon-icon"
                        alt=""
                        src="/polygon-2.svg"
                      />
                      <img
                        className="frame-child14"
                        loading="lazy"
                        alt=""
                        src="/polygon-1.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="pivoted-to-a-container">
                  <ul className="pivoted-to-a-dsa-model-to-leve">
                    <li className="pivoted-to-a">
                      Pivoted to a DSA model to leverage the existing merchant
                      base
                    </li>
                    <li>Disbursed loan amounting to INR 5Cr (3 months)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
