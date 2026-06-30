import {useSelector, useDispatch} from 'react-redux'
import { clearCart } from './features/cartSlice'

function Cart() {

    const items = useSelector((state)=> state.cart.items);

    const dispatch = useDispatch();

    const totalPrice = items.reduce((sum,item)=> sum + item.price * item.quantity, 0);

    if(items.length == 0) return <p>Cart is Empty</p>;

  return (
    <div>
        <h2>Cart</h2>
        {
            items.map((item)=>{
              return(<div key={item.id}>
                     <p>{item.name} - {item.price}</p>
                </div>)
            })
        }

        <h3>Total Price : ${totalPrice}</h3>
    </div>
  )
}

export default Cart