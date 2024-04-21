import logo from './logo.svg';
import './App.css';
import ClassComponent from './ClassComponent';
import { useState } from 'react';
import FunctionalComponent from './FunctionalComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import Flexbox from './Flexbox';
import BootstrapDemo from './BootstrapDemo';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import MyNavbar from './MyNavbar';
import RoutingDemo from './RoutingDemo';
import Parent from './RoutingDemo/Parent';
import Child from './RoutingDemo/Child';

// js + html = JSX


function App() {
  const [displayComponent, setdisplayComponent] = useState(true);

  const name = "Nikhil";
  const id = 101;

  const greet = (e) => {
    alert(`hello ${name}`)
  }

  // props are read only
  return (
    <>
      <BrowserRouter>
        <MyNavbar />
        <Routes>
          <Route path='/fc' element={<FunctionalComponent />} />
          <Route path='/flex' element={<Flexbox />} />
          <Route path='/bootstrap' element={<BootstrapDemo />} />
          <Route path='/routing/:productId' element={<RoutingDemo />} />
          <Route path='/parent' element={<Parent />}>
            <Route path='child1' element={<Child />} />
            <Route path='child2' element={<h1>child 2</h1>} />
            <Route path='child3' element={<h1>child 3</h1>} />
          </Route>
        </Routes>

      </BrowserRouter >
      {/* <BootstrapDemo /> */}
      {/* conditional rendering */}
      {/* {displayComponent ? <FunctionalComponent name={name} id={id} fn={greet} /> : null} */}
      {/* <button onClick={() => setdisplayComponent(!displayComponent)}> {displayComponent ? 'Hide' : 'Show'}</button > */}
    </>
    // <div>
    //   Hello { name }
    //   <button onClick={greet}> Greet</button>
    // </div>
  )
}

export default App;
