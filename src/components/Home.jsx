import Product from "./Product"
import './Home.css'

let Home=()=>{
    return(
      <div className="product-container">
          <Product/>
          <Product/>
          <Product/>
      </div>
    )
  }
  
  export default Home