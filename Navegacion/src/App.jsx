import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Calculadora from './components/Calculadora/Calculadora'
import Infomia from './pages/infomia'
import Nav from './components/Navabar'

import {BrowserRouter as Router, Routes, Route} from 'react-router'
function App() {
 

  return (
    <>
     <Router>
<Nav/>

  
    <Routes>

   <Route path='/Calculadora' element={<Calculadora/> } />
   <Route path='/infomia' element={<Infomia/> } />
   <Route path='/Calculadora' element={<Calculadora/> } />
   

    </Routes>


     </Router>
      


    </>
  )
}

export default App
