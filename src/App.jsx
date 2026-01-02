import './App.css'
import Layout from '@/LayOut/Layout.jsx'
import MainContent from './components/MainContent/MainContent'
import Hero from '@/components/Hero/Hero'
import FeaturedPies from './components/Sections/FeaturedPies/FeaturedPies'
import About from './components/Sections/About/About'
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
      
     <About/>
     
    </Layout>
  )
}

export default App
