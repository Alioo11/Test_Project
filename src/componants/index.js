import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import MainPage from "./MainPage/MainPage";
import SecondPage from "./secondPage/secondPage";
import ThiredPage from "./ThirdPage/ThirdPage";
import FourthPage from "./fourthPage/FourthPage";

function Index() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <MainPage />
        </Route>
        <Route exact path='/register'>
          <SecondPage />
        </Route>
        <Route exact path='/FAQ'>
          <ThiredPage />
        </Route>
        <Route exact path='/contact-us'>
          <FourthPage />
        </Route>
        <Route path='*'>
          <div>
            <h1>error page</h1>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default Index;
