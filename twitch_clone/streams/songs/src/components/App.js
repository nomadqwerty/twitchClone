import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

// components
const page1 = () => {
  return (
    <div>
      <Link to="/two">clickme </Link>

      <Link to="/three">clickme3</Link>
      <h1>page One</h1>
    </div>
  );
};
const page2 = () => {
  return (
    <div>
      <Link to="/">clickme</Link>
      <h1>page two</h1>
    </div>
  );
};
const page3 = () => {
  return (
    <div>
      <Link to="/">clickme</Link>
      <h1>page three</h1>
    </div>
  );
};
//

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" component={page1} />
          <Route path="/two" exact component={page2} />
          <Route path="/three" exact component={page3} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
