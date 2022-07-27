import React, { useState, useEffect } from 'react'
import Products from './Products';

function ProductsPage() {
    const[products, setProducts] = useState([])
    const[isLoading, setIsLoading] = useState(false)

    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        .then((response)=>response.json())
        .then((data)=>{
          setIsLoading(true)
          setProducts(data)
        })
        
    }, [])

    const productList = products.map((product)=>(
      <Products
      key={product.id}
      title={product.title}
      price={product.price}
      rating={product.rating}
      description={product.description}
      />
    ))

  return (
    <div>
      {productList}
    </div>
  )
}

export default ProductsPage;
