import { useState } from "react";

function Square({value, onSquareClick}) {
  const [val, setVal] = useState(null)

  function handleClick() {
      setVal("x")
  }

  return (
    <button className="square" onClick={handleClick}>{val}</button>
  );
}

export default Square;
