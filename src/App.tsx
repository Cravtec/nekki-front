import { useState } from 'react'
import './App.css'
import { useQuery } from "react-query";

function App() {
  const [count, setCount] = useState(0)
  const { data: message, isSuccess } = useQuery("/");

  if (!isSuccess) {
    return <div> no message</div>;
  }

  console.log(message)

  return (
    <div className="App">
      <header className="App-header">
        <p>{message.message}</p>
        <p>Hello World from React !!!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
      </header>
    </div>
  )
}

export default App
