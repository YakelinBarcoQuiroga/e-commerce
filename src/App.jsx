import { HashRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import "./css/loadingScreen.css"
import Home from './components/Home'
import Login from './components/Login'
import ProductDetail from './components/ProductDetail'
import Purchases from './components/Purchases'
import SingUp from './components/SingUp'
import User from './components/User'
import LoadingScreen from './components/LoadingScreen'
import "./css/navbar.css"
import { useSelector } from 'react-redux'

function App() {

  const isLoading = useSelector(state => state.isLoading)

  return (

    <HashRouter>
      <nav className='navBar'>
        <a className='navBar_title' href="/#/">
          <h2>e-commerce</h2>
        </a>
        <div className='navBar_icons'>
          <a className='navBar_icons-container' href="/#/user/">
            <i class="fa-solid fa-user"></i>
          </a>
          <a className='navBar_icons-container' href="/#/purchases/">
            <i class="fa-solid fa-box-archive"></i>
          </a>
          <a className='navBar_icons-container' href="/#/">
            <i class="fa-solid fa-cart-shopping"></i>
          </a>
        </div>
      </nav>
      {isLoading && <LoadingScreen/>}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/singup' element={<SingUp/>}/>
        <Route path='/user' element={<User/>}/>
        <Route path='/product/:id' element={<ProductDetail/>}/>
        <Route path='/purchases' element={<Purchases/>}/>
      </Routes>
      <footer>

      </footer>
    </HashRouter>
  )
}

export default App
