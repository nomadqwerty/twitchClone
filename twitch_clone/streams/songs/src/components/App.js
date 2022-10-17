import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import StreamCreate from "./streamsCrud/streamCreate";
import StreamRead from "./streamsCrud/streamRead";
import StreamEdit from "./streamsCrud/streamUpdate";
import StreamDelete from "./streamsCrud/streamDel";
import StreamList from "./streamsCrud/streamReadAll";
import Header from "./Header";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/new" exact component={StreamCreate} />
          <Route path="/streams/edit" exact component={StreamEdit} />
          <Route path="/streams/delete" exact component={StreamDelete} />
          <Route path="/streams/show" exact component={StreamRead} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
