import './App.css';

function App() {
  
  return (
    <div className="App">
      <Job company="Facebook" salary={2000000} position ="Project Manager" />
      <Job  company="Instagram" salary={5000000} position ="Senior Developer" />
      <Job  company="Google" salary={10000000} position ="Senior Developer" />
    </div>
  );
}

function Job(props){
  return (
    <div>
      <h1>{props.company}</h1>
      <h2>{props.salary}</h2>
      <h3>{props.position}</h3>
  </div>
  );
};

export default App;
