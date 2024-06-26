import { Trash } from '@phosphor-icons/react'
import { QuantityInput } from '../../../../components/Form/QuantityInput'
import { SecondaryButton } from '../../../../components/SecondaryButton'
import { CatalogItemType } from '../../../../data/catalog'
import { CoffeeSelectedCardContainer } from './styles'
import { useContext } from 'react'
import { CartContext } from '../../../../contexts/CartContext'

interface CoffeeSelectedCardProps {
  coffee: CatalogItemType
}

export function CoffeeSelectedCard({ coffee }: CoffeeSelectedCardProps) {
  const { decrementItemQuantity, incrementItemQuantity, removeItem } =
    useContext(CartContext)

  function handleDecrementQuantity() {
    decrementItemQuantity(coffee.id)
  }

  function handleIncrementQuantity() {
    incrementItemQuantity(coffee.id)
  }

  function handleRemoveItem() {
    removeItem(coffee.id)
  }

  return (
    <CoffeeSelectedCardContainer>
      <img src={coffee.imgUrl} alt="" />
      <div>
        <header>
          {coffee.name} <aside>R$ {coffee.price.toFixed(2)}</aside>
        </header>
        <footer>
          <QuantityInput
            decrementQuantity={handleDecrementQuantity}
            incrementQuantity={handleIncrementQuantity}
            quantity={coffee.quantity}
          />
          <SecondaryButton onClick={handleRemoveItem}>
            <Trash size={16} />
            Remover
          </SecondaryButton>
        </footer>
      </div>
    </CoffeeSelectedCardContainer>
  )
}
