import './App.css'
import Layout from '@/LayOut/Layout.jsx'
import MainContent from './components/MainContent/MainContent'
import Hero from '@/components/Hero/Hero'
function App() {
  return (
    
      
    <Layout fullBleed={<Hero/>}>
      <MainContent/>
    </Layout>
  )
}

export default App
