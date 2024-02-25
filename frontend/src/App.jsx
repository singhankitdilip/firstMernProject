import { useEffect, useState } from 'react'
import './App.css'
import axios from "axios"

function App() {
  const [store, setStore] = useState([])

useEffect(()=>{
  axios.get("api/store")
  .then((Response)=>{
    setStore(Response.data)
  })
  .catch((error)=>{
console.log(error);
  })
})

  return (
    <>
      <h1>store</h1>
      <p>we used express where we made api and in frontend we used react app and learn about proxy and fetched data with axios .</p>
      <p>Total Books :{store.length}</p>

      {
        store.map((store, index) => (
          <div style={{background:"teal", borderRadius:"5px"}} key={store.id}>
            <h3>{store.bookname}</h3>
            <p>{store.Price}</p>
          </div>
        ))
      }
    </>
  )
}

export default App
