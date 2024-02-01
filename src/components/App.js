import logo from '../logo.svg';
import './App.css';
import Roster from "./Roster";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
        <h1>Roster</h1>
      <Roster></Roster>
    </div>
  );
}

export default App;
