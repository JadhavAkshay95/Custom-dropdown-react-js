import React, { useRef, useState, lazy, Suspense } from "react";
import "./App.css";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Header from "./component/Header";
import Home from "./component/Home";
import EmployeeList from "./component/EmplyeeList";
import Form from "./component/Form";
import Forma from "./component/Form";
function App() {
  return (
    <div className="App">
      <div>
        <Suspense fallback={<div>...loading</div>}>
          <Router>
            <Header />
            <Switch>
              <Route path="/" component={Home} exact />
            </Switch>
          </Router>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
