import React, {Fragment, useEffect} from 'react'
import './Products.css'
import {useSelector, useDispatch} from 'react-redux'
import {clearErrors, getProduct} from '../../actions/productAction'
import Loader from '../layout/Loader/Loader'
import ProductCard from '../Home/ProductCard'
import {useAlert} from 'react-alert'
import MetaData from '../layout/MetaData'

const Products = ({match}) => {
  const alert = useAlert()
  const dispatch = useDispatch()
  const {loading, error, products, productsCount} = useSelector(
    (state) => state.products
  )

  const keyword = match.params.keyword

  useEffect(() => {
    if (error) {
      alert.error(error)
      dispatch(clearErrors())
    }
    dispatch(getProduct(keyword))
  }, [dispatch, keyword, error, alert])
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="PRODUCTS -- ECOMMERCE" />
          <h2 className="productsHeading">Products</h2>

          <div className="products">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>

          <div className="filterBox"></div>
        </Fragment>
      )}
    </Fragment>
  )
}

export default Products
