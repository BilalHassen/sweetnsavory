import './App.css'
import Layout from '@/LayOut/Layout.jsx'
import MainContent from './components/MainContent/MainContent'
import Hero from '@/components/Hero/Hero'
import FeaturedPies from './components/Sections/FeaturedPies/FeaturedPies'
import About from './components/Sections/About/About'
import Menu from './components/Sections/Menu/Menu'
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
     <Menu/>
     
    </Layout>
  )
}

export default App
