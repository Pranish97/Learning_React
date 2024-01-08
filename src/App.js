import './App.css';
import {useState} from "react"

function App() {

  // const [textColor, setTextColor] = useState("black");
  const [count,setCount] = useState(0);

  const increaseCount = ()=>{
    setCount(count+1);
  }

  const decreaeCount = ()=>{
    setCount(count-1);
  }

  const setZero = ()=>{
    setCount(0);
  }
  
  return (
  <div className="App">
    {/* <button onClick={()=>{
      setTextColor(textColor === "black" ? "red": "black");
    }}>
    Change Color
    </button>
     <h1 style={{color:textColor}}>This is text</h1> */}
     <button onClick={increaseCount}>Increase</button>
     <button onClick={decreaeCount}>Decrease</button>
     <button onClick={setZero}>Set To Zero</button>
     {count}
</div>
  );
}


export default App;
