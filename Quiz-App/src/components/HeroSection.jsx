import { useState, useEffect, useRef } from "react";

function shuffleArr(arr1, arr2) {
  arr1.map((e, i) => {
    let randomNum = Math.floor(Math.random() * 4);
    e.splice(randomNum, 0, arr2[i]);
  });
  return arr1;
}

function HeroSection() {
  const [ques, setQues] = useState(null);
  const [incorrectOpts, setIncorrectOpts] = useState(null);
  const [correctOpt, setCorrectOpt] = useState(null);
  const [opt, setOpt] = useState(null);
  const [index, setIndex] = useState(0);
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState("true");
  const [marks, setMarks] = useState(0);
  const input = useRef([]);

  useEffect(() => {
    getData();
  }, []);

  function checkAnswer() {
    const selectedOpt = input.current.find(
      (item) => item && item.checked
    ).value;
    if (selectedOpt == correctOpt[index]) {
      setMarks(marks + 10);
    }
  }

  function increaseIndexCount() {
    if (index < 9) {
      setIndex(index + 1);
      return;
    } else {
      console.log(marks);
    }
  }

  function handleEvent() {
    checkAnswer();
    increaseIndexCount();
  }

  async function getData() {
    try {
      const res = await fetch("https://the-trivia-api.com/v2/questions");
      const data = await res.json();
      const questions = data.map((e) => e.question.text);
      const incorrectOpt = data.map((e) => e.incorrectAnswers);
      const correctAns = data.map((e) => e.correctAnswer);

      setIncorrectOpts(incorrectOpt);
      setQues(questions);
      setCorrectOpt(correctAns);
      setOpt(shuffleArr(incorrectOpt, correctAns));

      console.log(data);
      console.log(incorrectOpt);
      console.log(correctAns);
    } catch {
      console.error("not working");
      setErr(true);
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className="col-span-9 text-slate-700 grid gap-3">
      <h2 className="text-3xl"> {ques && ques[index]} </h2>

      {opt && (
        <ul className="grid gap-3">
          {opt[index].map((elem, i) => {
            return (
              <li
                key={i}
                className="bg-white text-xl p-6 rounded-xl w-4/5 border-solid border-4 border-[#2c8c72]"
              >
                <input
                  type="radio"
                  name="selectedOption"
                  value={elem}
                  id={i}
                  ref={(el) => (input.current[i] = el)}
                />
                <label htmlFor={i}>{elem}</label>
              </li>
            );
          })}
          <h2 className="text-slate-50 bg-slate-800 text-2xl col-span-1 w-1/5 p-2">
            {marks}
          </h2>
        </ul>
      )}

      <button
        className="btn w-1/5 bg-[#2c8c72] text-white text-lg rounded-full col-span-1"
        onClick={handleEvent}
      >
        Next
      </button>
      {loading && <h2>loading...</h2>}
      {err && <h2>Something went wrong!</h2>}
    </div>
  );
}

export default HeroSection;
