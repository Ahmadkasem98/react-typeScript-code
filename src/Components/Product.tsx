import React from 'react'
import { ProductTypes } from '../types/app'

type productProps = {
    productData:ProductTypes[];
}

const Product = (props: productProps) => {
  return (
    <div>
        {
        props.productData.map((item) => {
    return <div>
        <div>{item.name}</div>
        <div>{item.desc}</div>
        <div>{item.number}</div>
        <div>{item.price}</div>
    </div>
})
        }
    </div>
  )
}

export default Product;