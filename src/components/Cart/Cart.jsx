import { useOutletContext } from "react-router-dom";
// import SingleItem from "../SingleItem/SingleItem";
import CartItem from "../CartItem/CartItem";
import './Cart.css'

function Cart() {
    const { productsArr: [productsArr] } = useOutletContext();
    const { itemsInCart: [itemsInCart] } = useOutletContext();

    const calculateTotal = () => {
        let sum = 0;
        itemsInCart.forEach((item) => {
            const product = productsArr.find(prod => prod.id == item.id);
            sum += (item.count * product.price);
        })
        return sum
    }

    return (
        <>
            <h1 id="cart-page-title">this is cart</h1>

            {/* <button onClick={() => console.log(itemsInCart)}>log items in cart</button> */}

            <div id='cart-products-div'>
                {
                    itemsInCart.map((item) => {
                        const product = productsArr.find(prod => prod.id == item.id)
                        // return <div key={product.id}>{product.title}</div>
                        return <CartItem 
                            
                            quant={item.count}
                            key={product.id}
                            id={product.id}
                            category={product.category}
                            description={product.description}
                            src={product.image}
                            price={product.price}
                            rate={product.rating.rate}
                            count={product.rating.count}
                            title={product.title}
                        />
                    })
                }
            </div>
            {itemsInCart.length > 0 
                ?<div id='purchase-cart-btn-container'>
                <h4>Total:</h4>
                <p>${calculateTotal()}</p>
                <button className="button-78" id="purchase-cart-btn"
                    onClick={() => console.log("joke's on you")}
                >
                    Purchase Order
                </button>
            </div> 
            :   <div id="empty-cart-message-container">
                    <div id='empty-cart-message-top'>Empty</div>
                    <div id='empty-cart-message-middle'>Empty</div>
                    <div id='empty-cart-message-bottom'>Empty</div>
                </div>
            }
        </>
    )
}

export default Cart