import { useEffect, useState } from "react";


// function ApiCalling() {
//     const [user, setUser] = useState(null)
//     const [list, setList] = useState([])
//     const [err, setErr] = useState(false)
//     const [loading, setLoading] = useState("true")
//     useEffect(() => {
//         getData()
//     }, [])

//     async function getData(){
//       try{
//         const res = await fetch("https://jsonplaceholder.typicode.com/users")
//         const data = await res.json()
//         console.log(data)
//         setUser(data)
//       }catch{
//         console.error("not working")
//         setErr(true)
//       }finally{
//         setLoading(false)
//       }
//     }
//   return (
//     <>
//       <h1>hello Api</h1>
//       {user && user.map(({name}, ind) => setList([...list, name]))}
//       {loading && <h2>loading...</h2>}
//       {err && <h2>Error hai bhai</h2>}
//     </>
//   );
// }













function ApiCalling(){
  const [users, setUsers] = useState(null)
  const [loading, setLoading] = useState(true)
  const [err, setErr] = useState(false)

  useEffect(()=>{
    getData()
  }, [])

  async function getData (){
    try{
      const res = await fetch("https://jsonplaceholder.typicode.com/users")
      const data = await res.json()
      setUsers(data)
    }catch{
      console.error("something is not working")
      setErr(true)
    }finally{
      setLoading(false)
    }  
  }

  return (
    <>
      {loading && <h1>loading..</h1>}
      {users && <ul>
        {users.map((item, ind) => <li key={ind}>{item.name}</li>)}
        </ul>
      }
      {err && <h1>Hacker hai bhai</h1>}
    </>
  )
}




export default ApiCalling;
