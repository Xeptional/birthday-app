import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar, About, WriteMessage, SubmittedMessages } from './components'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<About />}></Route>
          <Route path='/write-message' element={<WriteMessage />}></Route>
          <Route path='/submitted-messages' element={<SubmittedMessages />}></Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App
