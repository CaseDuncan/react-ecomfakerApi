import React, {useState, useEffect} from 'react'

function NewProductForm() {

    const[productName, setProductName] = useState('')
    const[productDescription, setProductDescription] = useState('')
    const[productCategory, setProductCategory] = useState('')

    // function to handle new prouct creation
    function handleSubmit(e){
        e.preventDefault();

        // product object
        newProduct ={
            productName,
            imageUrl,
            productCategory,
            productDescription
        }

        // useEffect Hook to fetch data from the API

        useEffect(()=>{
            fetch("", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newProduct)
            })
        })
        .then((response)=>response.json())
    }
    function handleChange(e){
        e.preventDefault();
        setProductName()
    }
    // change state 
   
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="product-name">Product Name</label>
        <input 
        type="text"
        name="product-name"
        id="product-name"
        onChange={handleChange}
        />
        <label htmFor="imageUrl">Product Image</label>
        <input type="text"
        name="imageUrl"
        />

        <label htmlFor="product-description"></label>
        <textarea name="product-description" id="" cols="30" rows="10" onChange={(e)=>setProductDescription(e.target.value)}>Description</textarea>
        <button type="submit">Create Product</button>     

      </form>
    </div>
  )
}

export default NewProductForm
