
import './App.css'

// ? Enrutamientos
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/7-Enrutamiento/Home'
import About from './components/7-Enrutamiento/About'
import Contents from './components/7-Enrutamiento/Contents'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={ <Home/> }></Route>
            <Route path='/about' element={ <About/> }></Route>
            <Route path='/contents' element={ <Contents/> }></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
