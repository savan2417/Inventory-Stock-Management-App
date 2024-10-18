import React from 'react'
import "./Offer.css"
import exclusiveImage from "../Assets/exclusive_image.png"
import { Link } from 'react-router-dom'


const Offer = () => {
  return (

    <div className="container offer-container mb-5 ">
      <div className="row">

        <div className="col-md-6 col-sm-6  offer-left-side  ">
          <h1 className='offer-heading'>Exclusive <br /> Offers For You</h1>
          <p className='offer-subheading'>ONLY ON BEST SELLERS PRODUCTS</p>
          <Link to="#"> <button type="button" className="btn  offer-btn"> Check Now </button></Link>
        </div>

        <div className="col-md-6  col-sm-6 d-flex justify-content-center align-items-center ">
          <img src={exclusiveImage} className='offer-right-image' />
        </div>
      </div>
    </div>

  )
}

export default Offer