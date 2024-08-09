
import './App.css'

// ? Enrutamientos
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import Home from './components/7-Enrutamiento/Home'
import About from './components/7-Enrutamiento/About'
import Contents from './components/7-Enrutamiento/Contents'

function App() {
  return (
    <>
      <BrowserRouter>

        <nav>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
        </nav>

        <Routes>
            <Route path='/' element={ <Home/> }></Route>
            <Route path='/about' element={ <About/> }></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
