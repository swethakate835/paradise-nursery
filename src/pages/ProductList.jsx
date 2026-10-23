
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../CartSlice'
import Navbar from '../components/Navbar'

const plants = [
  { id: 1, name: 'Snake Plant', price: 299, category: 'Indoor Plants', image: 'photo-1501004318641-b39e6451bec6' },
  { id: 2, name: 'Monstera', price: 499, category: 'Indoor Plants', image: 'photo-1614594975525-e45190c55d0b' },
  { id: 3, name: 'Areca Palm', price: 399, category: 'Indoor Plants', image: 'photo-1497250681960-ef046c08a56e' },
  { id: 4, name: 'Peace Lily', price: 349, category: 'Indoor Plants', image: 'photo-1509423350716-97f9360b4e09' },
  { id: 5, name: 'Rubber Plant', price: 449, category: 'Indoor Plants', image: 'photo-1509423350716-97f9360b4e09' },
  { id: 6, name: 'Money Plant', price: 199, category: 'Indoor Plants', image: 'photo-1494438639946-1ebd1d20bf85' },

  { id: 7, name: 'Aloe Vera', price: 199, category: 'Succulents', image: 'photo-1509423350716-97f9360b4e09' },
  { id: 8, name: 'Echeveria', price: 149, category: 'Succulents', image: 'photo-1459411552884-841db9b3cc2a' },
  { id: 9, name: 'Jade Plant', price: 249, category: 'Succulents', image: 'photo-1501004318641-b39e6451bec6' },
  { id: 10, name: 'Haworthia', price: 179, category: 'Succulents', image: 'photo-1459411552884-841db9b3cc2a' },
  { id: 11, name: 'Zebra Cactus', price: 199, category: 'Succulents', image: 'photo-1509423350716-97f9360b4e09' },
  { id: 12, name: 'String of Pearls', price: 299, category: 'Succulents', image: 'photo-1497250681960-ef046c08a56e' },

  { id: 13, name: 'Spider Plant', price: 249, category: 'Air-Purifying Plants', image: 'photo-1501004318641-b39e6451bec6' },
  { id: 14, name: 'Boston Fern', price: 299, category: 'Air-Purifying Plants', image: 'photo-1497250681960-ef046c08a56e' },
  { id: 15, name: 'Dracaena', price: 399, category: 'Air-Purifying Plants', image: 'photo-1509423350716-97f9360b4e09' },
  { id: 16, name: 'Golden Pothos', price: 279, category: 'Air-Purifying Plants', image: 'photo-1494438639946-1ebd1d20bf85' },
  { id: 17, name: 'Philodendron', price: 349, category: 'Air-Purifying Plants', image: 'photo-1614594975525-e45190c55d0b' },
  { id: 18, name: 'Bamboo Palm', price: 449, category: 'Air-Purifying Plants', image: 'photo-1497250681960-ef046c08a56e' }
]

const categories = ['Indoor Plants', 'Succulents', 'Air-Purifying Plants']

function ProductList() {
  const dispatch = useDispatch()
  const cartItems = useSelector(state => state.cart.items)
  const [added, setAdded] = useState([])

  const addPlant = plant => {
    dispatch(addItem(plant))
    setAdded(previous => [...previous, plant.id])
  }

  return (
    <>
      <Navbar />
      <main className="products-page">
        <h1>Discover Your Perfect Plant</h1>
        <p className="subtitle">Bring a little green into every corner of your home.</p>

        {categories.map(category => (
          <section key={category} className="category">
            <h2>{category}</h2>
            <div className="plant-grid">
              {plants.filter(plant => plant.category === category).map(plant => {
                const isAdded = added.includes(plant.id) ||
                  cartItems.some(item => item.id === plant.id)

                return (
                  <article className="plant-card" key={plant.id}>
                    <img
                      src={`https://images.unsplash.com/${plant.image}?auto=format&fit=crop&w=500&q=80`}
                      alt={plant.name}
                    />
                    <div className="plant-info">
                      <h3>{plant.name}</h3>
                      <p className="price">₹{plant.price}</p>
                      <button
                        disabled={isAdded}
                        onClick={() => addPlant(plant)}
                        className="button add-button"
                      >
                        {isAdded ? 'Added to Cart ✓' : 'Add to Cart'}
                      </button>
                    </div>
                  </article>
                )
              })}
            </div>
          </section>
        ))}
      </main>
    </>
  )
}

export default ProductList
