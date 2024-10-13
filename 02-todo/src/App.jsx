import { useState } from "react";

function App() {
  const [text, updateText] = useState("");
  const [todo, setTodo] = useState([]);

  function addTodo(event) {
    event.preventDefault();
    todo.push(text);
    setTodo([...todo]);
    updateText("");
  }

  function deleteTodo(id) {
    const newTodos = todo.filter((_, i) => i !== id);
    setTodo(newTodos);
  }

  return (
    <>
      <h1>ToDo</h1>
      <form onSubmit={addTodo}>
        <input
          type="text"
          onChange={(e) => updateText(e.target.value)}
          value={text}
        />
        <button type="submit">Add Todo</button>
      </form>

      <ul>
        {todo.map((elem, index) => {
          return (
            <>
              <li key={index}>  {elem} </li>
              <button onClick={() => deleteTodo(index)}>Delete</button>
            </>
        );
        })}
      </ul>
    </>
  );
}

export default App;

