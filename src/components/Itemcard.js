import React from 'react'
import "./Itemcard.css"


const Itemcard = ({ image,price, itemname, rate }) => {


  return (
   
     <><div className='itemcard-image'>
      <img src={image} alt='item' className='item-image' />
    </div><div className='itemcard-info'>
        <div className='itemcard-info-name'>
          <h7>{itemname}</h7>
        </div>
        <div className='itemcard-info-price'>
          <h7>Price: ${price}</h7>
          <h7 style={{color:"red"}} >Rating: {rate}</h7>
        </div>
      </div></>
      
  
  )
}

export default Itemcard