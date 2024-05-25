import logo from './logo.svg';
import './App.css';
import ClassComponent from './ClassComponent';
import { useContext, useEffect, useState } from 'react';
import FunctionalComponent from './FunctionalComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import Flexbox from './Flexbox';
import BootstrapDemo from './BootstrapDemo';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import MyNavbar from './MyNavbar';
import RoutingDemo from './RoutingDemo';
import Parent from './RoutingDemo/Parent';
import Child from './RoutingDemo/Child';
import Products from './Products';
import Login from './Login';
import Signup from './Signup';
import Counter from './Counter';
import useApi from './useApi';
import { ENDPOINTS } from './apiUtil';
import Loader from './Loader';
import { UserContext } from './UserContextProvider';
import Toast from './Toast';
import CartComponent from './CartComponent';

// js + html = JSX


function App() {

  const { makeRequest: login, message } = useApi(ENDPOINTS.USER.LOGIN);
  const { isLoading } = useContext(UserContext)
  console.log("🚀 ~ App ~ message:", message)

  useEffect(() => {
    login();
  }, [])

  // props are read only
  return (
    <>
      <Toast />
      <Loader isLoading={isLoading}/>
      <BrowserRouter>
        <MyNavbar />
        <Routes>
          <Route path='' element={<Products />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/fc' element={<FunctionalComponent />} />
          <Route path='/flex' element={<Flexbox />} />
          <Route path='/cart' element={<CartComponent />} />
          <Route path='/bootstrap' element={<BootstrapDemo />} />
          <Route path='/routing/:productId' element={<RoutingDemo />} />
          <Route path='/reducer' element={<Counter />} />
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
