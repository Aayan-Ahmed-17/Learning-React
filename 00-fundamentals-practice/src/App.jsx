/*

?I will practice all these stuff mentioned below
*=> func component
*=> hooks
*=> conditional Rendering
*=> List & keys using map()
*=> Event Handling



*/

import { useState } from "react";
// import Card from "./components/card/card.jsx";

// //in PascalCase //Parent component
// function AppComponent() {
//   return (
//     <>
//       <Greet />
//       <p>This is my first code</p>
//       <HooksComponent />
//     </>
//   );
// }

// // nested component
// function Greet() {
//   return (
//     <>
//       <h1>Hello World</h1>
//     </>
//   );
// }

// //hooks in Func
// function HooksComponent(){
//   const [count, setCount] = useState(0)

//   function handleEvent(){
//     setCount(count + 1)
//   }

//   return (
//     <>
//     <button onClick={handleEvent}>click </button>
//     <p>{count}</p>
//     </>
//   )
// }

//! until now we have created one count and using every where the same one But now we have create Counters that update separately
// function App() {
//     const [counter, setCounter] = useState(0);

//     function handleEvent() {
//       setCounter(counter + 1);
//     }

//     return (
//       <>
//         <button onClick={handleEvent}>click {counter}</button>
//       </>
//     );

// } //* done

//*Conditional Rendering
// function App() {

//   return (
//     <>
//       {/* <div>{!count ? <Card /> : console.log(0)}</div> */}
//     </>
//   );
// }
const Btn = ({title}) =>{

  useEffect(()=>{
    console.log("component mounted")
  }, [])

  return(
    <>
      <h1>{title}</h1>
    </>
  )
} 



const App = () => {
  const [show, setShow] = useState(false)
  return(
    <>
      <h1>App</h1>
      <div>
        <button onClick={() => setShow(!show)}>{show ? 'Off' : "on"}</button>
      </div>
      {show ? <Btn title = "add to cart" /> : "nahin kr raha"}
    </>
  )
}


export default App;