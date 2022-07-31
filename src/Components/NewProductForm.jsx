import React, {useState} from 'react'

function NewProductForm({ohandleAddProduct}) {

    const[title, setTitle] = useState('')
    const[price, setPrice] = useState('')
    const[image, setImage]= useState('')
    const[rating, setRating]= useState('')

    // function to handle new prouct creation
    function handleSubmit(e){
        e.preventDefault();

        // product object
      const productobj = {title,image, price, description, rating }
      
        

        // fetch data from the API
        fetch("https://fakestoreapi.com/products", {
          method: "POST",
          headers:{
            "Content-Type": "application/json"
          },
          body:JSON.stringify(productobj)
        })
        .then((response)=>response.json())
        .then((newProduct)=>ohandleAddProduct(newProduct))
       
    }
   
  return (
    <div>
      <div className='container'>
        <div className="row">
          <div className='col-md-3'></div>
          <div className='col-md-3 mt-3'>
            <h3 className='text-center'>New Product</h3>
          <form onSubmit={handleSubmit}>
        <div className='form-group'>
        <label htmlFor="title">Product Name</label>
        <input 
        type="text"
        className='form-control'
        name="title"
        id="product-name"
        onChange={(e)=>setTitle(e.target.value)}
        />
        </div>
        <div className='form-group'>
        <label htmlFor="image">Product Image</label>
        <input type="text"
        className='form-control'
        name="image"
        onChange={(e)=>setImage(e.target.value)}
        />
        </div>
        
        <div className='form-group'>
        <label htmlFor="price">Price</label>
        <input type="number"
        className='form-control'
        name="price"
        onChange={(e)=>setPrice(e.target.value)}
        />
        </div>

        <div className='form-group'>
        <label htmlFor="rating">Rating</label>
        <input type="number"
        className='form-control'
        name="rating"
        onChange={(e)=>setRating(e.target.value)}
        />
        </div>
        <button type="submit" className='btn btn-outline-dark'>Create Product</button>     

      </form>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default NewProductForm;
 