import { useOutletContext } from "react-router-dom"
import SingleItem from "../SingleItem/SingleItem";
import './ShoppingPage.css'

function ShoppingPage() {
    const { productsArr: [productsArr] } = useOutletContext();

    return (
        <>
            <h1 id="shopping-page-title">Let us price gouge you to death on products sourced by pseudo-slave labor</h1>
            <div id="shopping-items-grid">
                {
                    productsArr.map((item) => 
                        
                            <SingleItem 
                                key={item.id}
                                id={item.id}
                                category={item.category}
                                description={item.description}
                                src={item.image}
                                price={item.price}
                                rate={item.rating.rate}
                                count={item.rating.count}
                                title={item.title}
                            />
                            )
                }
            </div>
        </>
    )
}

export default ShoppingPage