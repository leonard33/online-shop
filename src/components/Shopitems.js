import React, { useEffect } from 'react'
import Itemcard from './Itemcard'
import './Shopitems.css'
import { getshopdata } from '../features/shop/ShopSlice'
import { useDispatch, useSelector } from 'react-redux'
import "./Itemcard.css"
import { addtocart } from '../features/shop/CartSlice'
import { Link } from 'react-router-dom'
//import Itemdetails from './Itemdetails'
//import Tilt from 'react-parallax-tilt';

const Shopitems = () => {

  const dispatch = useDispatch();
  const { shopdata, loading, hasErrors } = useSelector((state) => state.shop);

  console.log(shopdata);

useEffect(() => {
  dispatch(getshopdata());
}, [dispatch]);

const handlecart = (product) =>{
  dispatch(addtocart(product))
}

  return (
    <div className='shopitems'>
      {loading ? <div>Loading...</div> : hasErrors ? <div>Error</div> :
      shopdata?.map(product => (
        <div className='itemcard' >
          <Itemcard 
         key={product.id}
          itemname={product.title}
          image={product.image}
          price={product.price}
          rate={product.rating.rate}/>
          <Link to={`Itemdetails/${product.id}`}>
            <button className='btn btn-outline-success btn-sm m-1'>View Item</button>
            </Link>
            <button className='btn btn-outline-warning btn-sm m-1' onClick={() => handlecart(product)}>Add to Cart</button>
          </div>
         
      ))}
      
    </div>
  )
}

export default Shopitems