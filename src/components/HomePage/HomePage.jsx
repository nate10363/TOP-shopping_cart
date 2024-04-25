import img from '/Users/nathanieldavenport/Documents/TOP-React-Projects/TOP-shopping_cart/src/assets/passover-seder-plate.jpeg'
import './HomePage.css'

function HomePage() {
    return (
        <div id='home-container'>
            <h1 id='home-title'>Welcome to the Matzo palace</h1>
            <img id='home-img' src={img} alt="" />
            <h5 className='h5'>get ready for some good old fashioned price gouging</h5>
            <h5>בזמן הזה של זמן חרותנו</h5>
        </div>
    )
}

export default HomePage