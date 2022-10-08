import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

// components
const page1 = () => {
  return (
    <div>
      <a href="http://localhost:3001/two">clickme</a>
      <h1>page One</h1>
    </div>
  );
};
const page2 = () => {
  return (
    <div>
      <a href="http://localhost:3001">clickme</a>
      <h1>page two</h1>
    </div>
  );
};
//

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={page1} />
          <Route path="/two" exact component={page2} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
