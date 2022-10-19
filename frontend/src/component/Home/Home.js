import React, {Fragment} from 'react'
import MouseIcon from '@mui/icons-material/Mouse'
import './Home.css'
// import ProductCard from './ProductCard'
import MetaData from '../layout/MetaData'
import Product from '../Product/Products'

const product = {
  name: 'Blue Shirt',
  images: [{url: 'https://i.ibb.co/DRST11n/1.webp'}],
  price: '$70',
  _id: 'testa',
}

const Home = () => {
  return (
    <Fragment>
      <Fragment>
        <MetaData title="ECOMMERCE" />
        <div className="banner">
          <p>Welcome to Ecommerce</p>
          <h1>FIND AMAZING PRODUCTS BELOW</h1>

          <a href="#container">
            <button>
              Scroll <MouseIcon />
            </button>
          </a>
        </div>

        <h2 className="homeHeading">Featured Products</h2>
        <div className="container" id="container"></div>
        <Product product={product} />
      </Fragment>
    </Fragment>
  )
}

export default Home
