import React, { useState, useEffect } from 'react'


function ProductsPage() {
    const[products, setProducts] = useState([])
    const[isLoading, setIsLoading] = useState(false)

    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        .then((response)=>response.json())
        .then((data)=>{
          setProducts(data)
        })
        
    }, [])
      
   

    const Loading =()=>{
      return(
        <>
        <h1>Loading.....</h1>
        </>
      )
     
      
    }

    const filterProducts =(filteredProduct)=>{
      const filteredProducts = products.filter((product)=>product.category === filteredProduct)
      setProducts(filteredProducts)
    }

    const ShowProducts = ()=>{
      return (
        <div>
           <div className='justify-content-center d-flex mb-3 pb-3'> 
           <button className='btn btn-outline-primary mx-3' onClick={()=>setProducts(products)}>All</button>
           <button className='btn btn-outline-primary mx-2' onClick={()=>filterProducts("men's clothing")}>Men's Wear</button>
           <button className='btn btn-outline-primary mx-2' onClick={()=>filterProducts("women's clothing")}>Women's Wear</button>
         <button className='btn btn-outline-primary mx-2' onClick={()=>filterProducts("electronics")}>Electronics</button>
         <button className='btn btn-outline-primary mx-2' onClick={()=>filterProducts("jewelery")}>Jewelery</button>
      </div>
      {products.map((product)=>{
        return (
          <div className='container'>
            <div className='row'>
              <div className='col-md-3'>
              <div className="card" style={{width: "18rem"}} key={product.id}>
              <img src={product.image} className="card-img-top" alt={product.title} />
              <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text fw-bold">$ {product.price}</p>
              <a href="#" className="btn btn-primary">Buy Now</a>
           </div>
          </div>
              </div>
            </div>
          </div>
          
        )
      })}
      </div>
    )
    }
   

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className='py-3 my-3 text-center'>Latest Products</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {isLoading ? <Loading/> : <ShowProducts/>}

        </div>
      </div>
      
  
     
    </div>
  )
}

export default ProductsPage;
