import { Routes, Route } from 'react-router-dom'
import Home from '@pages/Home/Home'
import PieDetail from '@pages/PieDetail/PieDetail'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pies/:slug" element={<PieDetail />} />
    </Routes>
  )
}

export default App
