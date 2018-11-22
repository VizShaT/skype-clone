import React from "react";
import ReactDOM from "react-dom";
import Sidebar from "../Sidebar";
import Main from "../Main";
import store from "./store";
import _ from "lodash";

import "./index.css";

function App() {
  const { contacts } = store.getState();
  return (
    <div className="App">
      <Sidebar contacts={_.values(contacts)} />
      <Main />
    </div>
  );
}

export default App;
