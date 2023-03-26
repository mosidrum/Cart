import React from 'react'
import './style/main.css'
import { GiShoppingBag } from 'react-icons/gi'
import RatingStars from './Components/RatingStars';
import { useState, useEffect } from 'react'
import ShoppingCart from './Components/ShoppingCart';

const products = [
  {
    id: 1,
    name: 'Men Suits',
    rating: 4.5,
    description: 'World classical italian suit',
    price: 199,
    image: require("./Assets/suit1.jpg")
  },
  {
    id: 2,
    name: 'Standard Suits',
    rating: 4.6,
    description: 'World classical italian suit',
    price: 200,
    image: require("./Assets/suit2.jpg")
  },
  {
    id: 3,
    name: 'Hats',
    rating: 4.2,
    description: 'World classical italian Hats',
    price: 30,
    image: require("./Assets/hat1.jpg")
  },
  {
    id: 4,
    name: 'Hats',
    rating: 4.5,
    description: 'World classical italian Hats',
    price: 25,
    image: require("./Assets/hat2.jpg")
  },
  {
    id: 5,
    name: 'Stock shirts',
    rating: 4.7,
    description: 'World classical italian stock shirts',
    price: 50,
    image: require("./Assets/sl3.jfif")
  },
  {
    id: 6,
    name: 'GiSuits',
    rating: 4.5,
    description: 'World classical italian stock shirts',
    price: 199,
    image: require("./Assets/sl4.jfif")
  }
 ]

function App() {

  const [cartsVisibility, setCartsVisibility] = useState(false);
  const [productsInCart, setProductsInCart] = useState(JSON.parse(localStorage.getItem('shopping-cart')
  ) || []
  );

  useEffect(() => {
    localStorage.setItem('shopping-cart', JSON.stringify(productsInCart));
  },[productsInCart])
  const addProductToCart = (product) => {
    const newProduct = {
      ...product,
      count: 1,
    }
    setProductsInCart([
      ...productsInCart, 
      newProduct,
    ])
  }

  const onQuantityChange = (productId, count) => {
    setProductsInCart((oldState) => {
      const productsIndex = oldState.findIndex(( item ) => item.id === productId)
      if (productsIndex !== -1 ) {
        oldState[productsIndex].count = count;
      }
      return [...oldState]
    })
  }

  const onProductRemove = (product) => {
    setProductsInCart((oldState) => {
      const productsIndex = oldState.findIndex(( item ) => item.id === product.id)
      if (productsIndex !== -1 ) {
        oldState.splice(productsIndex, 1);
      }
      return [...oldState]
    })
  }

  return (
    <div className='App'>
      <ShoppingCart visibility={cartsVisibility}
      products={productsInCart} onClose ={() => setCartsVisibility(false)}
      onQuantityChange = {onQuantityChange} onProductRemove = {onProductRemove}
      />
      <div className='navbar'>
        <h3>Logo</h3>
        <button className='btn shopping-cart-btn' onClick={() => setCartsVisibility(true)}>
          <GiShoppingBag size={24} />
          {productsInCart.length > 0 && (<span className='product-count'>{productsInCart.length}</span>)}
        </button>
      </div>
      <main>
        <h2 className='title'>
          products
        </h2>
        <div className='products'>
          {
            products.map((product) => (
              <div className='product' key={product.id}>
                <img className='product-image' src={product.image} alt={product.image} />
                <h4 className='product-name'>
                  {product.name}
                </h4>
                <RatingStars rating={product.rating} />
                <p>
                  {product.description}
                </p>
                <span className='product-price'>
                  ${product.price}
                </span>
                <div className='buttons'>
                  <button className='btn'>
                    Details
                  </button>
                  <button className='btn' onClick={() => addProductToCart(product)}>
                  Add to Cart
                  </button>
                </div>
              </div>
            ))
          }
        </div>
      </main>
    </div>
  );
}

export default App;
