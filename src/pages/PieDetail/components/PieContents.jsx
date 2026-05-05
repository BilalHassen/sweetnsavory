import Button from '@/components/ui/components/Button/Button'
import { Check } from 'lucide-react'

function PieContents({
  selectedProduct,
  formatGroupId,
  formatId,
  setFormatId,
  quantity,
  setQuantity,
  addToShopifyCart,
}) {
  const hasFrozen = Boolean(selectedProduct.frozenVariantId)
  const effectiveFormat = hasFrozen ? formatId : 'fresh'

  const price = effectiveFormat === 'frozen'
    ? selectedProduct.price - 1
    : selectedProduct.price

  const variantId = effectiveFormat === 'frozen'
    ? selectedProduct.frozenVariantId
    : selectedProduct.variantId

  return (
    <>
      <header className='pieDetail__header'>
        <p className="pieDetail__eyebrow">Bake of the Day</p>
        <h1 className='pieDetail__title'>{selectedProduct.name}</h1>
        <p className='pieDetail__tagline'>{selectedProduct.tagline}</p>
      </header>
      <div className='pieDetail__content'>
        <p className="pieDetail__price">
          <span className="visually-hidden">Price: </span>${price}
        </p>
        <span className="pieDetail__each">each · in-store pickup</span>
      </div>
      <p className="pieDetail__description">{selectedProduct.description}</p>

      {hasFrozen && (
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
              aria-checked={effectiveFormat === 'fresh'}
              tabIndex={effectiveFormat === 'fresh' ? 0 : -1}
              className={`pieDetail__option${effectiveFormat === 'fresh' ? ' pieDetail__option--selected fresh' : ''}`}
              onClick={() => setFormatId('fresh')}
            >
              <span className="pieDetail__optionTitle">Fresh, baked today</span>
              <span className="pieDetail__optionSubtitle">Ready for pickup, hot from the oven</span>
            </button>
            <button
              type="button"
              role="radio"
              aria-checked={effectiveFormat === 'frozen'}
              tabIndex={effectiveFormat === 'frozen' ? 0 : -1}
              className={`pieDetail__option${effectiveFormat === 'frozen' ? ' pieDetail__option--selected frozen' : ''}`}
              onClick={() => setFormatId('frozen')}
            >
              <span className="pieDetail__optionTitle">Frozen, bake at home</span>
              <span className="pieDetail__optionSubtitle">Save $1 · bake from frozen at 180°C</span>
            </button>
          </div>
        </div>
      )}

      <div className="pieDetail__buttonsContainer">
        <div
          className="pieDetail__stepper"
          role="group"
          aria-label="Quantity"
        >
          <button
            type="button"
            className="pieDetail__stepperBtn"
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            aria-label="Decrease quantity"
            disabled={quantity <= 1}
          >
            −
          </button>
          <span className="pieDetail__stepperCount" aria-live="polite">{quantity}</span>
          <button
            type="button"
            className="pieDetail__stepperBtn"
            onClick={() => setQuantity((q) => Math.min(99, q + 1))}
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
        <Button
          variant="primary"
          size="med"
          className="pieDetail__addBtn"
          disabled={!variantId}
          onClick={() => addToShopifyCart(variantId, quantity)}
        >
          Add {quantity} to cart · ${price * quantity}
        </Button>
      </div>

      <p className="pieDetail__pickupNote">
        Pickup only — orders are prepared at our Stouffville, ON kitchen.
      </p>

      <div className="pieDetail__ingredients">
        <p className="pieDetail__ingredientsTitle">Inside the pie</p>
        <ul className="pieDetail__ingredientsList" role="list">
          {selectedProduct.ingredients.map((ingredient) => (
            <li key={ingredient} className="pieDetail__ingredient">
              <Check className="pieDetail__ingredientIcon" aria-hidden="true" />
              <span className="pieDetail__ingredientText">{ingredient}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default PieContents
