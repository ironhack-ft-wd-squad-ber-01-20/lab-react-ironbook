import React from "react";

import "./App.css";
import users from "./users.json";
import IronBooks from "./components/IronBooks";

function App() {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "80%"
      }}
    >
      <IronBooks users={users} />
    </div>
  );
}

export default App;
