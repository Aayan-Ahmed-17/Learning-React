import { useState } from "react";
import "./App.css";
import Square from "./components/Square/Square.jsx";

function App() {

  return (
    <>
      <h1>hello</h1>

      <div className="board-row">
        <Square  />
        <Square  />
        <Square  />
      </div>

      <div className="board-row">
        <Square  />
        <Square  />
        <Square  />
      </div>

      <div className="board-row">
        <Square  />
        <Square  />
        <Square  />
      </div>
    </>
  );
}

export default App;
