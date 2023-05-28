import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <header>
      <Link to="/">#VANLIFE</Link>
      <nav>
      <Link to="/about">About</Link>
      <Link to="/vans">Vans</Link>
      </nav>
    </header>
    
    
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/about' element = {<About/>}/>
      </Routes>

      <footer>
        <span>Ⓒ 2022 #VANLIFE</span>
      </footer>
    </BrowserRouter>
  )
}

export default App
