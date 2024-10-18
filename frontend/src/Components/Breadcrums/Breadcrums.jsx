import React from 'react'
import "./Breadcrums.css"
import arrow_icon from "../Assets/breadcrum_arrow.png"

const Breadcrums = ({ product }) => {

  return (
    <div className="container breadcrums">
      <div className="row">
        <div className="col-12">
          HOME <img src={arrow_icon} alt='' className='pe-1 ps-1' /> SHOP <img src={arrow_icon} alt='' className='pe-1 ps-1' />{product.category}<img src={arrow_icon} alt='' className='pe-1 ps-1' />{product.name}
        </div>
      </div>
    </div>

  )
}

export default Breadcrums