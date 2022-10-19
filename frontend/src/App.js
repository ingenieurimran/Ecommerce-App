import './App.css'
import {useEffect} from 'react'
import Header from './component/layout/Header/Header'
import {BrowserRouter as Router} from 'react-router-dom'
import WebFont from 'webfontloader'
import {Footer} from './component/layout/Footer/Footer'
import Home from './component/Home/Home'

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Roboto', 'Droid Sans', 'Chilanka'],
      },
    })
  }, [])

  return (
    <Router>
      <Header />
      <Home />
      <Footer />
    </Router>
  )
}

export default App
