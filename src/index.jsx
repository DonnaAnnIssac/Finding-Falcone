import React from "react";
import ReactDOM from "react-dom";
import { browserHistory, Router } from "react-router";
import routes from "./react/config/routes";
// import App from "./react/app";

ReactDOM.render(<Router history={browserHistory}>{routes}</Router>, document.getElementById("root"));