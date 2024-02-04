import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from "../Assets/star_icon.png"
import star_dull_icon from "../Assets/star_dull_icon.png"
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = (props) => {
    const {product}= props;
    const {addToCart}=useContext(ShopContext);
  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
            <img className='productdisplay-main-img' src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull_icon} alt="" />
            <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
            <div className="productdisplay-right-price-old"> ${product.old_price}</div>
            <div className="productdisplay-right-price-new"> ${product.new_price}</div>
        </div>
        <div className="productdisplay-right-description">
        "Discover the power of personalization with our customizable products. From adding your 
        unique flair to finding the perfect fit, our customization options empower you to create 
        something truly yours. Express yourself, surprise loved ones with personalized gifts, and
         elevate your style with products tailored to your preferences. Start customizing today
          and unlock endless possibilities!"
        </div>
        {/* <div className="productdisplay-right-size">
            <h1>Select Size</h1>
            <div className="productdisplay-right-sizes">
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
                <div>6</div>
            </div>
        </div> */}
        <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
        <p className='productdisplay-right-category'><span>Category:&nbsp;</span>Customization & Personalization</p>
        <p className='productdisplay-right-category'><span>Tags:&nbsp;</span>Create Your Style,&nbsp; Made Just for You,&nbsp; Design Your Own,&nbsp;Personalized Gifts</p>
        </div>
    </div>
  )
}

export default ProductDisplay