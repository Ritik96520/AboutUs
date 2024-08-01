import PropTypes from "prop-types";
import "./Contact.css";

const Contact = ({ className = "" }) => {
  return (
    <section className={`contact ${className}`}>
      <div className="contact-details">
        <h2 className="contact-us1">Contact us</h2>
        <div className="contact-form">
          <div className="form-container">
            <div className="form-container-child" />
            <div className="get-in-touch-parent">
              <h2 className="get-in-touch">{`Get in Touch `}</h2>
              <div className="please-call-or-text-us-and-ou-wrapper">
                <div className="please-call-or">
                  Please call or text us, and our team will get in touch with
                  you as soon as possible to assist you.
                </div>
              </div>
            </div>
            <div className="input-fields">
              <input
                className="input-labels"
                placeholder="Enter your name "
                type="text"
              />
              <input
                className="input-labels1"
                placeholder="Phone Number"
                type="text"
              />
              <input
                className="input-labels2"
                placeholder="Enter Your Email Address"
                type="text"
              />
              <div className="submit-button">
                <textarea
                  className="submit-button-child"
                  placeholder="Enquiry"
                  rows={10}
                  cols={28}
                />
                <div className="social-icons">
                  <div className="icons-row-one">
                    <button className="icons-row-two">
                      <div className="submit">Submit</div>
                    </button>
                  </div>
                  <div className="icons-row-three">
                    <div className="icons-row-four">
                      <div className="icons-row-four-child" />
                      <div className="social-one" />
                      <div className="social-two" />
                      <img
                        className="screenshot-2024-06-26-at-632-icon"
                        loading="lazy"
                        alt=""
                        src="/screenshot-20240626-at-63209-pmremovebgpreview-1@2x.png"
                      />
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

Contact.propTypes = {
  className: PropTypes.string,
};

export default Contact;
