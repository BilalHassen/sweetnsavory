import Layout from '@/layout/Layout.jsx'
import Hero from '@/components/Hero/Hero'
import FeaturedPies from '@/components/Sections/FeaturedPies/FeaturedPies'
import About from '@/components/Sections/About/About'
import Menu from '@/components/Sections/Menu/Menu'
import Contact from '@/components/Sections/Contact/Contact'
import Footer from '@/components/Sections/Footer/Footer'
import '@/App.css'

function Home() {
  return (
    <>
      <Layout
        fullBleed={
          <>
            <Hero />
            <FeaturedPies />
          </>
        }
      >
        <About />
        <Menu />
        <Contact />
      </Layout>
      <Footer />
    </>
  )
}

export default Home
