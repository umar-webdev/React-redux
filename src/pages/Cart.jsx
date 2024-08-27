import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../store/cartSlice';
const Cart = () => {
  const items = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const handleRemove = (productId) => {
    dispatch(remove(productId))
  }
  return (
    <div>
      <h3>Cart</h3>
      <div className="cartWrapper">
        {
          // This is where you would render the cart items
          items.map(product=>(
            <div className="cartCard">
              <img src={product.image} alt="" />
              <h4>{product.title}</h4>
              <p>{product.price}</p>
              <button className='btn' onClick={()=>{handleRemove(product.id)}}>Remove</button>
            </div>  
          ))
        }
      </div>
    </div>
  )
}

export default Cart