import { useState } from "react"

function ToDo() {
    const [val, setVal] = useState("") 

    return(
        <>
            <h1>TODO App</h1>
            <input type="text" />
            <button>Add ToDo</button>
        </>
    )
}
export default ToDo