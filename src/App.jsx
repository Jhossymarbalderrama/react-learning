
import './App.css'

// ? Enrutamientos
import { BrowserRouter, Link, NavLink, Route, Routes } from 'react-router-dom';
import Home from './components/7-Enrutamiento/Home'
import About from './components/7-Enrutamiento/About'
import Contents from './components/7-Enrutamiento/Contents'

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
          </ul>
        </nav>

        <hr />

        <div className='container'>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
