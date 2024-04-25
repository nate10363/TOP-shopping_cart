/* eslint-disable react/prop-types */
import './SingleItem.css'
import { useState } from 'react';
import { useOutletContext } from 'react-router-dom';

function SingleItem({
    id,
    description,
    src,
    price,
    rate,    
    count,
    title,
}) {

    const [itemQuantity, setItemQuantity] = useState(1);
    const { itemsInCart: [itemsInCart, setItemsInCart] } = useOutletContext();

    const increaseItemQuantity = () => {
        setItemQuantity(c => c + 1)
    }

    const decreaseItemQuantity = () => {
        setItemQuantity(c => c - 1)
    }

    const addToCart = () => {
        let arr = [...itemsInCart];
        let index = arr.findIndex(cartItem => cartItem.id == id);
        if (index == -1) {
            arr.push({ 'id': id, 'count': (itemQuantity) });
            return setItemsInCart(arr);
        }

        arr[index].count += itemQuantity;
        setItemsInCart(arr);
    }

    return (
        <div className="item" key={id}>
            <img className='single-item-img' src={src} alt={description} />
            <h3 className='singleItem-title'>{title}</h3>
            <div className='price-rate-count-div'>
                <p>${price}</p>
                <div className='rate-count-div'>
                    <p className='rate-count-para'>{rate}⭐</p>
                    <p className='rate-count-para'>/ {count}</p>
                </div>
            </div>
            {/* <input 
                type="number" 
                className={invalidInput ? 'invalid-input' : 'valid-input'}
                onChange={(e) => {
                    checkInvalidInput(e.target.value)
                    setItemQuantity(Number(e.target.value))
                }}
            /> */}


            <div className='item-quantity-btn-container'>

                <button 
                    className='change-quantity-btn'
                    onClick={() => {
                        if (itemQuantity <= 0) {
                            return null
                        }
                        decreaseItemQuantity()
                    }}
                >
                    -
                </button>
                
                <div className='item-quantity-div'>{itemQuantity}</div>

                <button 
                    className='change-quantity-btn'
                    onClick={() => {
                        increaseItemQuantity()
                    }}
                >+</button>

                
            </div>

            <div className='add-to-cart-btn-container'>
                <button
                    className='add-to-cart-btn button-71'
                    onClick={() => {
                        if (itemQuantity <= 0) {
                            return null;
                        }
                        addToCart();
                    }}
                >
                    Add to Cart
                </button>
            </div>
        </div>
    )
}

export default SingleItem