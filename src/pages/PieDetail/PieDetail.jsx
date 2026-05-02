import { useId, useState } from 'react'
import { useParams } from 'react-router-dom'
import { piesData } from '@/data/data'
import Layout from '@/layout/Layout.jsx'
import Footer from '@/components/Sections/Footer/Footer'
import Button from '@/components/ui/components/Button/Button'
import { Check } from 'lucide-react'
import { useShopifyCart, addToShopifyCart } from '@/hooks/useShopifyCart'
import { useWidth } from '@/hooks/useWidth'
import './PieDetail.scss'
import PieContents from './components/PieContents'

function PieDetail() {
  useShopifyCart()
  const { slug } = useParams()
  const selectedProduct = piesData.find((p) => p.slug === slug)
  const formatGroupId = useId()
  const [formatId, setFormatId] = useState('fresh')
  const width = useWidth()
  return (
    <>
      <Layout>
        <article className='pieDetail'>
          {!selectedProduct && <div className="pieDetail__notFound">Pie not found</div>}
          <div className='pieDetail__imgContainer'>
            <Button
              variant={selectedProduct.category === 'sweet' ? 'green' : 'primary'}
              size="small"
              className="pieDetail__badge"
            >
              <span className="pieDetail__badgeText">{selectedProduct.category}</span>
            </Button>
            <img className='pieDetail__img' src={selectedProduct.img} alt={selectedProduct.name} />
          </div>
          
          {width < 768 ? <PieContents selectedProduct={selectedProduct} formatGroupId={formatGroupId} formatId={formatId} 
          setFormatId={setFormatId} width={width} addToShopifyCart={addToShopifyCart} />
        : <div className='pieDetail__lrgContainer'>
           <PieContents selectedProduct={selectedProduct} formatGroupId={formatGroupId} formatId={formatId} 
          setFormatId={setFormatId} width={width} addToShopifyCart={addToShopifyCart}></PieContents>
        </div>
        }

          
        </article>
      </Layout>
      <Footer />
    </>
  )
}

export default PieDetail
