import React from "react";
import Header from "./Header";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div>
          <h1>Hello World H1 - Static </h1>
          <p> Check Console {console.log("P tag log")} </p>
        </div>
      </div>
    );
  }
}

export default App;
