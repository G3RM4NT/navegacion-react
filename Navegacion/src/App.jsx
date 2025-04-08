import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Calculadora from './components/Calculadora/Calculadora.jsx'
import Com20 from './pages/20com.jsx'
import Nav from './components/Navabar.jsx'
import Info from './pages/infomia.jsx'


import {BrowserRouter as Router, Routes, Route} from 'react-router'
function App() {
 

  return (
    <>
     <Router>
<Nav/>

  
    <Routes>

   <Route path='/Calculadora' element={<Calculadora/> } />
   <Route path='/20com' element={<Com20/> } />
   <Route path='/Infomia' element={<Info/> } />
   

    </Routes>


     </Router>
      


    </>
  )
}

export default App
