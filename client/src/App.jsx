import { useState } from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/student/Home'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Routes>
          <Route path='/' element={<Home />} />
       </Routes>
    </>
  )
}

export default App
