import React from "react";
import "../styles/app.css";
import MainContainer from "./module/common/main-container";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div id="header" className="header">
          <div className="title">
					  Finding Falcone
          </div>
        </div>
        <MainContainer/>
        <div className="footer"></div>
      </div>
    );
  }
}

export default App;