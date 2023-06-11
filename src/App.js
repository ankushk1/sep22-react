import logo from './logo.svg';
import './App.css';
import Component1 from './Components/Component1';
import Component2 from './Components/component2';
import StateComp from './Components/StateComp';

function App() {
  return (
    <div className="App">
      <p>This is App.js</p>
      {/* <Component1/> */}
      <StateComp/>
    </div>
  );
}

export default App;
