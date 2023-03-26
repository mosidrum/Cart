import React from 'react'
import './style/main.css'
import { GiShoppingBag } from 'react-icons/gi'
import RatingStars from './Components/RatingStars';

function App() {

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

  return (
    <div className='App'>
      <div className='navbar'>
        <h3>Logo</h3>
        <button className='btn shopping-cart-btn'>
          <GiShoppingBag size={24} />
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
                  <button className='btn'>
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
