import React from 'react'
import Button from '@/components/ui/components/Button/Button'
import { Link } from 'react-router-dom'
import { Check } from 'lucide-react'
function PieContents({selectedProduct, formatGroupId, formatId, setFormatId, width, addToShopifyCart}) {
  return (
    <>
    <header className='pieDetail__header'>
    <p className="pieDetail__eyebrow">Bake of the Day</p>
    <h1 className='pieDetail__title'>{selectedProduct.name}</h1>
    <p className='pieDetail__tagline'>{selectedProduct.tagline}</p>
  </header>
  <div className='pieDetail__content'>
    <p className="pieDetail__price">${selectedProduct.price}</p>
    <span className="pieDetail__each">each</span>
    
  </div>
  <p className="pieDetail__description">{selectedProduct.description}</p>

  <div className="pieDetail__options">
    <p id={formatGroupId} className="pieDetail__optionsTitle">
      How would you like it?
    </p>
    <div
      className="pieDetail__optionsContainer"
      role="radiogroup"
      aria-labelledby={formatGroupId}
    >
      <button
        type="button"
        role="radio"
        aria-checked={formatId === 'fresh'}
        className={`pieDetail__option${formatId === 'fresh' ? ' pieDetail__option--selected fresh' : ''}`}
        onClick={() => setFormatId('fresh')}
      >
        <span className="pieDetail__optionTitle">Fresh, baked today</span>
      </button>
      <button
        type="button"
        role="radio"
        aria-checked={formatId === 'frozen'}
        className={`pieDetail__option${formatId === 'frozen' ? ' pieDetail__option--selected frozen' : ''}`}
        onClick={() => setFormatId('frozen')}
      >
        <span className="pieDetail__optionTitle">Frozen, bake at home</span>
      </button>
    </div>
  </div>

  <div className="pieDetail__buttonsContainer">
    <Button as={Link} to="/#menu" variant="primary" size="med">Order for pickup</Button>
  </div>


  <div className="pieDetail__ingredients">
    <p className="pieDetail__ingredientsTitle">Inside the pie</p>
    <ul className="pieDetail__ingredientsList">
      {selectedProduct.ingredients.map((ingredient) => (
        <li key={ingredient} className="pieDetail__ingredient">
          <Check className="pieDetail__ingredientIcon" />
          <span className="pieDetail__ingredientText">{ingredient}</span>
        </li>
      ))}
    </ul>
  </div>
  </>
  )
}

export default PieContents