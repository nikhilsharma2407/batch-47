import logo from './logo.svg';
import './App.css';

// js + html = JSX


function App() {
  const name = "Nikhil";

  const greet = (e)=>{
    alert(`hello ${name}`)
  }

  return (
  <div>
    Hello { name }
    <button onClick={greet}> Greet</button>
  </div>)
}

export default App;
