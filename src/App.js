import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import Read from './Pages/Read'
import Update from './Pages/Update'
import Create from './Pages/Create'
 
function App() {
  return (
    <div>
       <Router>
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
  
           <Link to="/" className='nav-link'>CREATE</Link>
        </li>
        <li className="nav-item">
        <Link to="/read" className='nav-link'>READ</Link>
        </li>
        <li className="nav-item">
        <Link to="/update" className='nav-link'>UPDATE</Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
          <Routes>
             <Route path='/' exact element={<Create/>}></Route>
             <Route path='/read' exact element={<Read/>}></Route>
             <Route path='/update' exact element={<Update/>}></Route>
          </Routes>
       </Router>
    </div>
  )
}

export default App