import React from "react";
import { NavLink } from "react-router-dom";
import Courses from "./../data/Courses.json";

class CoursesView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.setState({ courses: Courses });
  }

  //   openCourse = (courseId) => {
  //     props.history.push("/course/" + courseId);
  //   };

  render() {
    let { courses = [] } = this.state;
    if (courses.length >= 1) {
      return (
        <div className="row p-2">
          <div>
            <h4 className="float-left">Your Courses</h4>
          </div>
          <hr />
          {courses.map((course) => (
            <div className="card col-md-3 mr-2 my-2">
              <NavLink
                style={{ textDecoration: "none" }}
                to={"/course/" + course.id}
              >
                <div>
                  <div className="course-tile">
                    <h5>{course.name}</h5>
                  </div>
                  <hr />
                  <div className="mt-1 course-details">
                    <div style={{ float: "left" }}>
                      <label className="title">{"Rating : "} </label>
                      &nbsp;
                      <label>{course.rating}</label>
                    </div>
                    <br />
                    <div style={{ float: "left" }} className="mentor">
                      <label className="title">{"Mentor : "} </label>
                      &nbsp;
                      <label>{course.mentor}</label>
                    </div>
                  </div>
                  <br/>
                  <div className="progress my-3">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: course.progress + "%" }}
                      aria-valuenow={course.progress}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      {course.progress + "%"}
                    </div>
                  </div>
                </div>
              </NavLink>
            </div>
          ))}
        </div>
      );
    } else {
      return <div>You have not subscribed to any courses</div>;
    }
  }
}

export default CoursesView;
