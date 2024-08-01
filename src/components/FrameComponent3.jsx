import PropTypes from "prop-types";
import "./FrameComponent3.css";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <section className={`frame-section ${className}`}>
      <header className="rectangle-parent">
        <div className="instance-child" />
        <div className="samriddh-wrapper">
          <a className="samriddh">Samriddh</a>
        </div>
        <div className="about-us-parent">
          <a className="about-us">About Us</a>
          <a className="products">Products</a>
          <a className="contact-us">Contact Us</a>
          <a className="become-our-partner">Become our Partner</a>
          <a className="login"><button>Login</button></a>
        </div>
      </header>
    </section>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
