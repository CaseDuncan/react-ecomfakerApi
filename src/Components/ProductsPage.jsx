import React, { useState, useEffect } from 'react'
import Products from './Products'


function ProductsPage() {
    const[products, setProducts] = useState([])
    const[isLoading, setIsLoading] = useState(false)
    const[filter, setFilter] = useState('')

    useEffect(()=>{
      
        fetch("https://fakestoreapi.com/products")
        .then((response)=>response.json())
        .then((data)=>{
          setProducts(data)
          setFilter(data)
          setIsLoading(false)
        })
        
    }, [filter])

    const filterProducts =(filteredProduct)=>{
      const filteredProducts = products.filter((product)=>product.category === filteredProduct)
      setFilter(filteredProducts)
    }
  
    function handleAddProduct(newProduct){
      setProducts([...products, newProduct])
    }

  
   const productList = products.map((product)=>(
   <Products
    key={product.id}
    title={product.title}
    image={product.image}
    price={product.price}
    onandleAddProduct={handleAddProduct}
    />
   ))


  return (
    <div>
      <div className='container'>

      <h1 className='text-center display-4 fw-bolder'>Latest Products</h1>
      <hr />

      <div className='justify-content-center d-flex mb-3 pb-3'> 
           <button className='btn btn-outline-primary mx-3' onClick={()=>setProducts(products)}>All</button>
           <button className='btn btn-outline-primary mx-2' onClick={()=>filterProducts("men's clothing")}>Men's Wear</button>
           <button className='btn btn-outline-primary mx-2' onClick={()=>filterProducts("women's clothing")}>Women's Wear</button>
         <button className='btn btn-outline-primary mx-2' onClick={()=>filterProducts("electronics")}>Electronics</button>
         <button className='btn btn-outline-primary mx-2' onClick={()=>filterProducts("jewelery")}>Jewelery</button>
         </div>

        <div className='row'>
         {productList}

        </div>
        </div>
    </div>   
  )
}

export default ProductsPage;
