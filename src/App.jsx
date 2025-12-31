import './App.css'
import Layout from '@/LayOut/Layout.jsx'
import MainContent from './components/MainContent/MainContent'
import Hero from '@/components/Hero/Hero'
import FeaturedPies from './components/Sections/FeaturedPies/FeaturedPies'
function App() {
  return (
    
      
    <Layout
      fullBleed={
        <>
          <Hero />
          <FeaturedPies />
        </>
      }
    >
      <MainContent/>
    </Layout>
  )
}

export default App
