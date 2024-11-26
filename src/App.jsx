
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Nav from './nav'
import Home from './home'
import About from './about'
import Service from './servece'
import Book from './servece/booking'
import Maps from './servece/leaflet'



function App() {
  return (
    <>
<BrowserRouter>
   <Nav/>
<Routes>
  
  <Route  path="/home1"  element={<Home/>} />
  <Route  path="/Service"  element={<Service/>} />
  <Route  path="/About"  element={<About/>} />
  <Route  path="/Service/Maps"  element={<Maps/>} />
  <Route  path="/Service/Book"  element={<Book/>} />
  
  

</Routes>
</BrowserRouter>

   
    {/* <Home/>
    <Service/>
    <About/>
    <Maps/>
    <Book/> */}
   
    </>
  )
}

export default App
