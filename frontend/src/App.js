import './App.css'
import {useEffect} from 'react'
import Header from './component/layout/Header/Header'
import Footer from './component/layout/Footer/Footer'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import WebFont from 'webfontloader'
import React from 'react'
import Home from './component/Home/Home'
import ProductDetails from './component/Product/ProductDetails'
import Products from './component/Product/Products'
import Search from './component/Product/Search'
import LoginSignUp from './component/user/LoginSignUp'
import {loadUser} from './actions/userAction'
import store from './store'
import {useSelector} from 'react-redux'
import UserOptions from './component/layout/Header/UserOptions'
import ProtectedRoute from './component/Route/ProtectedRoute'
import Profile from './component/user/Profile'

function App() {
  const {isAuthenticated, user} = useSelector((state) => state.user)
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Roboto', 'Droid Sans', 'Chilanka'],
      },
    })
    store.dispatch(loadUser())
  }, [])

  return (
    <Router>
      <Header />
      {isAuthenticated && <UserOptions user={user} />}
      <Route exact path="/" component={Home} />
      <Route exact path="/product/:id" component={ProductDetails} />
      <Route exact path="/products" component={Products} />
      <Route path="/products/:keyword" component={Products} />
      <Route exact path="/search" component={Search} />
      <ProtectedRoute exact path="/account" component={Profile} />
      <Route exact path="/login" component={LoginSignUp} />
      <Footer />
    </Router>
  )
}

export default App
