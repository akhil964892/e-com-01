import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews(122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>[Your Company Name], we pride ourselves on offering customizable products that empower you to infuse 
          your unique style, personality, and sentiment into every purchase. Our intuitive customization tools
           make it effortless to design personalized gifts, bespoke apparel, and distinctive home decor that 
           resonate with your individuality.
        </p>
        <p>From selecting colors and fonts to adding meaningful text and graphics, the customization options 
          are as limitless as your imagination. Whether you're commemorating a special occasion, expressing 
          your love and appreciation, or simply indulging in self-expression, our collection of customizable 
          products ensures that every item is a reflection of your personal taste and preferences.
        </p>
        <p>Experience the joy of tailoring your purchases to perfection, ensuring a perfect fit for every occasion.
           With a commitment to quality craftsmanship and attention to detail, we guarantee that your customized 
           creations will exceed your expectations. Join us in celebrating the art of customization and explore our
            collection today to discover the endless possibilities that await you.
            </p>
      </div>
    </div>
  )
}


export default DescriptionBox