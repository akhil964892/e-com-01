
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import LoginSignup from './Pages/LoginSignup';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Footer from './Components/Footer/Footer';
import personalized_banner from './Components/Assets/banner_mens.png'
import special_banner from './Components/Assets/banner_women.png'
import recipient_banner from'./Components/Assets/banner_kids.png'
import occassions_banner from './Components/Assets/banner_occassions.png'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element ={<Shop/>}/>
        <Route path='/personalized' element ={<ShopCategory banner={personalized_banner} category="personalized"/>}/>
        <Route path='/special' element ={<ShopCategory banner={special_banner} category="special"/>}/>
        <Route path='/recipient' element ={<ShopCategory banner={recipient_banner} category="recipient"/>}/>
        <Route path='/occassions' element ={<ShopCategory banner={occassions_banner} category="occassions"/>}/>
        <Route path="/product" element ={<Product/>}>
        <Route path=':productId' element ={<Product/>}/>
        </Route>
        <Route path='/cart' element ={<Cart/>}/>
        <Route path='/login' element ={<LoginSignup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
