import React from "react";
import "../styles/app.css";
import MainContainer from "./main-container";
class App extends React.Component{
  render(){
    return(
      <div className="App">
        {/* add header here */}
        <MainContainer/>
        {/* add footer here */}
      </div>
    );
  }
}

export default App;