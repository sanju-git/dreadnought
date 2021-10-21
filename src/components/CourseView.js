import React from "react";
import { FaArrowLeft, FaFile } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Courses from "./../data/Courses.json";

class CourseView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    let { courseId } = this.props.match.params;
    let course = Courses.find((course) => course.id === courseId);
    this.setState({ course });
  }

  render() {
    let { course = {} } = this.state;
    return (
      <div style={{ height: "100vh" }} className="blue-bg">
        <div>
          <NavLink to="/">
            <div
              style={{
                marginLeft: 50,
                color: "white",
                fontSize: 25,
              }}
            >
              <FaArrowLeft />
            </div>
          </NavLink>
          <div className="d-flex align-items-center justify-content-center">
            <div style={{ marginTop: 60 }} className="course-title">
              <h4>{course.name}</h4>
            </div>
          </div>
          <div className="mt-5 d-flex align-items-center justify-content-center">
            <div style={{ width: "40%" }} className="card">
              {course.chapters && (
                <div>
                  {course.chapters.map((chapter) => (
                    <div className="d-flex align-items-center justify-content-between mt-2 chapter-list">
                      <div>
                        <FaFile />
                      </div>
                      <div className="ml-2 ">{"Chapter " + chapter}</div>

                      <div>
                        <button
                          style={{ float: "right" }}
                          className="btn btn-primary btn-sm"
                        >
                          Start
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CourseView;
