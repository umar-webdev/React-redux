import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Navbar from './components/Navbar'
import { Provider } from 'react-redux'
import store from './store/store'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <Provider store={store}>
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
    </>
  )
}

export default App
