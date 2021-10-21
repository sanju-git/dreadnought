import React from "react";
import { FaRegBookmark } from "react-icons/fa";
import { VscAccount, VscMilestone } from "react-icons/vsc";
import { FiLogOut } from "react-icons/fi";
import AccountView from "./AccountView";
import CoursesView from "./CoursesView";
import MilestonesView from "./MilestonesView";

class Leftnav extends React.Component {
  constructor(props) {
    super(props);
    this.state = { view: "courses" };
  }

  viewCourses = () => {
    this.setState({ view: "courses" });
  };

  viewMilestones = () => {
    this.setState({ view: "milestones" });
  };

  viewAccount = () => {
    this.setState({ view: "account" });
  };

  getView = () => {
    let { view } = this.state;
    if (view === "courses") {
      return <CoursesView />;
    } else if (view === "milestones") {
      return <MilestonesView />;
    } else if (view === "account") {
      return <AccountView />;
    }
  };

  render() {
    let { view } = this.state;
    return (
      <div className="row">
        <div className="col-md-3">
          <div className="leftnav">
            <div className="logo-container">
              <img
                style={{ width: "210px" }}
                src="assets/images/logo.png"
              ></img>
            </div>
            <hr style={{ color: "white" }} />
            <div className="options-list">
              <div
                onClick={this.viewCourses}
                className={view === "courses" ? "active option" : "option"}
              >
                <FaRegBookmark />
                <div className="ml-1">Courses</div>
              </div>
              <div
                onClick={this.viewMilestones}
                className={view === "milestones" ? "active option" : "option"}
              >
                <VscMilestone />
                <div className="ml-1">Milestones</div>
              </div>
              <div
                onClick={this.viewAccount}
                className={view === "account" ? "active option" : "option"}
              >
                <VscAccount />
                <div className="ml-1">Account</div>
              </div>
              <div className="option">
                <FiLogOut />
                <div className="ml-1">Log out</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div style={{ marginTop: 60 }}>{this.getView()}</div>
        </div>
      </div>
    );
  }
}

export default Leftnav;
