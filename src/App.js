import React,{useState} from 'react'
import data from "./data"
import List from './List'
import "./App.css"

function App() {

  const [people,setPeople] = useState(data)
const handleChange=()=>{
  setPeople([])
}


  return (
    <main>
      <section className="container">
        <h3> {`${people.length} birthday today`}</h3>
      <List people={people}/>
        <button onClick={handleChange}> <span>Clear All </span>  </button>
      </section>
    </main>
  )
}

export default App
