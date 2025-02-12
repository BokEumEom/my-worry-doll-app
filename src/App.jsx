// src/App.jsx

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Meditation from './pages/Meditation'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meditation" element={<Meditation />} />
      </Routes>
    </Router>
  )
}

export default App
