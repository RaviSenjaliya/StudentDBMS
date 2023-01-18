import React from "react";
import VisibilitySensor from "react-visibility-sensor";
import CountUp from "react-countup";
import "../AdvancedERP/AdvancedERP.css";

const Counterscroll = () => {
  return (
    <div>
      <div className=" container-fluid counter">
        <div className="row text-center">
          <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12 ">
            <div className="App">
              <div className="content" />
              <VisibilitySensor partialVisibility offset={{ bottom: 100 }}>
                {({ isVisible }) => (
                  <div id="Counter">
                    <h1> {isVisible ? <CountUp end={96} /> : null}%</h1>
                    <h5>Client Retention</h5>
                  </div>
                )}
              </VisibilitySensor>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12 ">
            <div className="App">
              <div className="content" />
              <VisibilitySensor partialVisibility offset={{ bottom: 100 }}>
                {({ isVisible }) => (
                  <div id="Counter">
                    <h1> {isVisible ? <CountUp end={12} /> : null}</h1>
                    <h5>Years of Service</h5>
                  </div>
                )}
              </VisibilitySensor>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12 ">
            <div className="App">
              <div className="content" />
              <VisibilitySensor partialVisibility offset={{ bottom: 100 }}>
                {({ isVisible }) => (
                  <div id="Counter">
                    <h1> {isVisible ? <CountUp end={1671} /> : null}K</h1>
                    <h5>Students</h5>
                  </div>
                )}
              </VisibilitySensor>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12 ">
            <div className="App">
              <div className="content" />
              <VisibilitySensor partialVisibility offset={{ bottom: 100 }}>
                {({ isVisible }) => (
                  <div id="Counter">
                    <h1> {isVisible ? <CountUp end={4} /> : null}K</h1>
                    <h5>Satisfied Clients</h5>
                  </div>
                )}
              </VisibilitySensor>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counterscroll;
