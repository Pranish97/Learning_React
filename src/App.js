import './App.css';
import Axios from "axios";
import {useEffect, useState} from "react";

function App() {
  const [generateExcuse,setGenerateExcuse]=useState("");

  const fetchExcuse = (excuse) => {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}/`).then((res)=>{
      setGenerateExcuse(res.data[0].excuse);
  });
  }


  
  

  return (
    <div className="App">
      <h1>Generate Excuses</h1>
      <button onClick={()=>fetchExcuse("party")}>
        Party
      </button>
      <button onClick={()=>fetchExcuse("family")}>
        Family
      </button>
      <button onClick={()=>fetchExcuse("college")}>
        College
      </button>
      <h1>{generateExcuse}</h1>
    </div>
  );
}


export default App;
