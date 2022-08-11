import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { removefromcart, decreasecartquantity, increasecartquantity } from '../features/shop/CartSlice';
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';
import "./Cart.css";

const Cart = () => {
    const dispatch = useDispatch();
    const history = useNavigate();

    const cart = useSelector((state) => state.cart);
    
    const backhandler = () => {
        history("/")
    }

    const deletehandler = (cartitem) => {
        dispatch(removefromcart(cartitem));
    }

    const reducecarthandler = (cartitem) => {
        dispatch(decreasecartquantity(cartitem))
    }

    const increasecarthandler = (cartitem) => {
        dispatch(increasecartquantity(cartitem))
    }

    const clearhandler = () => {

    }

  return (
    <div className='cart'>
        <h5>Shopping Cart</h5>
        {cart.cartitems.length === 0? (
            <div className='noitems'>
                <div className='back'>
                <h6>Your cart is currently empty</h6>
                <button className='back-btn' onClick={backhandler}><BiArrowBack /> Start Shopping</button>
                </div>
            </div>
        ):(<div className='items-available'>
           <div className='items-titles'>
            <div className='product'>Products</div>
            <div className='price'>Price</div>
            <div className='quantity'>Quantity</div>
            <div className='total'>Total</div>
           </div>

           <div className='product-items'>
            {cart.cartitems?.map(cartitem => (
                <div className='cart-perotem' key="cartitem.id">
                    <div className='imagetitle'>
                    <div className='cart-image' >
                    <img src={cartitem.image} alt={cartitem.title} />
                    </div>
                    <div className='item-title'>{cartitem.title}</div>
                    <span className='remove-item' onClick={() => deletehandler(cartitem)} >Remove</span>
                    </div>
                    <div className='item-price'>
                        ${cartitem.price}
                        </div>
                    <div className='item-quantity'>
                        <button className='count'onClick={() => reducecarthandler(cartitem)}>-</button>
                        <div className='count-quantity'>
                            {cartitem.cartquantity}
                        </div>
                        <button className='count' onClick={() => increasecarthandler(cartitem)}>+</button>
                    </div>
                    <div className='item-total'>
                        ${cartitem.price*cartitem.cartquantity}
                    </div>
                        </div>
            ))}
              <div className='cart-bottom'>
              <button className='clear-cart' onClick={clearhandler}>Clear Cart</button>
                <div className='sub-total-checkout'>
                    <div className='sub-total'>
                        <div className='subtotal-title'>SubTotal</div>
                        <div className='subtotal-ammount'>${cart.cartTotalAmount}</div>
                    </div>
                    <p className='calc'>Taxes and shipping will be calculated at checkout</p>
                    <button className='checkout-btn'>Checkout</button>
                    <button className='back-btn' onClick={backhandler}><BiArrowBack size={40}/>Continue shopping</button>
                </div>
                </div>
            </div>
        </div>)
    }</div>
  )
}

export default Cart