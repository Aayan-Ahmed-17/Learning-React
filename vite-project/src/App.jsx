import { useState } from "react";

function App() {
  console.log("hello");
  let [num, setNum] = useState(0)

  function addCounter(){
    console.log("counter added");
    setNum(++num)
    console.log(num);
  }

  function decCounter(){
    if (num > 0) {
      console.log("counter decreased")
      setNum(--num)
      console.log(num)
    }
  }

  return(
    <>
      <h1>Hello world</h1>
      <h1>{num}</h1>
      <button onClick={addCounter}>add Counter </button>
      <button onClick={decCounter}>decrease Counter </button>
    </>
  )
}
export default App;
