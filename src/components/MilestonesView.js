import React from "react";
import { FaCheck } from "react-icons/fa";
class MilestonesView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container d-flex justify-content-center align-items-center">
        <div>
          <div className="progresses">
            <div className="d-flex align-items-centerr">
              <div className="steps">
                <span>
                  <FaCheck />
                </span>
              </div>
              <div className="ml-2 mt-2">
                <span>Y Combinator Startup School Certification</span>
              </div>
            </div>
            <div style={{ marginLeft: 17 }}>
              <div className="line"></div>
            </div>
          </div>
          <div className="progresses">
            <div className="d-flex align-items-centerr">
              <div className="steps">
                <span>
                  <FaCheck />
                </span>
              </div>
              <div className="ml-2 mt-2">
                <span>Greater than 100 followers on LinkedIn Company Page</span>
              </div>
            </div>
            <div style={{ marginLeft: 17 }}>
              <div className="line"></div>
            </div>
          </div>
          <div className="progresses">
            <div className="d-flex align-items-centerr">
              <div className="steps">
                <span>
                  <FaCheck />
                </span>
              </div>
              <div className="ml-2 mt-2">
                <span>Greater than 50 followers on Twitter Company Page</span>
              </div>
            </div>
            <div style={{ marginLeft: 17 }}>
              <div className="line"></div>
            </div>
          </div>
          <div className="progresses">
            <div className="d-flex align-items-centerr">
              <div className="steps">
                <span>
                  <FaCheck />
                </span>
              </div>
              <div className="ml-2 mt-2">
                <span>AWS Activate Credits</span>
              </div>
            </div>
            <div style={{ marginLeft: 17 }}>
              <div className="line"></div>
            </div>
          </div>
          <div className="progresses">
            <div className="d-flex align-items-centerr">
              <div className="steps">
                <span>
                  <FaCheck />
                </span>
              </div>
              <div className="ml-2 mt-2">
                <span>GCP Startup Credits</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MilestonesView;
