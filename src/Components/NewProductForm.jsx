import React, {useState, useEffect} from 'react'

function NewProductForm() {

    const[productName, setProductName] = useState('')
    const[productDescription, setProductDescription] = useState('')
    const[productCategory, setProductCategory] = useState('')
    const[price, setPrice] = useState('')
    const[imageUrl, setImageUrl]= useState('')
    const[rating, setRating]= useState('')

    // function to handle new prouct creation
    function handleSubmit(e){
        e.preventDefault();

        // product object
      const productobj = {productName,imageUrl, productCategory,price, productDescription,rating }
      console.log(productobj)
        

        // fetch data from the API
        fetch("https://fakestoreapi.com/products", {
          method: "POST",
          headers:{
            "Content-Type": "application/json"
          },
          body:JSON.stringify(productobj)
        })
        
    }
   
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="product-name">Product Name</label>
        <input 
        type="text"
        name="product-name"
        id="product-name"
        onChange={(e)=>setProductName(e.target.value)}
        />
        <label htmFor="imageUrl">Product Image</label>
        <input type="text"
        name="imageUrl"
        onChange={(e)=>setImageUrl(e.target.value)}
        />
        
        <label htmFor="price">Price</label>
        <input type="number"
        name="price"
        onChange={(e)=>setPrice(e.target.value)}
        />

        <label htmFor="rating">Rating</label>
        <input type="number"
        name="rating"
        onChange={(e)=>setRating(e.target.value)}
        />

        <label htmlFor="product-description"></label>
        <textarea name="product-description" id="" cols="30" rows="10" onChange={(e)=>setProductDescription(e.target.value)}>Description </textarea>
        <button type="submit">Create Product</button>     

      </form>
    </div>
  )
}

export default NewProductForm;
