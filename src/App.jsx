import { Routes, Route } from 'react-router-dom'
import Home from '@pages/Home/Home'
import PieDetail from '@pages/PieDetail/PieDetail'
import NotFound from '@pages/NotFound'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pies/:slug" element={<PieDetail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
