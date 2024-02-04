import React, {useContext, useEffect, useState} from 'react'
import './CartItems.css'
import {ShopContext} from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'

const CartItems = () => {
  const {getTotalCartAmount,all_product,cartItems,removeFromCart} = useContext(ShopContext);
  const[showModal,setShowModal]=useState(false);
  const MyModal=()=>{
    useEffect(()=>{
        document.body.style.overflowY="hidden";
    },[]);
    return(<>
    <div className="modal-wrapper"></div>
    <div className="modal-container">
        <h2>Seamless Shopping: Buy Now, Pay on WhatsApp, and Track Your Order!</h2>
        <hr />
        <p>Ready to make your purchase? Click 'Join WhatsApp for Payments & Support' to proceed with your order.For payment and further assistance, reach out to us on WhatsApp. Feel free to inquire about your order 
            status or any queries you may have—we're here to help every step of the way!"
             </p>
             {/* <a href="https://wa.me/919648920088"><button className='modal-btn'>Join WhatsApp for Payments & Support</button></a> */}
             <a href="https://wa.me/+919648920088?text=I'm%20interested%20in%20your%20product.%40Please%20provide%20the%20(#number)%20of%20your%20product%20that%20you%20have%20chosen%20for%20customization"><button className='modal-btn'>Join WhatsApp for Payments & Support</button></a>
             </div>
             </>
    );
  };
    return (
    <div className='cartitems'>
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e)=>{
        if(cartItems[e.id]>0){
            return <div> 
                <div className="cartitems-format cartitems-format-main">
                <img src={e.image} alt="" className='carticon-product-icon'/>
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                <p>${e.new_price*cartItems[e.id]}</p>
                <img className='cartitems-remove-icon' src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="" />
                </div>
            <hr />
            </div>
        }
        return null;
        })} 
        <div className="cartitems-down">
            <div className="cartitems-total">
                <h1>Cart Totals</h1>
                <div className="cartitems-total-item">
                    <p>Subtotal</p>
                    <p>${getTotalCartAmount()}</p>
                </div>
                <hr />
                <div className="cartitems-total-item">
                    <p>Shipping Fee</p>
                    <p>Free</p>
                </div>
                <hr />
                <div className="cartitems-total-item">
                    <h3>Total</h3>
                    <h3>${getTotalCartAmount()}</h3>
                </div>
                <>
                <button onClick={()=>setShowModal(true)}>Proceed To Checkout</button>
                {showModal && <MyModal/>}
                </>
            </div>
            
        </div>
        <div className="cartitems-promocode">
            <p>If you have a promo code, Enter it here</p>
            <div className="cartitems-promobox">
                <input type="text" placeholder='promo code'/>
                <button>Submit</button>
            </div>
        </div>
    </div>
    )
}

export default CartItems
