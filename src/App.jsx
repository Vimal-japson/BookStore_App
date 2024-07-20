
import './App.css'
import Cart from './Cart.jsx'
import Home from "./Home.jsx"
import Detail from './Detail.jsx'
import About from './About.jsx'
import More from './More.jsx'
import Contact from './Contact.jsx'

import {BrowserRouter,Routes,Route,Link} from "react-router-dom"
import Navbar from './Navbar'
import Register from './Register.jsx'
import { createContext, useState } from 'react'
export const MyContext = createContext();







export default function App() {

  const [latest,setLatest] = useState([]);
  const [cart,setCart] = useState([]);
  

  return (
    <>
    <MyContext.Provider value={{latest,setLatest,cart,setCart}}>
    <BrowserRouter>
        <Navbar></Navbar>

    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/detail' element={<Detail/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/more' element={<More/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
     
    </Routes>
    </BrowserRouter>
    </MyContext.Provider>
  
    
    </>
  )
}


