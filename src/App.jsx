import { useState } from 'react'

import {BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css'
import Create from './Components/Create'
import Read from './Components/Read'
import Update from './Components/Update'
 
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
   
 <Routes>
  <Route exact path='/' element={<Create/>}/>
  <Route  path='/read' element={<Read/>}/>
  <Route  path='/update' element={<Update/>}/>
 </Routes>
  
    </BrowserRouter>
   

    
  )
}

export default App
