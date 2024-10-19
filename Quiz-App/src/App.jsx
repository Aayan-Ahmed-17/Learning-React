import { useEffect, useState } from "react";
import Navbar from "./components/navbar";
import MainContent from "./components/MainContent";
import HeroSection from "./components/HeroSection";

// function shuffleArr(arr1, arr2) {
//   arr1.map((e, i) => {
//     let randomNum = Math.floor(Math.random() * 4);
//     e.splice(randomNum, 0, arr2[i]);
//   });
//   return arr1;
// }

// function App() {
//   const [ques, setQues] = useState(null);
//   const [incorrectOpts, setIncorrectOpts] = useState(null);
//   const [correctOpt, setCorrectOpt] = useState(null);
//   const [opt, setOpt] = useState(null);
//   const [index, setIndex] = useState(0);
//   const [err, setErr] = useState(false);
//   const [loading, setLoading] = useState("true");

//   useEffect(() => {
//     getData();
//   }, []);

//   function increaseIndexCount() {
//     setIndex(index + 1);
//   }

//   async function getData() {
//     try {
//       const res = await fetch("https://the-trivia-api.com/v2/questions");
//       const data = await res.json();
//       const questions = data.map((e) => e.question.text);
//       const incorrectOpt = data.map((e) => e.incorrectAnswers);
//       const correctAns = data.map((e) => e.correctAnswer);

//       setIncorrectOpts(incorrectOpt);
//       setQues(questions);
//       setCorrectOpt(correctAns);
//       setOpt(shuffleArr(incorrectOpt, correctAns));

//       console.log(data);
//       console.log(incorrectOpt);
//       console.log(correctAns);
//     } catch {
//       console.error("not working");
//       setErr(true);
//     } finally {
//       setLoading(false);
//     }
//   }
//   return (
//     <>
//       {opt && (
//         <ul>
//           <li>{setOpt[index]}</li>
//         </ul>
//       )}

//       {incorrectOpts && (
//         <ul>
//           {incorrectOpts[index].map((elem, i) => {
//             return <li key={i}>{elem}</li>;
//           })}
//         </ul>
//       )}
//       <button className="btn btn-accent text-white text-lg rounded-full col-span-1" onClick={increaseIndexCount}>Next</button>
//       {loading && <h2>loading...</h2>}
//       {err && <h2>Error hai bhai</h2>}
//     </>
//   );
// }

function App() {
  return (
    <>
      <Navbar />
      <MainContent />;
    </>
  )
}

export default App;
