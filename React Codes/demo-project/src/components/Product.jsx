import React from 'react'

function Product({data}){

  const Badge = () => <span className='badge'>Prime</span>

  return <div className='product'>
            <h2>{data.heading} {data.isPrime ? <Badge /> : ""}</h2>
              <p>{data.description} </p>
              <h3>{data.price}/-</h3>
              <button>Add to Cart</button>
          </div>
}

export default Product