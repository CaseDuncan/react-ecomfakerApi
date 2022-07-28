import React from 'react'

function Products({onfilterProducts, title, price, rating, image}) {


 

 
  return (
    <div className="container">
      

      <div className='row'>

      <div className='col-md-3'>
      <div className="card shadow mb-3 h-100" style={{width: "18rem"}}>
      <img src={image} className="card-img-top" height={"250px"} alt={title}/>
      <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text fw-bolder">$ {price}</p>
      <p className="card-text">{rating}</p>
      <button className='btn btn-primary'>Buy Now</button>
      </div>
      
     
     </div>
    </div>

      </div>
      

</div>
  )
}

export default Products;
