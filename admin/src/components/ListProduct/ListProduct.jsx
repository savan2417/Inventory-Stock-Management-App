import React, { useEffect, useState } from 'react'
import "./ListProduct.css"
import remove_icon from "../../assets/cross_icon.png"

const ListProduct = () => {

  const [allProducts, setAllProducts] = useState([]);

  const fetchInfo = async () => {
    await fetch("http://localhost:4000/allProducts")
      .then((res) => res.json())
      .then((data) => { setAllProducts(data) })
  }

  useEffect(() => {
    fetchInfo();
  }, [])

  const remove_product = async (id) => {

    await fetch("http://localhost:4000/removeProduct", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id })

    })

    await fetchInfo();
  }



  return (
    <>
      <div className="container listProductMain">

        <div className="row">
          <div className="col-12">
            <h2 className='text-center fw-bold pb-4 pt-3'>All Product List</h2>
          </div>
        </div>

        <div className="row fw-bold text-center   ">
          <div className="col-sm-3  col-md-2 col-3 pt-3  pb-3 cardBorder headeringBgColor">Products</div>
          <div className="col-sm-3  col-md-2 col-3 pt-3  pb-3 cardBorder headeringBgColor">Title</div>
          <div className="col-sm-3  col-md-2 col-3 pt-3  pb-3 cardBorder headeringBgColor">Stock</div>
          <div className="col-sm-3  col-md-2 col-3 pt-3  pb-3 cardBorder headeringBgColor">New_Price</div>
          <div className="col-sm-3  col-md-2 col-3 pt-3  pb-3 cardBorder headeringBgColor">Category</div>
          <div className="col-sm-3  col-md-2 col-3 pt-3  pb-3 cardBorder headeringBgColor">Remove</div>
        </div>

        {allProducts.map((product, index) => {
          return (
            <div className="row fw-bold text-center   bgcolorofHeadingRow mt-3" key={index}>
              <div className="col-sm-3  col-md-2 col-3 pt-3  pb-3 cardBorder"> <img src={product.image} className='productImage' />  </div>
              <div className="col-sm-3  col-md-2 col-3 pt-3  pb-3 cardBorder productName"> {product.name} </div>
              <div className="col-sm-3  col-md-2 col-3 pt-3  pb-3 cardBorder"> {product.stock} </div>
              <div className="col-sm-3  col-md-2 col-3 pt-3  pb-3 cardBorder"> {product.new_price} </div>
              <div className="col-sm-3  col-md-2 col-3 pt-3  pb-3 cardBorder"> {product.category}</div>
              <div className="col-sm-3  col-md-2 col-3 pt-3  pb-3 cardBorder"> <img src={remove_icon} onClick={() => { remove_product(product.id) }} /> </div>
            </div>
          )
        })}









      </div>

    </>
  )
}

export default ListProduct