import { useState } from 'react';
import './App.css'
import { FaStar } from "react-icons/fa";

const colors={
  orange:'ffba5a',
  yellow:'a9a9a9'
}


const App = () => {
  const [color, setColor] = useState(0)

  function handleClick(value){
       setColor(value)
  }

  return (
    <div className="app">
    <div>
    <h1>Your Honest Review</h1>
    </div>
       <div>
       {
          [...Array(5)].map((_, index)=>(
              <FaStar size={50} key={index}
              color = {color > index ? colors.orange:colors.yellow}
              onClick={()=>handleClick(index+1)}
              />
          ))
        }
       </div>
    </div>
  )
}

export default App