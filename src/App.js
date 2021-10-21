import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import CourseView from "./components/CourseView";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Dashboard}></Route>
        <Route exact path="/course/:courseId" component={CourseView}></Route>
      </Switch>
    </Router>
  );
}

export default App;
