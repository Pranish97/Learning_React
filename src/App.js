import './App.css';
import {User} from './User';
import {Planet} from './Planet';

function App() {
  const age = 18;
  const isGreeen = false;
  const users = [
    {name:"Pranish" , age:"21"},
    {name:"Ram" , age:"21"},
    {name:"Hary" , age:"21"}

  ];
  const planets = [
    {name:"Mars" , isGasPlanet:true},
    {name:"Earth" , isGasPlanet:true},
    {name:"Juipter" , isGasPlanet:false},
    {name:"Venus" , isGasPlanet:true},
    {name:"Neptune" , isGasPlanet:false},
  ];
  
  return (
    // Ternary Operators
    // <div className="App">
    //   {age >= 18 ? <h1>You are in</h1> :  <h1>You are not in</h1>}
    //   <h1 style= {{color : isGreeen ? "green" : "red"}}>This is a color</h1>
    //   {isGreeen && <button>A button</button>}
    // </div>
  // );
  
  <div className="App">
  {/* {planets.map((planet, key) => {
   if(planet.isGasPlanet) return <h1>{planet.name}</h1>;
  })} */}
  {planets.map((planet, key) => 
  planet.isGasPlanet && <h1>{planet.name}</h1>
   
  )}
</div>
  );
}






export default App;
