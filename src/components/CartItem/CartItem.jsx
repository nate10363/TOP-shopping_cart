/* eslint-disable react/prop-types */
import { useOutletContext } from 'react-router-dom';
import './CartItem.css'

function CartItem({
    id,
    description,
    src,
    price,
    rate,    
    count,
    title,
    quant
}) {

    const { itemsInCart: [itemsInCart, setItemsInCart] } = useOutletContext();

    const increaseItemQuantity = () => {
        let arr = [...itemsInCart];
        const index = arr.findIndex(item => id == item.id);
        arr[index].count += 1;
        setItemsInCart(arr);
    }

    const decreaseItemQuantity = () => {
        let arr = [...itemsInCart];
        const index = arr.findIndex(item => id == item.id);

        if (arr[index].count <= 0) {
            return null
        }

        arr[index].count -= 1;
        setItemsInCart(arr);
    }

    const deleteItemFromCart = () => {
        let arr = [...itemsInCart];
        const index = arr.findIndex(item => id == item.id);
        arr.splice(index, 1);
        setItemsInCart(arr);
    }

    return (
        <div className="cart-item-container" key={id}>
            <img className='single-item-img' src={src} alt={description} />
            <h3 className='singleItem-title'>{title}</h3>
            <div className='price-rate-count-div'>
                <p>${price}</p>
                <div className='rate-count-div'>
                    <p className='rate-count-para'>{rate}⭐</p>
                    <p className='rate-count-para'>/ {count}</p>
                </div>
            </div>

            <div className='item-quantity-btn-container'>

                <button 
                    className='change-quantity-btn'
                    onClick={() => {
                        decreaseItemQuantity()
                    }}
                >
                    -
                </button>
                
                <div className='item-quantity-div'>{quant}</div>

                <button 
                    className='change-quantity-btn'
                    onClick={() => {
                        increaseItemQuantity()
                    }}
                >+</button>

                
            </div>

            <div className='delete-from-cart-btn-container'>
                <button
                    className='delete-from-cart-btn'
                    onClick={() => {
                        deleteItemFromCart();
                    }}
                >
                    Delete
                </button>
            </div>
        </div>
    )
}

export default CartItem