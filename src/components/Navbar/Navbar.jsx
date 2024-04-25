/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import './Navbar.css'

function Navbar({ itemsInCart }) {

    const sumItemsInCart = () => {
        let sum = 0;
        itemsInCart.forEach(item => sum += item.count);
        return sum;
    }

    return (
        <div id="navbar-container">
            <h1 id="navbar-title"><Link id="navbar-title-link" to="/">Matzo Palace</Link></h1>
            <h1 id="navbar-shop-link"><Link to="/shop" id="view-shop-link">View Shop</Link></h1>
            <h1 id="view-cart-btn"><Link id="view-cart-link" to="cart">View Cart</Link></h1>
            <h3 id='navbar-items-count'>{sumItemsInCart()}</h3>
        </div> 
    )

}

export default Navbar