import { useDispatch } from 'react-redux'
import { addToCart } from './features/cartSlice'


const products = [
  { id:1, name: "Keyboard", price: 45},
  { id:2, name: "Mouse", price: 30},
  { id:3, name: "Monitor", price: 300}
]

function ProductList() {
  
  const dispatch = useDispatch();
  
  return (
    <div>
        <h2>Products</h2>
        {
          products.map((product)=>{
            return(
              <div key={product.id}>
                <p>{product.name} - {product.price}</p>
                <button onClick={()=> dispatch(addToCart(product))}>Add to Cart</button>
              </div>)     
          })
        }
    </div>
  )
}

export default ProductList