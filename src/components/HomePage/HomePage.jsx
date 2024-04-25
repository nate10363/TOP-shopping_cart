import './HomePage.css'
import url from '/passover-seder-plate.jpeg'


function HomePage() {
    return (
        <div id='home-container'>
            <h1 id='home-title'>Welcome to the Matzo palace</h1>
            <img id='home-img' src={url} alt="" />
            <h5 className='h5'>get ready for some good old fashioned price gouging</h5>
            <h5>בזמן הזה של זמן חרותנו</h5>
        </div>
    )
}

export default HomePage