
import './App.css'

// ? Enrutamientos
import { BrowserRouter, Link, NavLink, Route, Routes } from 'react-router-dom';
import Home from './components/7-Enrutamiento/Home'
import About from './components/7-Enrutamiento/About'
import Producto from './components/7-Enrutamiento/Producto'

function App() {
  return (
    <>
      <BrowserRouter>

        <nav className='navbar navbar-expand navbar-light bg-light'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <NavLink to='/' className='nav-link fw-bold'>Home </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/about' className='nav-link fw-bold'>About </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/producto' className='nav-link fw-bold'>Producto </NavLink>
            </li>
          </ul>
        </nav>

        <hr />

        <div className='container'>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/producto/:nombreParam' element={<Producto />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
