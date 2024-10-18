import React from 'react'
import "./RelatedProducts.css"
import Item from '../Item/Item'


const RelatedProducts = ({ product, contextValue }) => {


  return (
    <div className="container mt-5">
      <div className="row ">
        <h2 className='text-center'>Related Products</h2>
        <div className='RelatedProductsUnderline'></div>
      </div>
      <div className="row d-flex justify-content-center align-items-center ">
        {contextValue && contextValue.map((item, index) => {

          if (product.category === item.category) {
            return <Item item={item} key={index} />
          }
          else {
            return null
          }

        })}
      </div>

    </div>

  )
}

export default RelatedProducts