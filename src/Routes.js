import React from "react";
import { Switch, Route } from "react-router-dom";
import Description from "./Pages/Description/Description";
import Home from "./Pages/Home/Home";

const Main = () => {
  return (
    <Switch>
      {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/description" component={Description}></Route>
    </Switch>
  );
};

export default Main;
