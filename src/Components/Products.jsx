import React from 'react'


function Products({image, title, price}) {

  
  
  return (
    <div>
     
       <div className='col-md-4 mt-3 mb-0' >
        <div className="card shadow mb-0 h-100 my-2  mt-5" style={{width: "18rem"}}>
          <img src={image} className="card-img-top" style={{ height: "250px"}} alt={title}/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text fw-bolder">$ {price}</p>
            <button className='btn btn-primary'>Buy Now</button>
            </div>
            </div>
            </div>
</div>
  )
}

export default Products;
