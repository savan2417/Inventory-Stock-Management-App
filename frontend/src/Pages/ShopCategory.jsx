import React, { useContext } from 'react'
import "./CSS/ShopCategory.css"
import { ShopContext } from '../Context/ShopContext'
import dropDownIcon from "../Components/Assets/dropdown_icon.png"
import Item from '../Components/Item/Item'

const ShopCategory = (props) => {

  const { contextValue } = useContext(ShopContext)


  return (
    <div className="container shopCategorySpace ">

      <div className="row">
        <div className="col-12">
          <img src={props.banner} className='img-fluid shopCategoryImageHeight' ></img>
        </div>
      </div>

      <div className="row mt-3 d-flex justify-content-sm-center justify-content-md-between justify-content-center align-items-center">
        <div className="col-md-6 col-lg-4 col-sm-8 col-6 ">
          <span className='fw-bold'>Showing 1-12</span> out of 36 Products
        </div>
        <div className="col-md-3 col-lg-2 col-sm-4 col-4 d-flex justify-content-center align-items-center ps-4 pe-4">
          <p className='border rounded-pill p-2'>Sort by <img src={dropDownIcon} /></p>
        </div>
      </div>

      <div className="row d-flex justify-content-center align-items-center ">

        {contextValue && contextValue.map((item, index) => {

          if (props.category === item.category) {
            return <Item key={index} item={item} />
          }
          else {
            return null;
          }

        })}
      </div>

      <div className="row mt-4 mb-4 d-flex justify-content-center align-items-center">
        <div className="col-md-3 col-sm-4 col-4 col-lg-2 rounded-pill border border-3 pt-2 pb-2 text-center">Load More</div>
      </div>




    </div>
  )
}

export default ShopCategory