
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  increaseQuantity,
  decreaseQuantity,
  removeItem
} from '../CartSlice'
import Navbar from '../components/Navbar'

function CartItem() {
  const dispatch = useDispatch()
  const items = useSelector(state => state.cart.items)

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)
  const totalCost = items.reduce(
    (sum, item) => sum + item.price * item.quantity, 0
  )

  return (
    <>
      <Navbar />
      <main className="cart-page">
        <h1>Your Shopping Cart 🛒</h1>
        <p className="cart-summary">
          Total plants: <strong>{totalItems}</strong>
        </p>

        {items.length === 0 ? (
          <div className="empty-cart">
            <h2>Your cart is empty</h2>
            <p>Find a plant that makes you smile!</p>
            <Link to="/plants" className="button">Continue Shopping</Link>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {items.map(item => (
                <article className="cart-item" key={item.id}>
                  <img
                    src={`https://images.unsplash.com/${item.image}?auto=format&fit=crop&w=300&q=80`}
                    alt={item.name}
                  />
                  <div className="cart-details">
                    <h3>{item.name}</h3>
                    <p>Unit price: ₹{item.price}</p>
                    <p>Subtotal: ₹{item.price * item.quantity}</p>

                    <div className="quantity-controls">
                      <button
                        aria-label={`Decrease ${item.name} quantity`}
                        onClick={() => dispatch(decreaseQuantity(item.id))}
                      >
                        −
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        aria-label={`Increase ${item.name} quantity`}
                        onClick={() => dispatch(increaseQuantity(item.id))}
                      >
                        +
                      </button>
                      <button
                        className="delete-button"
                        onClick={() => dispatch(removeItem(item.id))}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="cart-total">
              <h2>Total: ₹{totalCost}</h2>
              <div className="cart-actions">
                <Link to="/plants" className="button">Continue Shopping</Link>
                <button
                  className="button checkout-button"
                  onClick={() => window.alert('Coming Soon!')}
                >
                  Checkout
                </button>
              </div>
            </div>
          </>
        )}
      </main>
    </>
  )
}

export default CartItem
