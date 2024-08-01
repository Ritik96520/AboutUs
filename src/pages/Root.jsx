import FrameComponent3 from "../components/FrameComponent3";
import ContentWrapper from "../components/ContentWrapper";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import Contact from "../components/Contact";
import "./Root.css";

const Root = () => {
  return (
    <div className="root">
      <main className="macbook-pro-14-4">
        <FrameComponent3 />
        <div className="wrapper">
          <blockquote className="blockquote">
            <p className="p">{`"ग्रामीण भारत को समृद्ध   `}</p>
            <p className="p1"> और सशक्त बनाएं"</p>
          </blockquote>
        </div>
        <div className="macbook-pro-14-4-child" />
        <ContentWrapper />
        <section className="frame-parent">
          <div className="line-wrapper">
            <img className="frame-child" alt="" src="/line-336.svg" />
          </div>
          <img className="frame-item" alt="" src="/line-337.svg" />
        </section>
        <section className="macbook-pro-14-4-inner">
          <div className="line-parent">
            <img className="frame-inner" alt="" src="/line-349.svg" />
            <div className="line-container">
              <img className="line-icon" alt="" src="/line-350.svg" />
            </div>
          </div>
        </section>
        <FrameComponent2 />
        <FrameComponent1 />
        <FrameComponent />
        <Contact />
      </main>
    </div>
  );
};

export default Root;
