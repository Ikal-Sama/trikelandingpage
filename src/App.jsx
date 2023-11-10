import { React } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/shared/Layout'
import Buynow from './components/Buynow'


function App() {
  return (
    <div className='App'> 
          <Router>
              <Routes>
                  <Route path='/' element={<Layout />} />
                  <Route path='buynow' element={<Buynow />} />
            </Routes>
          </Router>
    </div>
  )
}

export default App
