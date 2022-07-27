import React from 'react'

function Products({title, price, rating}) {
  return (
    <div>
      <div className="container">
        <div className='row'>
          
          <div className='col-md-4 d-flex'>
          <div className='card shadow mx-5 pt-3'>
            <h1 className='card-title'>{title}</h1>
            <p className='card-text'>{price}</p>
            
        </div>
          </div>
        </div>
        
      </div>

    </div>
  )
}

export default Products;
